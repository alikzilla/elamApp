import './App.css';
import { Route, Routes } from "react-router";
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import Pricepage from './pages/pricepage/Pricepage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={"/"} element={<Homepage />} />
        <Route path={"/pricepage"} element={<Pricepage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
