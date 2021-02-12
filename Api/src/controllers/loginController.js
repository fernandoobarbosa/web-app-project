import { response } from "express";
import jwt from "jsonwebtoken";
import { authenticate } from "../services/userService";

export const loginValidation = (login, password, res) => {
  authenticate(login, password)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.status(401).send(error.message);
    });
};
