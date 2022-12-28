
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import BottomBar from './components/BottomBar/BottomBar';
import Female from './components/Female/Female';
import Footer from './components/Footer/Footer';
import Wallet from './components/Wallet/Wallet';
import Header from "./components/Header/Header";



function App() {
  return (
    <div>
{/*       
       <Header/> */}
       <Wallet/>
       <Female/>
       <Footer/>
       <BottomBar/>
    </div>
  );
}

export default App;
