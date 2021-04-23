import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "../parameters/baseUrl";

export const useRequestData = (endpoint, initialState) => {
  const [data, setData] = useState(initialState);

  useEffect(() => {
    axios
      .get(`${baseUrl}${endpoint}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, [endpoint]);
  return data;
};
