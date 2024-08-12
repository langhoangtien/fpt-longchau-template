import Product from "../product";

export default function Home({ products }: any) {
  return (
    <div id="">
      <div
        data-lcpr="prr-id-home-daily-suggestion"
        className="relative bg-blue-100 py-2"
      >
        <div className="container-lite isolate">
          <div className="mb-0 md:mb-4 flex items-center ">
            <div>
              <picture>
                <source
                  srcSet="/icons/png/icon_goi_y_hom_nay.webp"
                  type="image/webp"
                  width={28}
                  height={28}
                />
                <source
                  srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                  type="image/webp"
                  width={28}
                  height={28}
                />
                <img
                  loading="lazy"
                  decoding="async"
                  alt="Gợi ý hôm nay"
                  src="/estore-images/fallback-images/error/img-error-1_1.svg"
                />
              </picture>
            </div>
            <h2 className="ml-2 flex w-full items-center text-heading3 font-semibold">
              Gợi ý hôm nay
            </h2>
          </div>

          <div>
            <div className="grid md:grid-cols-5 md:gap-3 grid-cols-2 gap-2">
              {products.map((product: any) => (
                <Product key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
