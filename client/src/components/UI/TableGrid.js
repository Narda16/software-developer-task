import { Box, Button } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { TABLEGRIDSTYLE } from "../../helpers/constants";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

export default function TableGrid({
  allUsers,
  editUserPageNavigate,
  setDeleteUser,
  permissionPageNavigate,
  sortModel,
  setSortModel,
}) {
  const COLUMNS = [
    {
      field: "firstName",
      headerName: "First name",
      width: 140,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "lastName",
      headerName: "Last Name",
      width: 140,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "username",
      headerName: "Username",
      width: 140,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "email",
      headerName: "Email",
      width: 220,
      align: "center",
      headerAlign: "center",
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      align: "center",
      headerAlign: "center",
      sortable: false,
      disableColumnMenu: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 230,
      align: "center",
      headerAlign: "center",
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <div className="table-actions-div">
            <Button
              variant="contained"
              endIcon={<EditIcon />}
              className="table-actions-edit-button"
              onClick={() => editUserPageNavigate(params.id)}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              endIcon={<DeleteIcon />}
              className="delete-button"
              onClick={() => setDeleteUser(params.id)}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
    {
      field: "permission",
      headerName: "Permission",
      sortable: false,
      width: 152,
      align: "center",
      headerAlign: "center",
      disableColumnMenu: true,
      renderCell: (params) => {
        return (
          <Button
            variant="contained"
            endIcon={<SupervisorAccountIcon />}
            className="button"
            onClick={() => permissionPageNavigate(params.id)}
          >
            Permission
          </Button>
        );
      },
    },
  ];

  return (
    <Box sx={box}>
      <DataGrid
        rows={allUsers}
        columns={COLUMNS}
        pageSize={10}
        rowsPerPageOptions={[10]}
        disableSelectionOnClick
        sortingOrder={["asc", "desc"]}
        sortModel={sortModel}
        onSortModelChange={(model) => setSortModel(model)}
        showColumnRightBorder={true}
        sx={TABLEGRIDSTYLE}
      />
    </Box>
  );
}

const box = {
  margin: "75px auto",
  width: "78%",
  height: 631,
  boxShadow: "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
};
