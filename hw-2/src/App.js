import React from "react";
import Header from "./Header";
import DesignSlide from "./DesignSlide";
import Footer from "./Footer"
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <DesignSlide />
        <Footer />
      </>
    )
  }
}

export default App;