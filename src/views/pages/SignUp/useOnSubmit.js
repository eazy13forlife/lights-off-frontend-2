import { useDispatch } from "react-redux";
import { createUser } from "../../../actions";

const useOnSubmit = () => {
  const dispatch = useDispatch();

  //if submit function works, we should get a user object in our state, which will automatically lead to a redirect to home page because of SignedInRoute component
  const onSubmit = async (userData) => {
    await dispatch(createUser(userData));
  };

  return onSubmit;
};

export default useOnSubmit;
