export const register = (req, res) => {
    console.log('Received request body:', req.body);  // Log the request body
    res.status(200).send("User registered successfully");
  };
  
  