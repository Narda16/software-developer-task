import CardWrapper from "../components/UI/CardWrapper";
import UserForm from "../components/UI/UserForm";
import { useFormFields } from "../hooks/useFormFields";
import { useUserApi } from "../hooks/useUserApi";

export default function CreateUser() {
  const { createNewUser, apiError } = useUserApi();
  const [input, error, onChange, lengthValidation] = useFormFields({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    status: "",
  });

  const addUserHandler = () => {
    createNewUser(input);
  };

  return (
    <CardWrapper title="Add New User">
      <UserForm
        input={input}
        onChange={onChange}
        error={error}
        lengthValidation={lengthValidation}
        onSubmitHandler={addUserHandler}
        apiError={apiError}
      />
    </CardWrapper>
  );
}
