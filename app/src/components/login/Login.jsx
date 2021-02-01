import FormLogin from "./FormLogin";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Login({ login, logout }) {
  const history = useHistory();
  const [error, setError] = useState({ message: "", validation: false });
  function onSubmitForm(dados) {
    api
      .post("/authenticate", {
        login: dados.login,
        password: dados.password,
      })
      .then(function (response) {
        localStorage.setItem("auth", response.data.auth);
        localStorage.setItem("token", response.data.token);
        login();
        console.log(response);
      })
      .catch(function (error) {
        let object = {
          message: "Login Error!",
          validation: true,
        };
        setError(object);
        localStorage.setItem("auth", false);
        localStorage.setItem("token", "no token");
        logout();
        console.log(error);
      });
  }
  function noError() {
    let object = {
      message: " ",
      validation: false,
    };
    setError(object);
  }
  return (
    <Container component="article" maxWidth="sm">
      <FormLogin error={error} onSubmit={onSubmitForm} noError={noError} />
    </Container>
  );
}

export default Login;
