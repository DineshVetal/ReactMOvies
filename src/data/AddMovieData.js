import Joi from "joi-browser";
import { getGenres } from "../services/fakeGenreService";

const genres = getGenres().map(genre => genre.name);

export const AddMovieData = [
  {
    fieldType: "input",
    name: "Title",
    label: "Title",
    value: "",
    schema: Joi.string()
      .min(3)
      .max(50)
      .required()
      .label("Title"),
    placeHolder: "Enter New Movie...",
    warning: ""
  },
  {
    fieldType: "dropdown",
    name: "Genre",
    label: "Choose Genre",
    value: "",
    listItems: genres,
    schema: Joi.string().required(),
    placeHolder: "Enter Rate...",
    warning: ""
  },
  {
    fieldType: "Input",
    name: "Rate",
    label: "Rate",
    value: "",
    schema: Joi.number()
      .min(1)
      .max(10)
      .required()
      .label("Rate"),
    placeHolder: "Enter Rate...",
    warning: "1-10"
  },
  {
    fieldType: "Input",
    name: "Stock",
    label: "Stock",
    value: "",
    schema: Joi.number()
      .min(1)
      .required()
      .label("Stock"),
    placeHolder: "Enter Stock...",
    warning: ""
  }
];
