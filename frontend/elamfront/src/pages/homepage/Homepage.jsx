import WelcomeBlock from "./components/welcomeBlock/WelcomeBlock";
import AboutBlock from "./components/aboutBlock/aboutBlock";
import MapBlock from "../../components/mapBlock/MapBlock";

const Homepage = ({}) => {
  return (
    <section>
      <WelcomeBlock />
      <AboutBlock />
      <MapBlock />
    </section>
  )
}

export default Homepage;