import {useEffect, useState} from 'react'

const useScroll = (offset) => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.pageYOffset > offset ? setScroll(true) : setScroll(false)
    );
  }, []);
  return scroll;
}

export default useScroll
