import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.table({name, email, password});
    const {data}= await axios.post(`http://localhost:8000/api/register`)
    console.log("REGISTER RESPONSE", data)
  };
  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">Register</h1>
      <div className='container col-md-4 offset-md-4 pb-5'>
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
