import User from "../models/user.js";
import { hashPassword, comparePassword } from "../utils/auth.js";
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  console.log("Received request:", req.method, req.url, req.body);
  try {
    // console.log(req.body)
    const { name, email, password } = req.body;

    //validations for password length, email duplication
    if (!name) {
      return res.status(400).send("Name is required");
    }

    if (!password || password.length < 8) {
      return res
        .status(400)
        .send("Password is requires and should be min 8 characters long");
    }

    let userExists = await User.findOne({ email }).exec();

    if (userExists) {
      return res.status(400).send("Email is taken");
    }

    // hash password
    const hashedPassword = await hashPassword(password);

    //register
    const user = new User({
      name,
      email,
      password: hashedPassword,
    });

    await user.save();

    // console.log("saved user", user);

    return res.json({ ok: true });
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try again.");
  }
};

export const login = async(req, res) => {
  try {
    // console.log(req.body);
    const {email, password}= req.body;
    //check if db has user with that email
    const user= await User.findOne({emai}).exec();
    if(!user){
      return res.status(400).send("No user found")
    }
    // check password
    const match = await comparePassword(password, user.password);
    // create signed jwt
    const token = jwt.sign({_id:user._id})
  } catch (err) {
    console.log(err);
    return res.status(400).send("Error. Try Again!");
  }
};
