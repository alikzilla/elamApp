import { useEffect } from "react";
import WelcomeBlock from "./components/welcomeBlock/WelcomeBlock";
import AboutBlock from "./components/aboutBlock/aboutBlock";
import MapBlock from "../../components/mapBlock/MapBlock";

const Homepage = ({}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

  return (
    <section>
      <WelcomeBlock />
      <AboutBlock />
      <MapBlock />
    </section>
  )
}

export default Homepage;