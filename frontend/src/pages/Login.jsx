import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';


const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  let navigate = useNavigate();

  const notify  = (e) => {
    e.preventDefault();
    
    axios
      .post("http://localhost:8080/auth/login", {
        email,
        password,
      })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("token", res.data);
        navigate("/");
        toast.success('Successfully toasted!')

      })
      .catch((err) => {
        console.log(err.message);
        toast.error("This didn't work.")
        toast.success('Successfully toasted!')

      });
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={notify}>
        <div>
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </div>
        <input type="submit" />
      </form>
      <Toaster/>
    </div>
  );
};

export default Login;