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

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Stock />
      <Wallet />
      <Female />
      <News />
      <Media />
      <Footer />
      <FooterBottom />
    </div>
  );
}

export default App;
