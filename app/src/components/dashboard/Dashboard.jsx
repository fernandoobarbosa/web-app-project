import React, { useEffect, useState } from "react";
import Table from "./Table";
import api from "../../services/api";
import pokeApi from "../../services/pokeApi";
import Navbar from "../common/Navbar";
function Dashboard({ logout, login, ...rest }) {
  const [pokeResponseMoves, setpokeResponseMoves] = useState([
    {
      move: [{ name: "TESTE" }, { name: "TESTE" }],
    },
  ]);
  // const [users, setUsers] = useState({});
  // useEffect(() => {
  //   let data = {
  //     headers: {
  //       "x-access-token": localStorage.getItem("token"),
  //       "content-type": "application/json",
  //     },
  //   };
  //   api
  //     .get("/users", data)
  //     .then(function (response) {
  //       setUsers(response.data);
  //       //console.log(response.data);
  //     })
  //     .catch(function (error) {
  //       localStorage.setItem("auth", false);
  //       logout();
  //       console.log(error);
  //     });
  // }, []);

  // useEffect(() => {
  //   //console.log(users);
  // }, [users]);

  function pokeRequest(pokemon) {
    pokeApi
      .get("/pokemon/" + pokemon)
      .then(function (response) {
        // handle success
        //console.log(response.data);
        //setpokeResponseMoves(response.data.moves);
      })
      .catch(function (error) {
        //setpokeResponseMoves({
        //move: [{ name: "TESTE" }, { name: "TESTE" }],
        // });
        // handle error
        //console.log(error);
      });
  }
  return (
    <section>
      <Navbar logout={logout} pokeRequest={pokeRequest} />
      <Table pokeResponseMoves={pokeResponseMoves} />
    </section>
  );
}
export default Dashboard;
