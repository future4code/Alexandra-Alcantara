import { useHistory } from "react-router-dom";
import { useLayoutEffect } from "react";
import { goToPostsList } from "../routes/coordinator";

const useProtectedPage = () => {
  const history = useHistory();

  useLayoutEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      goToPostsList(history);
    }
  }, [history]);
};

export default useProtectedPage;
