import React, { useEffect, useState } from "react";
import Table from "./Table";
import api from "../../services/api";
function Dashboard({ logout, login, ...rest }) {
  const [users, setUsers] = useState({});
  useEffect(() => {
    let data = {
      headers: {
        "x-access-token": localStorage.getItem("token"),
        "content-type": "application/json",
      },
    };
    api
      .get("/users", data)
      .then(function (response) {
        setUsers(response.data);
        //console.log(response.data);
      })
      .catch(function (error) {
        localStorage.setItem("auth", false);
        logout();
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <section>
      <button onClick={logout}>LOGOU</button>
      <Table />
    </section>
  );
}
export default Dashboard;
