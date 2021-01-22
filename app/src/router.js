import React from "react";
import Login from  "./components/login/Login"
const routes = {
  "/": () => <Login />,
  "/dashboard": () => <Login />
};
export default routes;