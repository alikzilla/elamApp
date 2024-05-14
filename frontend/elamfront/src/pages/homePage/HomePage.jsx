import { useEffect } from "react";
import MapBlock from "../../components/mapBlock/MapBlock";

import BaseAccordion from "../../components/accordian/Accordian";
import BaseContainer from "../../components/container/Container";

import "./HomePage.css";

import { faq, usageInfo } from "../../store"

const HomePage = ({ }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [])

  return (
    <section className="pt-20">

      {/* Welcome Block */}
      <BaseContainer className="welcomeBlock">
        <h1>Welcome to Elam!</h1>
        <p>Find Safe Homes, Avoid Quakes!</p>
      </BaseContainer>


      {/* About Block */}
      <BaseContainer className="aboutBlock">

        <div className="container">

          <div className="wrapper">

            <div className="itemWrapper">
              <h1 className="text-2xl font-bold">Who we are?</h1>
              <p className="text-gray-200">We are young company for finding homes in save places</p>
            </div>

            <div className="itemWrapper">
              <h1 className="text-2xl font-bold">Our Mission</h1>
              <p className="text-gray-200">
                ELAM's mission is to empower individuals with seismic intelligence
                for informed housing decisions. Using advanced technology, we
                provide accessible insights into seismic risks, fostering global
                resilience and peace of mind.
              </p>
            </div>

            <div className="itemWrapper">
              <h1 className="text-2xl font-bold">Our Usefulness</h1>
              <div className="flex justify-between gap-6">
                {usageInfo.map((data) => (
                  <BaseContainer className="flex flex-col w-1/2 bg-gray-800 rounded-md py-4 px-2 gap-2">
                    <p className='font-bold'>{data.name}</p>
                    <p className="text-gray-200">{data.content}</p>
                  </BaseContainer>
                ))}
              </div>
            </div>

          </div>
        </div>
      </BaseContainer>


      <MapBlock />

      {/* FAQ Block */}
      <BaseContainer className="bg-[#72ADFF] flex justify-center py-8">
        <div className="flex w-8/12 gap-2 flex-col">
          <p className="text-3xl text-white">FAQ</p>
          <BaseAccordion items={faq} />
        </div>
      </BaseContainer>


    </section>
  )
}

export default HomePage;