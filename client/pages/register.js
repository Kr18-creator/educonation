import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [name, setName] = useState("Rashmi");
  const [email, setEmail] = useState("kr040902@gmail.com");
  const [password, setPassword] = useState("password");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({name, email, password});
    try {
      const { data } = await axios.post(`http://localhost:8000/api/register`, {
        name,
        email,
        password,
      });
      // console.log("REGISTER RESPONSE", data)
      toast.success("Registration successful. Please login.");
    } catch (err){
      toast.error(err.response.data);
    }
  };
  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">Register</h1>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="form-control mb-4 p-4"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="form-control mb-4 p-4"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            className="form-control mb-4 p-4"
            placeholder="Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn btn-block btn-primary p-2" type="submit">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
