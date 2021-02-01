import FormRegister from "./FormRegister";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { useState } from "react";

function Register({ login, logout }) {
  const history = useHistory();
  function onSubmitForm(dados) {
    api
      .post("/user", {
        login: dados.login,
        password: dados.password,
      })
      .then(function (response) {
        history.push("/");
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <Container component="article" maxWidth="sm">
      <FormRegister onSubmit={onSubmitForm} />
    </Container>
  );
}

export default Register;
