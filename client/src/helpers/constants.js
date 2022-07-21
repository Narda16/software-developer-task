export const METHODS = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE",
};

export const PATHS = {
  GET_USERS: "/user/get-users",
  DELETE_USER: "/user/delete-user",
  CREATE_USER: "/user/add-new-user",
  GET_USER: "/user/get-user",
  EDIT_USER: "/user/update-user",
  GET_PERMISSIONS: "/permission/get-permissions",
  POST_PERMISSIONS: "/permission/assign-permissions",
};

export const STATUS = ["Available", "Not Available"];

export const TABLEGRIDSTYLE = {
  ".MuiDataGrid-columnSeparator": {
    color: "black",
  },
  ".MuiDataGrid-cell": {
    borderBottom: "1px solid black",
  },
  ".MuiDataGrid-footerContainer": {
    borderTop: "1px solid black",
  },
  ".MuiDataGrid-columnHeader": {
    borderBottom: "1px solid black",
    backgroundColor: "#003566",
    color: "white",
  },
  ".MuiDataGrid-sortIcon": {
    color: "white",
  },
  ".MuiDataGrid-menuIconButton": {
    color: "white",
  },
  ".MuiDataGrid-row:nth-of-type(even)": {
    backgroundColor: "rgba(215, 227, 252, 0.6)",
  },
};
