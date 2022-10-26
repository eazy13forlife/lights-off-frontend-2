import { useNavigate } from "react-router-dom";
import { tvGenres } from "../../../components/Genres/helpers";

const useOnPageButtonClick = () => {
  const navigate = useNavigate();

  const onPageButtonClick = (searchValue, pageNumber) => {
    navigate(
      `/tv/genre/?id=${searchValue}&name=${tvGenres[searchValue].genre}&page=${pageNumber}`
    );
  };

  return onPageButtonClick;
};

export default useOnPageButtonClick;
