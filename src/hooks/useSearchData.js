import React, { useState, useEffect } from "react";

const useSearchData = (queryObject, searchFunction) => {
  const [searchData, setSearchData] = useState({
    ...queryObject,
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
