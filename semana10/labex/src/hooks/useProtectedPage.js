import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useProtectedPage = () => {
  const history = useProtectedPage();

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (!token) {
      history.push("/login");
    }
  }, [history]);
};
