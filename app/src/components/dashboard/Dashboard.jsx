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

  function toDoRequest(id) {
    api
      .put(
        "/task/" + id,
        {
          toDo: true,
        },
        config
      )
      .then(function (response) {
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function inProgressRequest(id) {
    api
      .put(
        "/task/" + id,
        {
          inProgress: true,
        },
        config
      )
      .then(function (response) {
        window.location.reload();
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function doneRequest(id) {
    api
      .put(
        "/task/" + id,
        {
          done: true,
        },
        config
      )
      .then(function (response) {
        window.location.reload();
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
      <Table
        showTable={showTable}
        userResponse={userResponse}
        toDoRequest={toDoRequest}
        inProgressRequest={inProgressRequest}
        doneRequest={doneRequest}
      />
    </section>
  );
}
export default Dashboard;
