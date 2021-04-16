import axios from "axios";
import { baseUrl } from "../parameters/baseUrl";
import React, { useEffect, useState } from "react";

const useListTrips = () => {
  const [trips, setTrips] = useState([]);

  const token = window.localStorage.getItem("token");
  axios
    .get(`${baseUrl}/trips`, {
      headers: {
        auth: token,
      },
    })
    .then((res) => setTrips(res.data.trips))
    .catch((err) => console.log(err));
};

export default useListTrips;
