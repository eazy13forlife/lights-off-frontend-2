import { useNavigate } from "react-router-dom";

const useOnPageButtonClick = () => {
  const navigate = useNavigate();

  return (searchValue, pageNumber) => {
    navigate(`/movies/popular/?page=${pageNumber}`);
  };
};

export default useOnPageButtonClick;
