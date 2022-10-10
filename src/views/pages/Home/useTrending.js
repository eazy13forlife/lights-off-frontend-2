import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getTrending } from "../../../actions";

const useTrending = () => {
  const dispatch = useDispatch();

  const trending = useSelector((state) => {
    return state.trending;
  });

  useEffect(() => {
    dispatch(getTrending());
  }, []);

  return trending;
};

export default useTrending;
