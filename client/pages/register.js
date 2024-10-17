import React, { useState } from "react";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
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
