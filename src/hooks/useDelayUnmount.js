import { useEffect, useState } from "react";

const useDelayUnmount = (mountIndicator, delayTime) => {
  const [shouldMount, setShouldMount] = useState(false);

  useEffect(() => {
    let timerId;

    if (mountIndicator && !shouldMount) {
      return setShouldMount(true);
    }

    if (!mountIndicator && shouldMount) {
      timerId = setTimeout(() => {
        setShouldMount(false);
      }, delayTime);
    }

    () => {
      clearTimeout(timerId);
    };
  }, [mountIndicator, delayTime, shouldMount]);

  return shouldMount;
};

export default useDelayUnmount;
