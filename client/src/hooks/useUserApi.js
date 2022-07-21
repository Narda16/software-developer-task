import { METHODS, PATHS } from "../helpers/constants";
import ApiError from "../components/UI/ApiError";

import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actions } from "../store/store";
import { useState } from "react";

export function useUserApi() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  async function getUsers() {
    await axios({
      method: METHODS.GET,
      url: PATHS.GET_USERS,
    }).then((res) => dispatch(actions.setUsers(res.data)));
  }

  async function deleteUserHandler(userId) {
    await axios({
      method: METHODS.DELETE,
      url: PATHS.DELETE_USER + "/" + userId,
    }).then((res) => dispatch(actions.setUsers(res.data)));
  }

  async function createNewUser(input) {
    await axios({
      method: METHODS.POST,
      url: PATHS.CREATE_USER,
      data: input,
    })
      .then(() => navigate("/"))
      .catch((err) => setError(err.response.data.error));
  }

  async function getUser(userId) {
    await axios({
      method: METHODS.GET,
      url: PATHS.GET_USER + "/" + userId,
    }).then((res) => dispatch(actions.setUser(res.data)));
  }

  async function editUser(userId, input) {
    await axios({
      method: METHODS.PATCH,
      url: PATHS.EDIT_USER + "/" + userId,
      data: input,
    })
      .then(() => navigate("/"))
      .catch((err) => setError(err.response.data.error));
  }

  const apiError = error && <ApiError message={error} />;

  return {
    getUsers,
    deleteUserHandler,
    createNewUser,
    editUser,
    getUser,
    apiError,
  };
}
