import useTitle from "../../../hooks/useTitle";
import Download from "./Download";
import Features from "./Features";
import Hero from "./Hero";

import Items from "./Items";

const Home = () => {
  useTitle("Home");
  return (
    <div>
      <Hero></Hero>

      <Items></Items>
      <Features></Features>
      <Download></Download>
    </div>
  );
};

export default Home;
