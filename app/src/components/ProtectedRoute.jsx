import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";

function ProtectedRoute({
  component: Component,
  isAuthenticated: isAuthenticated,
  logout: logout,
  login: login,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component logout={logout} login={login} />;
        } else {
          return (
            <Redirect to={{ pathname: "/", state: { from: props.location } }} />
          );
        }
      }}
    />
  );
}

export default ProtectedRoute;
