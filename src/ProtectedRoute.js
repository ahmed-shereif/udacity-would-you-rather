import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ isAuth, component: Compnent, ...rest }) {
  const { currentUser } = useSelector((state) => state.StateUsers);

  if (currentUser === null) {
    console.log("currentUser is null");
  }
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
                pathname: "/",
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
