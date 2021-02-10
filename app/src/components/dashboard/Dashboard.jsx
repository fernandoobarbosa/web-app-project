import React, { useEffect, useState } from "react";
import Table from "./Table";
import api from "../../services/api";
import pokeApi from "../../services/pokeApi";
import Navbar from "../common/Navbar";
function Dashboard({ logout, login, ...rest }) {
  const [pokeResponse, setpokeResponse] = useState({});
  const [showTable, setShowTable] = useState(false);
  console.log(pokeResponse);
  function pokeRequest(pokemon) {
    pokeApi
      .get("/pokemon/" + pokemon.toLowerCase())
      .then(function (response) {
        // handle success
        //console.log(response.data);
        setpokeResponse(response.data);
        setShowTable(true);
      })
      .catch(function (error) {
        setShowTable(false);
        // handle error
        //console.log(error);
      });
  }
  return (
    <section>
      <Navbar
        logout={logout}
        pokeRequest={pokeRequest}
        setShowTable={setShowTable}
      />
      <Table pokeResponse={pokeResponse} showTable={showTable} />
    </section>
  );
}
export default Dashboard;
