import { useNavigate } from "react-router-dom";

const useOnPageButtonClick = () => {
  const navigate = useNavigate();

  return (searchValue, pageNumber) => {
    navigate(`/favorites,?page=${pageNumber}`);
  };
};

export default useOnPageButtonClick;
