import React, { Component } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import TourList from "./components/TourList";
import About from './components/about/about';
import Home from './components/home/home';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="TourList" element={<TourList />} />
          <Route path="about" element={<About />} />
          <Route path="home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
    
      // <React.Fragment>
      //   <Navbar />
      //   <TourList />
      //   {/* <about /> */}
      // </React.Fragment>
    );
  }
}

export default App;
