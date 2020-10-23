import React from "react";
import CustomForm from "./components/CustomForm";

//Inserte el título que desea que este en el form
const title = "Register Form";

//Inserte los campos que desea que esten presentes en el form
const form = [
  {
    type: "text",
    placeholder: "Username",
    name: "username",
    rules: {
      min: 0,
      max: 30,
      num: false,
    },
  },
  {
    type: "email",
    placeholder: "Email",
    name: "email",
    rules: {
      min: 0,
      max: 60,
      num: true,
    },
  },
  {
    type: "password",
    placeholder: "Password",
    name: "password",
    rules: {
      min: 8,
      max: 20,
      num: true,
    },
  },
  {
    type: "password",
    placeholder: "Confirm Password",
    name: "confirmPassword",
    rules: {
      min: 8,
      max: 20,
      num: true,
    },
  },
];

function App() {
  return <CustomForm fields={form} formTitle={title} />;
}

export default App;
