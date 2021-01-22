import { Component } from "react";
import FormularioCadastro from "./FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import api from "../../services/api";

function Login() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">
        Formulario de Cadastro
      </Typography>
      <FormularioCadastro onSubmit={onSubmitForm} />
    </Container>
  );
}

function onSubmitForm(dados) {
  api
    .post("/authenticate", {
      login: dados.login,
      password: dados.password,
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
export default Login;
