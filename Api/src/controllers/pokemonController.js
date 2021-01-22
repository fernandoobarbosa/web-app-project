import axios from 'axios'
export const responseReturner = (poke, res) => {

  axios.get('https://pokeapi.co/api/v2/pokemon/' + poke)
    .then(function (response) {

      response.data.moves.forEach(element => {

      });
      res.status(200).send(response.data.sprites)
    })
    .catch(function (error) {
      res.status(404).send(error.message);
    })

}
