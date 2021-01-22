import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function FormularioCadastro({ onSubmit, validarCpf }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  //const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ login, password });
      }}
    >
      <TextField
        value={login}
        onChange={(event) => {
          setLogin(event.target.value);
        }}
        id="nome"
        label="Nome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
