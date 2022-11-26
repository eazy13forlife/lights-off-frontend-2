import { useState, useEffect } from "react";

import useSearchData from "./useSearchData";

//this hook is for content cards that can be modified, meaning once it is modified, so deleted, edited, etc, we want to fetch our searchData again to account for changes
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
