import { Link, useNavigate } from "react-router-dom";
import style from "../css/Header.module.css";

export default function Header() {
  const navigate = useNavigate();
  return (
    <header className={style.Header}>
      <h1 hidden>header</h1>
      <img src="/img/logo.svg" alt="logo" onClick={() => navigate("/")} />
      <nav>
        <div>
          <Link to="/shop">Shop</Link>
          <Link to="/blog">Blog</Link>
          <Link to="/our">Our Story</Link>
        </div>
        <div>
          <Link to="/search">
            <i className="fa-solid fa-magnifying-glass"></i>
          </Link>
          <Link to="/cart">
            <i className="fa-solid fa-cart-arrow-down"></i>
          </Link>
          <Link to="/user">
            <i className="fa-solid fa-user"></i>
          </Link>
        </div>
        <button className={style.hamBtn}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </nav>
    </header>
  );
}
