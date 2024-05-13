import { useEffect } from "react";
import WelcomeBlock from "./components/welcomeBlock/WelcomeBlock";
import AboutBlock from "./components/aboutBlock/aboutBlock";
import MapBlock from "../../components/mapBlock/MapBlock";

import BaseAccordion from "../../components/accordian/Accordian";

import {accordionItems} from "../../store"


const HomePage = ({}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

  return (
    <section>
      <WelcomeBlock />
      <AboutBlock />
      <MapBlock />
      <section className="px-20 pb-16 pt-10 bg-[#72ADFF]">
        <p className="text-3xl text-white">FAQ</p>
        <BaseAccordion items={accordionItems} />
      </section>
    </section>
  )
}

export default HomePage;