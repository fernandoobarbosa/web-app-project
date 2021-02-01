import { response } from "express";
import hash from "object-hash";
import User from "../models/user";
import { getAll, create, test, teste } from "../services/userService";

export const createUser = async (login, password, res) => {
  create(login, password)
    .then((response) => {
      res.status(201).send(response);
    })
    .catch((error) => {
      res.status(400).send(error._message);
    });
};

export const getUsers = async (req, res) => {
  getAll()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(400).send(error.writeErrors[0].errmsg);
    });
};
