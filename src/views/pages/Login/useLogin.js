import { useDispatch } from "react-redux";
import { loginUser } from "../../../actions";

const useLogin = () => {
  const dispatch = useDispatch();

  //if login function works, we should get a user object in our state, which will automatically lead to a redirect to home page because of SignedInRoute component.
  const login = (userData) => {
    dispatch(loginUser(userData));
  };

  return login;
};

export default useLogin;
