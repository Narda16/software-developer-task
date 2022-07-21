import CardWrapper from "../components/UI/CardWrapper";
import UserForm from "../components/UI/UserForm";

import { useUserApi } from "../hooks/useUserApi";
import { useParams } from "react-router-dom";
import { useFormFields } from "../hooks/useFormFields";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function EditUser() {
  const { getUser, editUser, apiError } = useUserApi();
  const params = useParams();
  const userId = params.userId;
  const [input, error, onChange, lengthValidation, setInput] = useFormFields({
    firstName: "",
    lastName: "",
    email: "",
    status: "",
  });
  const user = useSelector((s) => s.store.user);

  useEffect(() => {
    getUser(userId);
  }, [userId]); // eslint-disable-line

  useEffect(() => {
    async function fetchData() {
      if (user._id === userId) {
        setInput({
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          status: user.status,
        });
      }
    }
    fetchData();
  }, [user, userId]); // eslint-disable-line

  const editUserHandler = () => {
    editUser(userId, input);
  };

  return (
    <CardWrapper title="Edit User">
      <UserForm
        input={input}
        onChange={onChange}
        error={error}
        lengthValidation={lengthValidation}
        onSubmitHandler={editUserHandler}
        apiError={apiError}
        edit={true}
      />
    </CardWrapper>
  );
}
