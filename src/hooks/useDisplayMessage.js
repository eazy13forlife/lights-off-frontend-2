import  { useState, useEffect } from "react";

const useDisplayMessage = () => {
  //initially no display message
  const [displayMessage, setDisplayMessage] = useState("");

  //if there is a displayMessage (there is a value for it), after 2000ms remove the message(empty string)
  useEffect(() => {
    let timerId;

    if (displayMessage) {
      timerId = setTimeout(() => {
        setDisplayMessage("");
      }, 2000);
    }

    return () => {
      clearTimeout(timerId);
    };
  }, [displayMessage]);

  return [displayMessage, setDisplayMessage];
};

export default useDisplayMessage;
