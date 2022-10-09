import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getTrending } from "../../../actions";

const useTrending = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrending());
  }, []);
};

export default useTrending;
