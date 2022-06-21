import React from "react";
import { TOKEN_USER } from "../const/API";

const useAuth = () => {
  if (localStorage.getItem(TOKEN_USER)) return true;
  return false;
};

export default useAuth;
