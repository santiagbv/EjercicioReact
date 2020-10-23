import { useState } from "react";

const useForm = (validateForm, fields) => {
  const [errors, setErrors] = useState({});
  let temp = {};
  fields.map((field) => (temp[field.name] = ""));
  const [values, setValues] = useState(temp);

  const handleChange = (evt) => {
    setValues({
      ...values,
      [evt.target.name]: evt.target.value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(values);
    setErrors(validateForm(values, fields));
  };
  return { handleChange, handleSubmit, errors };
};

export default useForm;
