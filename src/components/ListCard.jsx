import style from "../css/ListCard.module.css";

export default function ListCard() {
  return (
    <div className={style.ListCard}>
      <li>
        <div className={style.cardImg}>
          <img src="/img/image1.jpg" alt="" />
        </div>
        <div className={style.cardInfo}>
          <p>상품이름</p>
          <p>가격</p>
        </div>
        <div className={style.discount}>
          <p>할인율</p>
        </div>
      </li>
    </div>
  );
}
