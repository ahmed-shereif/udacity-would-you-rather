import React, { useState } from "react";
import "../styles/login.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
function Login() {
  const [login, setlogin] = useState("");

  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  const handleLogin = (e) => {
    const { value } = e.target;
    setlogin(value);
  };
  const dispatch = useDispatch();
  dispatch({
    type: "UPDATE_CURRENTUSER",
    payload: {
      currentUser: login,
    },
  });

  return (
    <div className="login">
      <h1>WOULD YOU RATHRT APP</h1>
      <h3>Select A User To Login</h3>
      <select value={login} onChange={handleLogin} className="login__select">
        <option value="" disabled>
          select user
        </option>
        <option value="sarahedo">sarahedo</option>
        <option value="tylermcginnis">tylermcginnis</option>
        <option value="johndoe">johndoe</option>
      </select>

      <button onClick={handleClick}>Signin</button>
    </div>
  );
}

export default Login;
