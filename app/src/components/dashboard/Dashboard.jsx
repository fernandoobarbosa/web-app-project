import React, { useEffect, useState } from "react";
import Table from "./Table";
import pokeApi from "../../services/pokeApi";
import api from "../../services/api";
import Navbar from "../common/Navbar";
function Dashboard({ logout, login, ...rest }) {
  const [userResponse, setUserResponse] = useState({});
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    userRequest();
  }, []);
  const config = {
    headers: {
      "Content-Type": "application/json",
      "x-access-token": localStorage.getItem("token"),
    },
  };
  function userRequest() {
    api
      .get("/user", config)
      .then((result) => {
        setShowTable(true);
        setUserResponse(result.data[0]);
      })
      .catch((err) => {
        setShowTable(false);
      });
  }

  function changeTask(event, id) {
    api
      .post(
        "/task/" + event,
        {
          firstName: "Fred",
          lastName: "Flintstone",
        },
        config
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <section>
      <Navbar
        logout={logout}
        userRequest={userRequest}
        setShowTable={setShowTable}
      />
      <Table showTable={showTable} userResponse={userResponse} />
    </section>
  );
}
export default Dashboard;
