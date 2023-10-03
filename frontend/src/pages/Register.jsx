import axios from "axios";
import React, {useState} from "react";
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const notify = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/auth/register", {
        username,
        email,
        password,
      })
      .then(() => {
        console.log("welcome new user");
      })
      .catch((err) => {
        console.log(err.message);
        toast.success('Successfully toasted!')

      });
  };

  return (
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXN70XPuQkewQGiUTavGbi6R7D3n7-0d8kM1n_WIXQIIRu2abA-1JANMJoel_SJrZDghM&usqp=CAU"></img>
      <h1>Register Form</h1>
      <form onSubmit={notify}>
        <div>
          <label htmlFor="username">username</label>
          <input
            type="text"
            name="username"
            id="username"
            onChange={(e) => setusername(e.target.value)}
          />
        </div>
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

export default Register;