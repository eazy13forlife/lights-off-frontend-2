import { useState, useEffect } from "react";

import useSearchData from "./useSearchData";

//queryObject needs to take in searchValue and pageNumber keys as we will perform api
//requests with these two values. We might need more though.
const useSearchDataModified = (queryObject, searchFunction, dataModified) => {
  const [searchData, getSearchData] = useSearchData(
    queryObject,
    searchFunction
  );

  useEffect(() => {
    const updateData = async () => {
      if (dataModified.modified) {
        await getSearchData();
        dataModified.modify(false);
      }
    };

    updateData();
  }, [dataModified.modified]);

  return [searchData, getSearchData];
};

export default useSearchDataModified;
