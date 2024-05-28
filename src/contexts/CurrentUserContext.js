import { createContext } from "react";

export const CurrentUserContext = createContext({
  name: "",
  avatar: "",
  email: "",
  _id: "",
});
