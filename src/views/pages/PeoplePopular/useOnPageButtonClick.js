import { useNavigate } from "react-router-dom";

const useOnPageButtonClick = () => {
  const navigate = useNavigate();

  const onPageButtonClick = (searchValue, pageNumber) => {
    navigate(`/people/popular/?page=${pageNumber}`);
  };

  return onPageButtonClick;
};
export default useOnPageButtonClick;
