import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useUserAuthorization from "../hooks/useUserAuthorization";
import { getTrending } from "../actions";

const useTrending = () => {
  const user = useUserAuthorization();

  const dispatch = useDispatch();

  const trending = useSelector((state) => {
    return state.trending;
  });

  useEffect(() => {
    //if user is logged in and nothing in trending,call getTrending
    if (user && !trending.length) {
      dispatch(getTrending());
    }
  }, [user]);
};

export default useTrending;
