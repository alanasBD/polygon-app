import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Female from "./components/Female/Female";
import Footer from "./components/Footer/Footer";
import Wallet from "./components/Wallet/Wallet";
import Header from "./components/Header/Header";
import Stock from "./components/Stock/Stock";
import Hero from "./components/Hero/Hero";
import Media from "./components/Media/Media";
import News from "./components/News/News";

import FooterBottom from "./components/FooterBottom/FooterBottom";
import { useState } from "react";

function App() {
  const [img, setImg] = useState(true);

  const handleMove = (event) => {
    if (event.pageY >= 2881 && event.pageY < 3840) {
      setTimeout(() => {
        setImg(false);
      }, 1000);
    }
  };

  return (
    <div className="App" onMouseMove={handleMove}>
      <Header />
      <Hero img={img} setImg={setImg} />
      <Stock />
      <Wallet />
      <Female img={img} />
      <News />
      <Media />
      <Footer />
      <FooterBottom />
    </div>
  );
}

export default App;
