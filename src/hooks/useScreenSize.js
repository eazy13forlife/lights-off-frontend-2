import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
    const onScreenResize = (e) => {
      return setScreenSize(e.target.innerWidth);
    };

    window.addEventListener("resize", onScreenResize);

    return () => {
      window.removeEventListener("resize", onScreenResize);
    };
  });

  return screenSize;
};

export default useScreenSize;
