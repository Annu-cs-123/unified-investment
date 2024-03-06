
import React from 'react';

import "../src/assets/style/common.css";

import AOS from "aos";
import "aos/dist/aos.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from './components/Home';
import Footer from './components/common/Footer';

function App() {
  AOS.init({ once: true });
  return (
    <div className="App">
      <Home />
      <Footer />
    </div>
  );
}

export default App;
