import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { responseReturner } from "../controllers/pokemonController";
import { loginValidation, tokenVerify } from "../controllers/loginController";
import { createUser, getUsers, teste1 } from "../controllers/userController";

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post("/teste", (req, res) => {
  const values = responseReturner(req.body.poke, res);
});

app.post("/authenticate", (req, res) => {
  loginValidation(req.body.login, req.body.password, res);
});

app.post("/user", (req, res) => {
  createUser(req.body.login, req.body.password, res);
});

app.get("/users", verifyJWT, (req, res, next) => {
  console.log(req.userId);
  getUsers(req, res);
});

app.get("/teste", (req, res) => {
  teste1(req.res);
});

function verifyJWT(req, res, next) {
  tokenVerify(req, res, next);
}

export default app;
