import { Route, Routes } from "react-router";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import HomePage from './pages/index/HomePage';
import AboutPage from './pages/about/AboutPage';
import HousePage from './pages/houses/HousePage';
import ContactPage from './pages/contact/ContactPage';
import HouseItemPage from './pages/houseItem/HouseItemPage';


function App() {

  const headerItems = [
    {
      link: "/about",
      text: "Who we are"
    },
    {
      link: "/houses",
      text: "Houses"
    },
    {
      link: "/contacts",
      text: "Contacts"
    }
  ]

  return (
    <>
      <Header headerTitle="Elam" items={headerItems} />
      <Routes>
        <Route path={"/"} element={<HomePage />} />
        <Route path={"/about"} element={<AboutPage />} />
        <Route path={"/houses"} element={<HousePage />} />
        <Route path={"/houses/:houseId"} element={<HouseItemPage />} />
        <Route path={"/contacts"} element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
