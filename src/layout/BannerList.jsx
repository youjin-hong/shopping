import style from "../css/BannerList.module.css";

export default function BannerList() {
  return (
    <div className={style.BannerList}>
      <div className={style.imgList}>
        <img src="/img/Img_bg1.jpg" alt="bg1" />
      </div>
      <div className={style.imgInfo}>
        <p>상품이름</p>
        <p>가격</p>
        <button>상품보기</button>
      </div>
    </div>
  );
}
