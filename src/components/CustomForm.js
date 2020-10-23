import React from "react";
import useForm from "../hooks/useForm";
import validateForm from "../utils/validateForm";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const CustomForm = (props) => {
  const { handleChange, handleSubmit, errors } = useForm(
    validateForm,
    props.fields
  );
  const fields = props.fields.map((field) => {
    return (
      <Form.Group key={field.name}>
        <Form.Label htmlFor={field.name}>{field.placeholder}</Form.Label>
        <Form.Control
          type={field.type}
          placeholder={field.placeholder}
          name={field.name}
          id={field.name}
          onChange={handleChange}
        />
        {errors[field.name] && <p>Error: {errors[field.name]}</p>}
      </Form.Group>
    );
  });
  return (
    <div className="container">
      <h1 className="text-center">{props.formTitle}</h1>
      <Form onSubmit={handleSubmit}>
        {fields}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CustomForm;
