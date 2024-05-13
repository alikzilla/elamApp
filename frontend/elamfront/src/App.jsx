import { Route, Routes } from "react-router";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import HomePage from './pages/homePage/HomePage';
import AboutPage from './pages/aboutPage/AboutPage';
import HousePage from './pages/housesPage/Pricepage';
import ContactPage from './pages/contactPage/ContactPage';
import HouseItemPage from './pages/houseItemPage/HouseItemPage';
import Home from "./pages/adminPage/home/Home";
import List from "./pages/adminPage/list/List";
import New from "./pages/adminPage/new/New";


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
        <Route path={"admin/"}>
          <Route index element={<Home />} />
              <Route path="houses">
                <Route index element={<List />} />
                <Route path="new" element={<New inputs={houseInputs} title="Add New House" />} />
              </Route>
          </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
