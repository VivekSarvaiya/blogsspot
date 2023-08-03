'useClient'

import { useEffect, useState } from "react";

const useWindowSize = () => {
  const [width, setWidth] = useState();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth));
    };
  }, []);

  useEffect(() => {
    if (width <= 390) setIsMobile(true);
    else if (width < 415) setIsMobile(true);
    else setIsMobile(false);
  }, [width]);

  return isMobile;
};

export default useWindowSize;
