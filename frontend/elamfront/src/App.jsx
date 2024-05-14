import { Route, Routes } from "react-router";

import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import HomePage from './pages/homePage/HomePage';
import AboutPage from './pages/aboutPage/AboutPage';
import ContactPage from './pages/contactPage/ContactPage';

// Houses page
import HousesPage from './pages/housesPage/HousesPage';
import HouseItemPage from './pages/housesPage/pages/houseItem/HouseItemPage';

// Admin page
import AdminPage from "./pages/adminPage/AdminPage";
import List from "./pages/adminPage/pages/list/List";
import New from "./pages/adminPage/pages/new/New";

import { houseInputs } from "./formSource";


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
        <Route path={"/elamApp"} element={<HomePage />} />
        <Route path={"/howitworks"} element={<AboutPage />} />
        <Route path={"/houses"}> 
          <Route index element={<HousesPage />} />
          <Route path=":houseId" element={<HouseItemPage />} />
        </Route>
        <Route path={"/contacts"} element={<ContactPage />} />
        <Route path={"/admin"}>
          <Route index element={<AdminPage />} />
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
