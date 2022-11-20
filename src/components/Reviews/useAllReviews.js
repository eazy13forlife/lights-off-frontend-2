import { useState, useEffect } from "react";
import axios from "axios";

import { BACKEND_URL } from "../../constants";
import useUserAuthorization from "../../hooks/useUserAuthorization";

const useAllReviews = (mediaId) => {
  const [allReviews, setAllReviews] = useState([]);

  const userInfo = useUserAuthorization();

  //on initial render, get allReviews for specific media
  useEffect(() => {
    const getReviewsResponse = async () => {
      try {
        //check if media exists. If it does we continue on to getting the reviews for it
        try {
          await axios.head(`${BACKEND_URL}/media/exists/${mediaId}`, {
            headers: {
              Authorization: `Bearer ${userInfo.authToken}`,
            },
          });
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

    getReviewsResponse();
  }, []);

  return allReviews;
};

export default useAllReviews;
