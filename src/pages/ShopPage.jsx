import ListCard from "../components/ListCard";
import style from "../css/ShopPage.module.css";

export default function ShopPage() {
  return (
    <div className={`${style.ShopPage} mw`}>
      <h2>Shop The Latest</h2>
      <div className={style.filterCon}>
        <button>등록순</button>
        <button>낮은 가격</button>
        <button>높은 가격</button>
        <button>높은 할인율</button>
      </div>

      <ul className={style.cardCon}>
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
