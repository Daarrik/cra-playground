import { useState, useEffect, useRef } from "react";

const Products = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 1000);

  return <div>{count}</div>;
};

function useInterval(callback, delay) {
  const savedCallback = useRef();

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      console.log("inside tick");
      savedCallback.current();
    }
    if (delay !== null) {
      console.log("inside if");
      console.log(delay);
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default Products;
