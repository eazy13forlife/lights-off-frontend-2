import { useNavigate } from "react-router-dom";

const useOnPageButtonClick = () => {
  const navigate = useNavigate();

  const onPageButtonClick = (searchValue, pageNumber) => {
    navigate(`/tv/top_rated/?page=${pageNumber}`);
  };

  return onPageButtonClick;
};

export default useOnPageButtonClick;
