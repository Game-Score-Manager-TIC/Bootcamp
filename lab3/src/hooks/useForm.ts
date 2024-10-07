import { useState } from "react";

interface FormValues {
  email: string;
  password: string;
  checkbox?: boolean;
}

interface FormErrors {
  email?: string;
  password?: string;
}

function useForm(initialValues: FormValues) {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setValues({
      ...values,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
    callback: () => void
  ) => {
    event.preventDefault();
    const validationErrors = validateForm(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      callback(); // Llama al callback si no hay errores
    }
  };

  const validateForm = (values: FormValues): FormErrors => {
    const errors: FormErrors = {};
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetForm,
  };
}

export default useForm;
