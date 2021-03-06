import React, { Component } from "react";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";

import "./style.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
        <Features />
        <Footer />
      </div>
    );
  }
}
