import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { removeLogoutError } from "../../actions";

const useLogoutError = () => {
  const dispatch = useDispatch();

  const logoutErrorBackend = useSelector((state) => {
    return state.logoutErrorBackend;
  });

  //after 2000ms remove the logout error, if user hasnt already closed it
  useEffect(() => {
    let timerId;

    if (logoutErrorBackend) {
      timerId = setTimeout(() => {
        dispatch(removeLogoutError());
      }, 2000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [logoutErrorBackend]);

  return logoutErrorBackend;
};

export default useLogoutError;
