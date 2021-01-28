import FormularioCadastro from "./FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import "fontsource-roboto";
import api from "../../services/api";
import { useHistory } from "react-router-dom";

function Login({ login, logout }) {
  const history = useHistory();

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
        localStorage.setItem("auth", false);
        localStorage.setItem("token", "no token");
        logout();
        console.log(error);
      });
  }
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" align="center" component="h1">
        Welcome!
      </Typography>
      <FormularioCadastro onSubmit={onSubmitForm} />
    </Container>
  );
}

export default Login;
