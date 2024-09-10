import { Route, Routes } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import DetailPage from "./pages/DetailPage";

function App() {
  return (
    <div className="wrap">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="'/detail/:id" element={<DetailPage />} />
        <Route path="/blog" element={"블로그페이지"} />
        <Route path="/our" element={"회사소개페이지"} />
        <Route path="/search" element={"검색페이지"} />
        <Route path="/cart" element={"장바구니"} />
        <Route path="/user" element={"마이페이지"} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
