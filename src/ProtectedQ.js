import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, useHistory } from "react-router-dom";

function ProtectedQ({ isAuth, component: Compnent, ...rest }) {
  const { currentUser } = useSelector((state) => state.StateUsers);
  const history = useHistory();

  console.log(history.location);
  return (
    <Route
      {...rest}
      render={(props) => {
        if (currentUser !== null) {
          return <Compnent {...props} />;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/NotFound",
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
}

export default ProtectedQ;
