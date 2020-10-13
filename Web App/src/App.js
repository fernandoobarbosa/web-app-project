import React from "react";
import './assets/index.css'
import FormTeste from './components/FormTeste/formTeste'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>

      <Switch>
        <Route path="/about">
          <FormTeste />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <FormTeste />
        </Route>
      </Switch>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}


function Users() {
  return <h2>Users</h2>;
}