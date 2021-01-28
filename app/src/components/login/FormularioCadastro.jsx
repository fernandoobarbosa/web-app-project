import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";

function FormularioCadastro({ onSubmit, error }) {
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
        error={error.validation}
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
        type="password"
        error={error.validation}
        helperText={error.message}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioCadastro;
