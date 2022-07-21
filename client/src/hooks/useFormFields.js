import { useState } from "react";

export function useFormFields(initialState) {
  const [input, setInput] = useState({ ...initialState });
  const [error, setError] = useState({ ...initialState });

  function onChange(event) {
    setInput({
      ...input,
      [event.target.name]: event.target.value,
    });
  }

  function lengthValidation(field, min, max) {
    let length = input[field].trim().length;
    if (length < min) error[field] = `Minimal ${min} characters`;
    if (length > max) error[field] = `Maximal ${max} characters`;
    if (length < 1) error[field] = "This field is required";
    if (length >= min && length <= max) error[field] = "";
    setError({ ...error });
  }

  return [input, error, onChange, lengthValidation, setInput];
}
