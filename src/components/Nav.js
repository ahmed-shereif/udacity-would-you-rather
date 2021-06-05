import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { getUsersData } from "../actions/usersAction";
import "../styles/Nav.css";
function Nav() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsersData());
  }, [dispatch]);

  let history = useHistory();

  // to delete current user on log out and reditect to home page
  function handleClick() {
    dispatch({
      type: "EMPTY_CURRENTUSER",
      payload: { null: null },
    });
    history.push("/");
  }

  let { currentUser } = useSelector((state) => state.StateUsers);

  return (
    <div className="nav">
      <div className="left">
        <ul>
          {currentUser instanceof Object ? (
            <>
              <Link to="/home">
                <li>Home</li>
              </Link>
              <Link to="/add">
                <li>New Question</li>
              </Link>
              <Link to="/leaderboard">
                <li>Leader Board</li>
              </Link>
            </>
          ) : (
            " "
          )}
        </ul>
      </div>
      <div className="right">
        <p>{currentUser instanceof Object ? currentUser.name : " "}</p>

        <img
          src={
            currentUser instanceof Object
              ? currentUser.avatarURL
              : "https://image.pngaaa.com/569/2189569-middle.png "
          }
          width="55"
          alt="avatar"
        />
        <button onClick={handleClick}>Logout </button>
      </div>
    </div>
  );
}

export default Nav;
