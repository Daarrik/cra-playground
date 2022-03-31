import { useState, useEffect } from "react";

const Home = () => {
  const [ping, setPing] = useState(false);

  useEffect(() => {
    function pingTest() {
      console.log("test");
      setPing(!ping);
    }

    const interval = setInterval(pingTest, 1000);
    return () => clearInterval(interval);
  }, [ping]);

  return <div className="home-screen">Home</div>;
};

export default Home;
