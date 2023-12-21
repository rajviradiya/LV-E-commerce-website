import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HeadNav from "./Component/HeadNav";
import ErrorPage from "./Component/ErrorPage";
import Cart from "./Component/Cart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HeadNav />}/>
          <Route path="/*" element={<ErrorPage/>}/>
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
