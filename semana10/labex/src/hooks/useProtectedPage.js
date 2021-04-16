import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export const useProtectedPage = () => {
  const history = useHistory();

  // const token = window.localStorage.getItem("token");
  // console.log(token);

  // if (!token) {
  //   history.push("/login");
  // } else {
  //   history.push("/admin/trips/list");
  //   return true;
  // }

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      history.push("/login");
    } else {
      history.push("/admin/trips/list");
      return true;
    }
  }, [history]);
};
