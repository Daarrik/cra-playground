import { useState, useEffect } from "react";
import Card from "../components/card/Card";

const Home = () => {
  const [ping, setPing] = useState(false);

  useEffect(() => {
    function pingTest() {
      console.log("test");
      setPing(!ping);
    }

    const interval = setTimeout(pingTest, 1000);
    return () => clearTimeout(interval);
  }, [ping]);

  return (
    <div className="home-screen">
      home
      <Card
        event={"Mentor & Mentee Mixer"}
        desc={
          "Compete with your fellow Dangos to find the best pairing for your Mentor/Mentee! Are you ready?"
        }
        date={"Saturday, November 6, 2021"}
        time={"1pm - 3pm"}
        loc={"The Quad @ Cal Poly Pomona"}
      />
    </div>
  );
};

export default Home;
