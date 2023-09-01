import "./App.css";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./Layout/Header/header";
import Home from "./components/Home/Home";
import Profil from "./Profil/Profill";
import Cart from "./components/Cart/cart";
import Order from "./components/Order/Order";
const App = () =>{
  return(
    <>
    <Router>

      <div className="App">
        <Routes>
          <Route path="/" element={[<Header />, <Home/>]}></Route>   
        </Routes>
      </div>
      <Routes>
          <Route path="/profill" element={[<Profil />]}></Route>   
        </Routes>
        <Routes>
          <Route path="/cart" element={[<Cart />]}></Route>   
        </Routes>
        <Routes>
          <Route path="/order" element={[<Order />]}></Route>   
        </Routes>
    </Router>


    </>
  )

}
export default App