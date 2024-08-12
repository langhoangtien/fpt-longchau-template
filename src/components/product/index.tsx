// import "./style.css";
import { Button } from "@/components/ui/button";
import Image from "next/image";
export default function Product({ product }: any) {
  return (
    <div>
      <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-500 flex-col">
        <a
          className="px-3 block pt-3"
          href="/thuc-pham-chuc-nang/vien-uong-omega-3-6-9-naturecare-giam-cholesterol-bao-ve-tim-mach-60-vien-28987.html"
        >
          {!!product.discount && (
            <div className="px-2 py-0.5 md:py-1 absolute z-10 bg-red-600 -top-[1px] -left-[1px] rounded-tl-xl rounded-br-xl">
              <span
                className="block text-caption font-semibold text-white md:text-sm"
                style={{ textShadow: "rgba(0, 0, 0, 0.25) 0.5px 0.5px 0px" }}
              >
                {product.discount}%
              </span>
            </div>
          )}

          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75  aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              style={{ objectFit: "cover" }}
              width={250}
              height={250}
              className="h-full w-full object-cover object-center lg:h-full lg:w-full "
            />
          </div>
        </a>
        <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
          <div>
            <a
              className="block px-3"
              href={"product/" + product.slug + "-" + product._id}
            >
              <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]" />
              <h3 className="overflow-hidden text-gray-600 text-sm font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                {product.name}
              </h3>
            </a>
            <div className="px-3">
              <div className="mb-1">
                <div className="text-blue-500">
                  <span className="font-semibold">
                    {Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(product.salePrice)}
                  </span>
                </div>
                {!!product.discount && (
                  <div className="text-md font-normal text-gray-600 line-through md:text-sm ">
                    {Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(product.price)}
                  </div>
                )}
              </div>
              {/* <p className="w-fit rounded-lg bg-gray-200 px-2 py-1 text-caption font-medium text-gray-600 line-clamp-2 md:text-sm">
                Hộp 3 Vỉ x 20 Viên
              </p> */}
            </div>
          </div>
          <div className="mt-4 px-3">
            <button className="inline-flex bg-blue-500 items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
              Chọn mua
            </button>

            <Button asChild>Login</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
