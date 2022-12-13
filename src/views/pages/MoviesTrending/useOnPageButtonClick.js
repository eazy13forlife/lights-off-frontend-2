import { useNavigate } from "react-router-dom";

const useOnPageButtonClick = () => {
  const navigate = useNavigate();

  const onPageButtonClick = (searchValue, pageNumber) => {
    navigate(`/movies/trending/?page=${pageNumber}`);
  };

  return onPageButtonClick;
};

export default useOnPageButtonClick;
