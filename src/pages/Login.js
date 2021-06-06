import React, { useState } from "react";
import "../styles/login.css";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function Login() {
  const [login, setlogin] = useState("");

  let history = useHistory();
  const dispatch = useDispatch();

  console.log(history.location);

  const handleLogin = (e) => {
    const { value } = e.target;
    setlogin(value);
  };

  const handleClick = () => {
    dispatch({
      type: "UPDATE_CURRENTUSER",
      payload: {
        currentUser: login,
      },
    });

    if (history.location.state !== undefined) {
      if (
        history.location.state.from.pathname.includes(
          "/unansweredquestion/"
        ) === true ||
        history.location.state.from.pathname.includes("/question/") === true
      ) {
        history.push("/NotFound");
      } else history.push(history.location.state.from.pathname);
    } else {
      history.push("/home");
    }
  };

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

      <button
        onClick={handleClick}
        disabled={login.length ? false : true}
        className="login_submit_button"
      >
        Signin
      </button>
    </div>
  );
}

export default Login;
