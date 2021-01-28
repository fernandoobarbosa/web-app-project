import React, { Component } from "react";
import { withRouter } from "react-router-dom";

function Secret({ logout, login, ...rest }) {
  return (
    <div>
      <h1>Secret</h1>
      <button onClick={logout}>Log out</button>
      <button onClick={login}>Log In</button>
    </div>
  );
}

export default withRouter(Secret);
