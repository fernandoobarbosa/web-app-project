import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function FormularioCadastro({ onSubmit }) {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

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
        id="login"
        label="Login"
        variant="outlined"
        fullWidth
        margin="normal"
      />

      <TextField
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        id="password"
        label="Password"
        variant="outlined"
        fullWidth
        margin="normal"
        type="password"s
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
