import axios from "axios";
import { useNavigate } from "react-router-dom";

import useUserAuthorization from "../../hooks/useUserAuthorization";
import { BACKEND_URL } from "../../constants";

const useLogoff = () => {
  const navigate = useNavigate();

  const userInfo = useUserAuthorization();

  const logOff = async () => {
    await axios.post(
      `${BACKEND_URL}/users/logout`,
      {},
      {
        headers: {
          Authorization: `Bearer ${userInfo.authToken}`,
        },
      }
    );

    navigate("/login");
  };

  return logOff;
};

export default useLogoff;
