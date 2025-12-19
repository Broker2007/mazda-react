import "./App.scss";
import "./scss/app.scss";
import {Route, Routes, useLocation} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Pages/Home";
import Footer from "./components/Footer";
import React, {useEffect} from "react";
import RepairAuTr from "./components/Pages/Services/RepairAuTr";

const App: React.FC = () => {
    const {hash, key} = useLocation()
    useEffect(()=>{
        if(hash){
            const targetElement = document.getElementById(hash.substring(1))
            targetElement?.scrollIntoView({behavior: 'smooth'})
        }
    }, [key, hash])
  return (
    <div className="wrapper">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/services/:id" element={<RepairAuTr />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
