import BannerList from "../layout/BannerList";
import ProductList from "../layout/ProductList";

export default function HomePage() {
  return (
    <main className="mw">
      <section>
        <BannerList />
      </section>

      <section>
        <ProductList />
      </section>
    </main>
  );
}
