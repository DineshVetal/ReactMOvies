import Joi from "joi-browser";

export const login_Data = [
  {
    name: "userName",
    label: "UserName",
    value: "",
    schema: Joi.string()
      .min(4)
      .max(50)
      .required()
      .label("UserName"),
    placeHolder: "Type Name...",
    warning: ""
  },
  {
    name: "password",
    label: "Password",
    value: "chacha",
    type: "password",
    schema: Joi.string()
      .regex(/^[a-zA-Z0-9]{6,16}$/)
      .required()
      .label("Password"),
    placeHolder: "Type Password...",
    warning: "Alphanumeric min(8) max(16)"
  }
];
