import { useState, useEffect } from "react";

//queryObject needs to take in searchValue and pageNumber keys as we will perform api
//requests with these two values. We might need more though.
const useSearchData = (queryObject, searchFunction, dataModified) => {
  const [searchData, setSearchData] = useState({
    searchValue: queryObject.searchValue,
    results: null,
    totalNumberResults: 0,
    totalNumberPages: 1,
    currentPage: 1,
  });

  const getSearchData = async () => {
    const response = await searchFunction(queryObject);

    setSearchData({
      results: response.data.results,
      searchValue: queryObject.searchValue,
      totalNumberResults: response.data.total_results,
      totalNumberPages:
        response.data.total_pages === 0
          ? 1
          : Math.min(500, response.data.total_pages),
      currentPage: queryObject.pageNumber,
    });
  };

  //on initial mounting, we call getSearchData, and everytime our searchValue
  //or pageNumber changes, we call getSearchValue
  useEffect(() => {
    getSearchData();
  }, [queryObject.searchValue, queryObject.pageNumber]);

  return [searchData, getSearchData];
};

export default useSearchData;
