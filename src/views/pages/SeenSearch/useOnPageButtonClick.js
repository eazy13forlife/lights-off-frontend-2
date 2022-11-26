import { useNavigate } from "react-router-dom";

const useOnPageButtonClick = () => {
  const navigate = useNavigate();

  return (searchValue, pageNumber) => {
    navigate(`/seen/search/?name=${searchValue}&page=${pageNumber}`);
  };
};

export default useOnPageButtonClick;
