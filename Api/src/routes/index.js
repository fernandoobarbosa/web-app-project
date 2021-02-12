import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { responseReturner } from "../controllers/pokemonController";
import { loginValidation } from "../controllers/loginController";
import { createUser, getUsers, teste1 } from "../controllers/userController";
import { verifyToken } from "../middleware/verifyToken";

const app = express();
app.use(bodyParser.json());
app.use(cors());
const privateRoute = express.Router();
privateRoute.use(verifyToken);

privateRoute.get("/teste", (req, res, next) => {
  res.send("hey");
});
//app.use(verifyToken);
//app.use("/authenticate", whiteListed);

app.post("/teste", (req, res) => {
  const values = responseReturner(req.body.poke, res);
});

app.post("/authenticate", (req, res) => {
  console.log(req.body);
  loginValidation(req.body.login, req.body.password, res);
});

app.post("/user", (req, res) => {
  createUser(req.body.login, req.body.password, res);
});

privateRoute.get("/users", (req, res) => {
  console.log(req.userId);
  getUsers(req, res);
});

app.use(privateRoute);

export default app;
