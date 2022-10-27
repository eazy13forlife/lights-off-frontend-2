import React, { useState, useEffect } from "react";

//queryObject needs to take in searchValue and pageNumber keys as we will perform api
//requests with these two values. We might need more though.
const useSearchData = (queryObject, searchFunction) => {
  const [searchData, setSearchData] = useState({
    searchValue: queryObject.searchValue,
    results: [],
    totalNumberResults: 0,
    totalNumberPages: 0,
    currentPage: 0,
  });

  useEffect(() => {
    const getSearchData = async () => {
      const response = await searchFunction(queryObject);

      setSearchData({
        results: response.data.results,
        searchValue: queryObject.searchValue,
        totalNumberResults: response.data.total_results,
        totalNumberPages: response.data.total_pages,
        currentPage:
          response.data.total_pages === 0 ? 0 : queryObject.pageNumber,
      });
    };

    getSearchData();
  }, [queryObject.searchValue, queryObject.pageNumber]);

  return searchData;
};

export default useSearchData;
