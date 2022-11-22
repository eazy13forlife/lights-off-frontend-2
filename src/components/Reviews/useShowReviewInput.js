import { useState, useEffect } from "react";
import axios from "axios";

import { checkIfMediaExists } from "../../helperFunctions";
import { BACKEND_URL } from "../../constants";
import useUserAuthorization from "../../hooks/useUserAuthorization";

const useShowReviewInput = (mediaId, justModified) => {
  const userInfo = useUserAuthorization();

  const [showReviewInput, setShowReviewInput] = useState({
    show: false,
    message: "",
  });

  const initializeReviewInput = async () => {
    try {
      //check if media exists in database. if it doesn't exist, show the review input so user can review
      try {
        await checkIfMediaExists(BACKEND_URL, mediaId, userInfo.authToken);
      } catch (e) {
        if (e.response.status === 404) {
          setShowReviewInput({
            show: true,
          });
        } else {
          throw new Error(e);
        }
      }

      //check if user reviewed the media. if so, don't show the reviewInput. Otherwise show it
      try {
        await axios.head(`${BACKEND_URL}/reviews/${mediaId}`, {
          headers: {
            Authorization: `Bearer ${userInfo.authToken}`,
          },
        });

        setShowReviewInput({
          show: false,
          message: "You've already written a review",
        });
      } catch (e) {
        if (e.response.status === 404) {
          setShowReviewInput({
            show: true,
          });
        } else {
          throw new Error(e);
        }
      }
      //if there is an error, don't show the review input at all
    } catch (e) {
      setShowReviewInput({
        show: false,
        message: "",
      });
    }
  };

  //on initial render, check if review input should be shown
  useEffect(() => {
    initializeReviewInput();
  }, []);

  //if we just modified a review, we want to call this function again.
  useEffect(() => {
    if (justModified) {
      initializeReviewInput();
    }
  }, [justModified]);

  return showReviewInput;
};

export default useShowReviewInput;
