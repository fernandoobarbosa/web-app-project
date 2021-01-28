import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link,
} from "react-router-dom";

import ProtectedRoute from "./components/ProtectedRoute";
import Secret from "./components/Secret";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = () => {
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.setItem("auth", false);
    setIsAuthenticated(false);
  };

  useEffect(() => {
    if (localStorage.getItem("auth") === "true") {
      login();
    } else {
      logout();
    }
  });

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            {isAuthenticated ? (
              <Redirect to="/dashboard" />
            ) : (
              <Login
                isAuthenticated={isAuthenticated}
                logout={logout}
                login={login}
                component={Login}
              />
            )}
          </Route>
          <ProtectedRoute
            isAuthenticated={isAuthenticated}
            path="/dashboard"
            logout={logout}
            login={login}
            component={Dashboard}
          />
          <Route path="*">
            <div>404 Not found </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
