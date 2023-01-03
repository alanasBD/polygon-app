import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import BottomBar from "./components/BottomBar/BottomBar";
import Female from "./components/Female/Female";
import Footer from "./components/Footer/Footer";
import Wallet from "./components/Wallet/Wallet";
import Header from "./components/Header/Header";
import Stock from "./components/Stock/Stock";
import Hero from "./components/Hero/Hero";
import Media from "./components/Media/Media";
import News from "./components/News/News";
import "./App.css";

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
      <BottomBar />
    </div>
  );
}

export default App;
