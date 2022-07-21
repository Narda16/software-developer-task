import { METHODS, PATHS } from "../helpers/constants";

import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { actions } from "../store/store";

export function usePermissionApi() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  async function getPermissions() {
    await axios({
      method: METHODS.GET,
      url: PATHS.GET_PERMISSIONS,
    }).then((res) => dispatch(actions.setPermissions(res.data)));
  }

  async function assignPermissions(data) {
    await axios({
      method: METHODS.POST,
      url: PATHS.POST_PERMISSIONS,
      data: data,
    }).then(() => navigate("/"));
  }

  return { getPermissions, assignPermissions };
}
