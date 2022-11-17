import axios from "axios";

import useUserAuthorization from "../../hooks/useUserAuthorization";

const useOnRemoveClick = () => {
  const userInfo = useUserAuthorization();

  const onRemoveClick = async (baseUrl, mediaId) => {
    await axios.delete(`${baseUrl}/${mediaId}`, {
      headers: {
        Authorization: `Bearer ${userInfo.authToken} `,
      },
    });
  };

  return onRemoveClick;
};

export default useOnRemoveClick;
