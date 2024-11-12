import React, { useState, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../context";

const Login = () => {
  const [email, setEmail] = useState("kr040902@gmail.com");
  const [password, setPassword] = useState("password");
  const [loading, setLoading] = useState(false);

  //state
  const { state, dispatch } = useContext(Context);

  console.log("STATE", state);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      // Note the relative URL here
      const { data } = await axios.post(`/api/login`, {
        email,
        password,
      });
      //console.log("LOGIN RESPONSE", data)
      dispatch({
        type: "LOGIN",
        payload: data,
      });
    } catch (err) {
      console.log("err", err);
      toast.error(err.response.data);
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className="jumbotron text-center bg-primary square">Login</h1>
      <div className="container col-md-4 offset-md-4 pb-5">
        <form onSubmit={handleSubmit}>
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
          <button
            className="btn btn-block btn-primary"
            type="submit"
            disabled={!email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : "Submit"}
          </button>
        </form>

        <p className="text-center p-3">
          Not yet registered?{" "}
          <Link legacyBehavior href="/register">
            <a>Register</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default Login;
