import hash from "object-hash";
import User from "../models/user";
import {
  getAll,
  create,
  test,
  teste,
  authenticate,
  createNewTask,
  deleteTaskById,
  updateTaskProgress,
} from "../services/userService";
import jwt from "jsonwebtoken";

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

export const loginValidation = (login, password, res) => {
  authenticate(login, password)
    .then((response) => {
      res.send(response);
    })
    .catch((error) => {
      res.status(401).send(error.message);
    });
};

export const createTask = (userId, taskName, res) => {
  createNewTask(userId, taskName)
    .then((response) => {
      res.status(201).send(response);
    })
    .catch((error) => {
      res.status(400).send(error.writeErrors[0].errmsg);
    });
};

export const deleteTask = (userId, taskId, res) => {
  deleteTaskById(userId, taskId)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(400).send(error.writeErrors[0].errmsg);
    });
};

export const setTaskProgress = (
  userId,
  taskId,
  inProgress,
  toDo,
  done,
  res
) => {
  updateTaskProgress(userId, taskId, inProgress, toDo, done)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(400).send(error.writeErrors[0].errmsg);
    });
};
