import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop"
import SingleProduct from "./components/SingleProduct/SingleProduct";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import WrongPage from "./components/WrongPage/WrongPage";
import AppContext from "./utils/Context";
import About from "./components/About/About";
function App() {
 return (
  
   <BrowserRouter className="all">
    <AppContext>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product/:id" element={<SingleProduct />} />
          <Route path="/*" element={<WrongPage/>} />
        </Routes>
      <Footer />
      </AppContext>
    </BrowserRouter> 

  
  );
}

export default App;
