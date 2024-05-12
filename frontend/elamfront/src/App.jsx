import './App.css';
import { Route, Routes } from "react-router";
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import Pricepage from './pages/pricepage/Pricepage';
import ContactPage from './pages/contactpage/ContactPage';
import HousePage from './pages/housepage/HousePage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/houses"} element={<Pricepage />} />
        <Route path={"/houses/:houseId"} element={<HousePage />} />
        <Route path={"/contactpage"} element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
