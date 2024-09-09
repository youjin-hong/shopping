import style from "../css/ProductList.module.css";

import ListCard from "../components/ListCard";
import { Link } from "react-router-dom";
export default function ProductList() {
  return (
    <div className={style.ProductList}>
      <div className={style.productHead}>
        <h2>Shop The Latest</h2>
        <Link to="/shop">View All</Link>
      </div>
      <ul className={style.listCon}>
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
        <ListCard />
      </ul>
    </div>
  );
}
