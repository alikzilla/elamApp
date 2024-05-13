import { Route, Routes } from "react-router";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import HomePage from './pages/homePage/HomePage';
import AboutPage from './pages/aboutPage/AboutPage';
import HousePage from './pages/housesPage/Pricepage';
import ContactPage from './pages/contactPage/ContactPage';
import HouseItemPage from './pages/houseItemPage/HouseItemPage';


function App() {

  const headerItems = [
    {
      link: "/howitworks",
      text: "How it works"
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
        <Route path={"/howitworks"} element={<AboutPage />} />
        <Route path={"/houses"} element={<HousePage />} />
        <Route path={"/houses/:houseId"} element={<HouseItemPage />} />
        <Route path={"/contacts"} element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
