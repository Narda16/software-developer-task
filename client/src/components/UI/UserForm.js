import InputField from "./InputField";
import { STATUS } from "../../helpers/constants";
import { MenuItem, Button } from "@mui/material";

export default function UserForm({
  input,
  onChange,
  error,
  lengthValidation,
  onSubmitHandler,
  apiError,
  edit,
}) {
  return (
    <>
      <InputField
        label="First Name"
        name="firstName"
        value={input.firstName}
        onChange={onChange}
        error={error.firstName}
        onBlur={() => lengthValidation("firstName", 1, 999)}
      />
      &nbsp;
      <InputField
        label="Last Name"
        name="lastName"
        value={input.lastName}
        onChange={onChange}
        error={error.lastName}
        onBlur={() => lengthValidation("lastName", 1, 999)}
      />
      &nbsp;
      {!edit && (
        <InputField
          label="Username"
          name="username"
          value={input.username}
          onChange={onChange}
          error={error.username}
          onBlur={() => lengthValidation("username", 5, 10)}
        />
      )}
      &nbsp;
      <InputField
        label="Email"
        name="email"
        value={input.email}
        onChange={onChange}
        error={error.email}
        onBlur={() => lengthValidation("email", 1, 999)}
      />
      &nbsp;
      {!edit && (
        <InputField
          label="Password"
          name="password"
          type="password"
          value={input.password}
          onChange={onChange}
          error={error.password}
          onBlur={() => lengthValidation("password", 6, 999)}
        />
      )}
      &nbsp;
      {!edit && (
        <InputField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={input.confirmPassword}
          onChange={onChange}
          error={error.confirmPassword}
          onBlur={() => lengthValidation("confirmPassword", 6, 999)}
        />
      )}
      &nbsp;
      <InputField
        label="Status"
        name="status"
        value={input.status}
        onChange={onChange}
        error={error.status}
        onBlur={() => lengthValidation("status", 1, 999)}
        select
      >
        {STATUS.map((option) => (
          <MenuItem
            key={option}
            value={option}
            sx={{
              maxHeight: 25,
            }}
          >
            {option}
          </MenuItem>
        ))}
      </InputField>
      &nbsp;
      {apiError}
      &nbsp;
      <Button
        variant="contained"
        className="button"
        onClick={onSubmitHandler}
        fullWidth
      >
        {edit ? "Edit User" : "Create New User"}
      </Button>
    </>
  );
}
