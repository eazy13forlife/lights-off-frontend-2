import { useState, useEffect } from "react";
import axios from "axios";

import { BACKEND_URL } from "../../constants";
import useUserAuthorization from "../../hooks/useUserAuthorization";
import { checkIfMediaExists } from "../../helperFunctions";

const useAllReviews = (mediaId, modifiedStatus) => {
  const [allReviews, setAllReviews] = useState([]);

  const userInfo = useUserAuthorization();

  const getAllReviews = async () => {
    try {
      //check if media exists. If it does, (we get a 200 status) we continue on to getting the reviews for it
      try {
        await checkIfMediaExists(BACKEND_URL, mediaId, userInfo.authToken);

        //if media isnt found, there are no reviews so set reviews to an empty array. If another type of error, we will throw it, so parent catch block can deal with it
      } catch (e) {
        if (e.response.status === 404) {
          setAllReviews([]);
          return;
        } else {
          throw new Error(e);
        }
      }

      //if media is found we can check to see if there are reviews for it. Otherwise, error will be thrown and parent catch block will deal with error
      const response = await axios.get(`${BACKEND_URL}/reviews/${mediaId}`, {
        headers: {
          Authorization: `Bearer ${userInfo.authToken}`,
        },
      });

      setAllReviews(response.data);
    } catch (e) {
      setAllReviews("");
    }
  };

  //on initial render, get allReviews for specific media
  useEffect(() => {
    getAllReviews();
  }, []);

  //when justPosted is true, get allReviews again for specific media, so we see live update. Then we set justPosted to false
  useEffect(() => {
    const getReviewsResponse = async () => {
      if (modifiedStatus.justModified) {
        await getAllReviews();
        modifiedStatus.setJustModified(false);
      }
    };

    getReviewsResponse();
  }, [modifiedStatus.justModified]);

  return allReviews;
};

export default useAllReviews;
