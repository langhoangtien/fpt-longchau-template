import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const images = [
  "https://i1-thethao.vnecdn.net/2024/08/11/jordan-chiles-1723350768-3882-1723350929.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=LnQa8Busa8VieU0ICdlMBA",
  "https://i1-thethao.vnecdn.net/2024/08/11/ana-barbosu-1723350884-9257-1723350929.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=qESjymGT-ZZGTn9XumQYoQ",
  "https://i1-thethao.vnecdn.net/2024/08/11/jordan-chiles-1723350768-3882-1723350929.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=LnQa8Busa8VieU0ICdlMBA",
  "https://i1-thethao.vnecdn.net/2024/08/11/ana-barbosu-1723350884-9257-1723350929.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=qESjymGT-ZZGTn9XumQYoQ",
];
export default async function Product(props: any) {
  const slug: string = props?.params?.slug ?? null;
  return (
    <div className="sm:pb-6 md:pb-10 ">
      <ol
        data-lcpr="prr-id-product-detail-breadcrumb"
        className="my-3 flex flex-wrap md:my-4 container-lite"
      >
        <li>
          <span className="text-md text-link md:text-base">
            <a className="text-blue-500" href="/">
              <span className="hidden md:inline-block">Trang chủ</span>
              <svg
                width={16}
                height={16}
                className="inline-block md:hidden"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.5492 2.53318C11.3872 1.82618 12.6128 1.82618 13.4508 2.53318L20.2008 8.22772C20.7076 8.65523 21 9.28447 21 9.94747V19.7504C21 20.7169 20.2165 21.5004 19.25 21.5004H16.25C15.2835 21.5004 14.5 20.7169 14.5 19.7504V14.7504C14.5 14.3362 14.1642 14.0004 13.75 14.0004H10.25C9.83579 14.0004 9.5 14.3362 9.5 14.7504V19.7504C9.5 20.7169 8.7165 21.5004 7.75 21.5004H4.75C3.7835 21.5004 3 20.7169 3 19.7504V9.94747C3 9.28447 3.29241 8.65523 3.79916 8.22772L10.5492 2.53318Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </span>
          <span className="separator mx-1 text-caption2 text-tertiary md:mx-2 md:text-base">
            /
          </span>
        </li>
        <li>
          <span className="text-caption2 text-text-link md:text-base">
            <a className="text-blue-500" href="/duoc-my-pham">
              Dược mỹ phẩm
            </a>
          </span>
          <span className="separator mx-1 text-caption2 text-text-tertiary md:mx-2 md:text-base">
            /
          </span>
        </li>
        <li>
          <span className="text-caption2 text-text-link md:text-base">
            <a className="text-blue-500" href="/duoc-my-pham/giai-phap-lan-da">
              Giải pháp làn da
            </a>
          </span>
          <span className="separator mx-1 text-caption2 text-text-tertiary md:mx-2 md:text-base">
            /
          </span>
        </li>
        <li>
          <span className="text-caption2 md:text-base text-text-primary pointer-events-none">
            <a href="/duoc-my-pham/tri-seo-mo-tham">Trị sẹo, mờ vết thâm</a>
          </span>
        </li>
      </ol>
      <div className="md:container-lite md:space-y-4 md:space-y-8">
        <div
          data-lcpr="prr-id-product-detail-product-information"
          className="p-4 flex gap-4 sm:flex-col flex-col md:flex-row md:flex-nowrap md:rounded-xl bg-white"
        >
          <div className="bg-transparent md:max-w-[475px] md:mr-8">
            <Carousel className="h-auto shrink-0 md:max-w-[805px] md:basis-[805px]">
              <CarouselContent>
                {images.map((image: any) => (
                  <CarouselItem key={image}>
                    <div className="p-1">
                      <CardContent className="flex md:w-[475px] aspect-[1/1] items-center justify-center rounded-xl p-0">
                        <img
                          src={image}
                          alt={"fff"}
                          className="object-cover w-full h-full rounded-xl"
                        />
                      </CardContent>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <div className="font-medium">
                <span className="text-base md:text-label1">Thương hiệu: </span>
                <span className="text-base md:text-label1">
                  <a className="text-blue-500" href="/thuong-hieu/natureplex">
                    Natureplex
                  </a>
                </span>
              </div>
              <div>
                <h1
                  data-test="product_name"
                  className="te omd:text-heading1 font-medium text-gray-10 inline align-middle"
                >
                  Gel Scargel Natureplex cải thiện tính đàn hồi, cấu trúc và
                  hình dạng của nhiều loại sẹo (35g)
                </h1>
              </div>
              <div className="flex items-center">
                <span
                  data-test-id="sku"
                  className="text-base omd:te font-normal text-gray-7 cursor-pointer transition-all duration-300 hover:opacity-70"
                >
                  00021309
                </span>
                <span className="mx-1.5 w-1 h-1 inline-block bg-gray-5 rounded-full" />
                <span className="text-base text-gray-7 inline-flex items-center">
                  4.7
                  <svg
                    width={16}
                    height={16}
                    className="ml-2 shrink-0"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.803 6.08569C22.7017 4.26474 25.2983 4.26473 26.197 6.08568L31.0493 15.9177L41.8996 17.4943C43.9091 17.7863 44.7115 20.2558 43.2574 21.6732L35.4061 29.3264L37.2595 40.1327C37.6028 42.1342 35.5021 43.6604 33.7047 42.7155L24 37.6134L14.2952 42.7155C12.4978 43.6604 10.3971 42.1342 10.7404 40.1327L12.5938 29.3264L4.74255 21.6732C3.28843 20.2558 4.09083 17.7863 6.10037 17.4943L16.9506 15.9177L21.803 6.08569Z"
                      fill="url(#paint0_linear_4531_177138)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_4531_177138"
                        x1="43.9999"
                        y1="43.0023"
                        x2="5.75441"
                        y2="3.04089"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#F79009" />
                        <stop offset={1} stopColor="#FDB022" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
                <span className="mx-1.5 w-1 h-1 inline-block bg-gray-5 rounded-full" />
                <span className="text-sm text-blue-500 cursor-pointer">
                  40 đánh giá
                </span>
                <span className="mx-1.5 w-1 h-1 inline-block bg-gray-5 rounded-full" />
                <span className="text-sm text-blue-500 cursor-pointer">
                  489 bình luận
                </span>
              </div>
              <div>
                <div className="text-blue-500 inline-flex items-baseline">
                  <span
                    data-test="price"
                    className="md:text-2xl sm:text-xl md:font-semibold font-bold animate-in fade-in-0"
                  >
                    325.000đ
                  </span>
                  <span className="relative bottom-[1px] ml-2 md:text-2xl sm:text-xl omd:font-normal font-medium">
                    {" "}
                    / <span data-test="unit">Tuýp</span>
                  </span>
                </div>
              </div>
              <div className="css-bqk1es mt-2 mb-0.5">
                <table className="content-list">
                  <tbody>
                    <tr className="content-container flex !mb-4">
                      <td className="flex !items-center ">
                        <p className="text-base md:te text-gray-7 mb-0.5 font-medium md:font-normal">
                          Chọn đơn vị tính
                        </p>
                      </td>
                      <td>
                        <div className="text-sm text-gray-1000 space-x-3">
                          <div
                            className="inline-flex justify-center items-center rounded-[50px] ring-offset-background relative font-medium text-text-primary overflow-hidden cursor-pointer h-9 text-label1 transition-all duration-300 border-blue-5 border border-solid bg-white pl-4 pr-6"
                            data-test="unit_lv1"
                          >
                            Tuýp
                            <div className="w-[0px] h-[0px] top-[6px] right-[10px] border-t-[26px] border-l-[26px] border-solid border-l-transparent border-t-blue-5 -mt-[6px] -mr-[12px] absolute">
                              <span className="absolute -top-[22px] right-[3px]">
                                <svg
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  width={10}
                                  height={10}
                                  className="text-white"
                                >
                                  <path
                                    d="M8.5 16.5858L4.70711 12.7929C4.31658 12.4024 3.68342 12.4024 3.29289 12.7929C2.90237 13.1834 2.90237 13.8166 3.29289 14.2071L7.79289 18.7071C8.18342 19.0976 8.81658 19.0976 9.20711 18.7071L20.2071 7.70711C20.5976 7.31658 20.5976 6.68342 20.2071 6.29289C19.8166 5.90237 19.1834 5.90237 18.7929 6.29289L8.5 16.5858Z"
                                    fill="currentColor"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr className="content-container">
                      <td>
                        <p className="css-1c4fxto text-gray-7">Danh mục</p>
                      </td>
                      <td colSpan={1} className="flex-1">
                        <a
                          className="text-blue-500"
                          href="/duoc-my-pham/tri-seo-mo-tham"
                        >
                          <p className="te">Trị sẹo, mờ vết thâm</p>
                        </a>
                      </td>
                    </tr>
                    <tr className="content-container">
                      <td>
                        <p className="css-1c4fxto text-gray-7">Quy cách</p>
                      </td>
                      <td colSpan={1} className="flex-1">
                        <div className="css-1e2qim1 text-gray-10">Tuýp</div>
                      </td>
                    </tr>
                    <tr className="content-container">
                      <td>
                        <p className="css-1c4fxto text-gray-7">
                          Xuất xứ thương hiệu
                        </p>
                      </td>
                      <td colSpan={1} className="flex-1">
                        <div className="css-1e2qim1 text-gray-10">Hoa Kỳ</div>
                      </td>
                    </tr>
                    <tr className="content-container">
                      <td>
                        <p className="css-1c4fxto text-gray-7">Mô tả ngắn</p>
                      </td>
                      <td colSpan={1} className="flex-1">
                        <div className="css-1e2qim1 text-gray-10">
                          <p>
                            Natureplex Scargel giúp cải thiện tính đàn hồi, cấu
                            trúc và hình dạng của nhiều loại sẹo (sẹo do mụn,
                            sẹo do phẫu thuật, bỏng, vết cắt, sẹo thâm ở vùng da
                            nhạy cảm và những tổn thương khác...) giúp sẹo mềm
                            và trơn láng, ngăn ngừa sẹo đối với những vết thương
                            mới lành.
                          </p>
                        </div>
                      </td>
                    </tr>
                    <tr className="content-container">
                      <td>
                        <p className="css-1c4fxto text-gray-7">Nhà sản xuất</p>
                      </td>
                      <td colSpan={1} className="flex-1">
                        <div className="css-1e2qim1 text-gray-10">
                          NATUREPLEX PHARMACEUTICALS
                        </div>
                      </td>
                    </tr>
                    <tr className="content-container">
                      <td>
                        <p className="css-1c4fxto text-gray-7">Nước sản xuất</p>
                      </td>
                      <td colSpan={1} className="flex-1">
                        <div className="css-1e2qim1 text-gray-10">Hoa Kỳ</div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-[8px] " />
              <div className="md:hidden fixed bottom-0 left-0 right-0 z-[11] w-full bg-white">
                <div>
                  <div className="shadow-3xl w-full rounded-t-3xl px-4 pt-4 pb-[30px]">
                    <div className="flex gap-x-2">
                      <button
                        bg="primary"
                        size={48}
                        className="inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none ring-offset-background [&>*]:shrink-0 bgi-button-primary-active active:bg-button-primary-pressed active:bgi-none text-icon-white fill-icon-white p-[12px] h-[48px] w-[48px] rounded-[50px]"
                      >
                        <svg
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          width={32}
                          height={32}
                          className="shrink-0"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M21.1297 6.00772C18.2871 5.91306 15.4151 6.68861 12.9355 8.34372C10.1506 10.2046 8.20441 12.9526 7.30796 16.0246C7.06041 15.9944 6.76396 16.0077 6.41196 16.1073C5.09774 16.4802 4.1093 17.5571 3.66485 18.5055C3.08841 19.7415 2.8453 21.3762 3.10174 23.0637C3.35641 24.7459 4.06707 26.1326 4.95596 26.9935C5.84752 27.8548 6.85419 28.1348 7.85419 27.9246C9.34307 27.6068 10.0813 27.3691 9.87285 25.9819L8.86352 19.2579C9.06707 15.6188 10.9511 12.1931 14.1022 10.0864C18.32 7.26906 23.8497 7.4495 27.8729 10.5379C30.6715 12.6837 32.2964 15.8988 32.484 19.2739L31.7782 23.9775C30.204 28.2855 26.3013 31.2695 21.7853 31.6931H18.7782C18.0022 31.6931 17.3773 32.3179 17.3773 33.0931V33.8317C17.3773 34.6073 18.0022 35.2322 18.7782 35.2322H22.5697C23.3453 35.2322 23.9675 34.6073 23.9675 33.8317V33.4455C27.3729 32.6144 30.3453 30.5215 32.2809 27.6028L33.4955 27.9251C34.484 28.1815 35.5026 27.8548 36.3937 26.9939C37.2826 26.1326 37.9929 24.7464 38.248 23.0642C38.5053 21.3766 38.2551 19.7446 37.6853 18.5059C37.1133 17.2673 36.2613 16.4806 35.2777 16.1984C34.8657 16.0797 34.4186 16.0362 34.0351 16.0246C33.2244 13.2468 31.5555 10.7206 29.1502 8.87617C26.7853 7.0615 23.9724 6.10106 21.1297 6.00772Z"
                            fill="white"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M25.083 18.3034C26.0208 18.3034 26.781 19.0636 26.7831 20.0039C26.781 20.9417 26.0208 21.704 25.083 21.704C24.1427 21.704 23.3805 20.9417 23.3805 20.0039C23.3805 19.0641 24.1432 18.3034 25.083 18.3034ZM20.5043 18.3034C21.4442 18.3034 22.2044 19.0636 22.2044 20.0039C22.2044 20.9417 21.4442 21.704 20.5043 21.704C19.5636 21.704 18.8034 20.9417 18.8034 20.0039C18.8034 19.0641 19.5636 18.3034 20.5043 18.3034ZM15.9273 18.3034C16.8651 18.3034 17.6274 19.0636 17.6274 20.0039C17.6274 20.9417 16.8651 21.704 15.9273 21.704C14.9874 21.704 14.2268 20.9417 14.2268 20.0039C14.2268 19.0641 14.9874 18.3034 15.9273 18.3034ZM20.5043 11C15.5181 11 11.5 14.8858 11.5 20.0039C11.5 22.4621 12.4295 24.6346 13.9436 26.2286L13.4063 28.6373C13.2292 29.4299 13.7789 29.9631 14.4913 29.5663L16.8435 28.2543C17.9613 28.7396 19.1977 29.0078 20.5043 29.0078C25.4922 29.0078 29.5078 25.1245 29.5078 20.0039C29.5078 14.8858 25.4922 11 20.5043 11Z"
                            fill="white"
                          />
                          <ellipse
                            cx="20.8517"
                            cy="19.6089"
                            rx="7.01774"
                            ry="3.27494"
                            fill="#FCFCFC"
                          />
                          <circle
                            cx="15.9035"
                            cy="20.6086"
                            r="1.40355"
                            fill="url(#paint0_linear_4823_6723)"
                          />
                          <circle
                            cx="20.5813"
                            cy="20.6086"
                            r="1.40355"
                            fill="url(#paint1_linear_4823_6723)"
                          />
                          <circle
                            cx="25.261"
                            cy="20.6086"
                            r="1.40355"
                            fill="url(#paint2_linear_4823_6723)"
                          />
                          <defs>
                            <linearGradient
                              id="paint0_linear_4823_6723"
                              x1="16.896"
                              y1="21.6011"
                              x2="14.9111"
                              y2="19.6162"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#1250DC" />
                              <stop offset={1} stopColor="#306DE4" />
                            </linearGradient>
                            <linearGradient
                              id="paint1_linear_4823_6723"
                              x1="21.5737"
                              y1="21.6011"
                              x2="19.5888"
                              y2="19.6162"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#1250DC" />
                              <stop offset={1} stopColor="#306DE4" />
                            </linearGradient>
                            <linearGradient
                              id="paint2_linear_4823_6723"
                              x1="26.2534"
                              y1="21.6011"
                              x2="24.2685"
                              y2="19.6162"
                              gradientUnits="userSpaceOnUse"
                            >
                              <stop stopColor="#1250DC" />
                              <stop offset={1} stopColor="#306DE4" />
                            </linearGradient>
                          </defs>
                        </svg>
                      </button>
                      <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bg-button-secondary-active text-text-focus active:bg-button-secondary-pressed py-[12px] h-[48px] rounded-[42px] text-label1 flex-auto px-6 usm:px-0">
                        Tìm nhà thuốc
                      </button>
                      <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[12px] h-[48px] rounded-[42px] text-label1 flex-auto px-6 usm:px-0">
                        Chọn mua
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="z-[12] hidden sm:block">
                <div className="mt-4 flex items-center">
                  <span className="text-base text-gray-700 cta-title mr-4 inline-block h-full w-full max-w-[115px]">
                    Chọn số lượng
                  </span>
                  <div className="cta-desktop__quantity--input-spinner inline-block items-center">
                    <div className="mx-[-4px] my-[-2px]">
                      <div className="product-quantity">
                        <span disabled="" className="quantity-decrease">
                          <span className="estore-icon  product-quantity-icon">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M3.75 12H20.25"
                                stroke="black"
                                strokeWidth={2}
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </span>
                        <input
                          type="number"
                          min={1}
                          max={999}
                          className="text-center"
                          defaultValue={1}
                        />
                        <span className="quantity-increase">
                          <span className="estore-icon  product-quantity-icon">
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.8834 3.00673L12 3C12.5128 3 12.9355 3.38604 12.9933 3.88338L13 4V11H20C20.5128 11 20.9355 11.386 20.9933 11.8834L21 12C21 12.5128 20.614 12.9355 20.1166 12.9933L20 13H13V20C13 20.5128 12.614 20.9355 12.1166 20.9933L12 21C11.4872 21 11.0645 20.614 11.0067 20.1166L11 20V13H4C3.48716 13 3.06449 12.614 3.00673 12.1166L3 12C3 11.4872 3.38604 11.0645 3.88338 11.0067L4 11H11V4C11 3.48716 11.386 3.06449 11.8834 3.00673L12 3L11.8834 3.00673Z"
                                fill="currentColor"
                              />
                            </svg>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex gap-4">
                  <button
                    className="inline-flex bg-blue-500 items-center justify-center font-medium text-white  py-[14px] h-[56px] rounded-[42px] text-xl flex-auto px-6"
                    data-test="btn_choose_buy"
                  >
                    Chọn mua
                  </button>
                  <button className="inline-flex bg-gray-200 items-center justify-center font-medium text-blue-600  text-focus  py-[14px] h-[56px] rounded-[42px] text-xl flex-auto px-6">
                    Tìm nhà thuốc
                  </button>
                </div>
              </div>
              <div className="flex">
                <svg
                  width={16}
                  height={16}
                  className="mr-1.5 mt-1.5 text-yellow-500"
                  viewBox="0 0 12 12"
                  fill="current"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.60297 1.22212C3.6882 1.00212 3.89988 0.857117 4.13581 0.857117H7.7852C8.18239 0.857117 8.45843 1.25234 8.3217 1.62526L7.42478 4.0714H9.49792C10.0029 4.0714 10.2597 4.67838 9.90801 5.04077L4.19353 10.9299C3.70488 11.4335 2.86242 10.98 3.01367 10.2948L3.72516 7.0714H2.53607C1.95876 7.0714 1.56156 6.49156 1.77011 5.95324L3.60297 1.22212Z"
                    fill="currentColor"
                  />
                </svg>
                <div>
                  <span className="text-sm font-semibold text-yellow-600">
                    Sản phẩm đang được chú ý,{" "}
                  </span>
                  <span className="text-sm">
                    có 20 người thêm vào giỏ hàng &amp; 46 người đang xem
                  </span>
                </div>
              </div>
              <div className="css-1ri80ux">
                <div className="item-container">
                  <span size={40} className="estore-icon mr-2 css-1z1316r">
                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.6698 13.9732H20.5481C20.3 13.9732 20.0995 13.7727 20.0995 13.5246V11.7043L15.0391 15.3192L20.0995 18.934V17.1138C20.0995 16.8657 20.3 16.6652 20.5481 16.6652H20.7725C24.1123 16.6652 26.8294 19.3822 26.8294 22.7221C26.8294 24.3906 26.1515 25.9035 25.0563 27C27.1834 25.8093 28.624 23.5337 28.624 20.9274C28.624 17.0927 25.5045 13.9732 21.6698 13.9732Z"
                        fill="#7EB5FF"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.3463 7.90195C13.0745 8.17369 12.9218 8.54226 12.9218 8.92656V10.3839C12.9218 10.8795 13.3236 11.2812 13.8192 11.2812C14.3147 11.2812 14.7165 10.8795 14.7165 10.3839V8.8864C14.7165 8.52563 14.8488 8.17738 15.0884 7.90766L17.6713 5H16.2482L13.3463 7.90195ZM24.1383 18.8142C23.2872 18.0802 22.1947 17.619 20.9977 17.5674V19.8058C20.9977 19.974 20.9039 20.1279 20.7545 20.2051C20.6042 20.2809 20.4248 20.2688 20.2884 20.171L14.0071 15.6844C13.8892 15.6 13.8192 15.4641 13.8192 15.3192C13.8192 15.1742 13.8892 15.0383 14.0071 14.9544L20.2884 10.4678C20.4248 10.3696 20.6042 10.3565 20.7545 10.4337C20.9039 10.5104 20.9977 10.6643 20.9977 10.8326V13.0759H21.6707C22.5335 13.0759 23.3612 13.2208 24.1383 13.4792V8.58927H16.6138C16.0615 8.58927 15.6138 9.03699 15.6138 9.58927V11.7299C15.6138 11.978 15.4132 12.1785 15.1651 12.1785H12.4732C12.2251 12.1785 12.0245 11.978 12.0245 11.7299V9.58927C12.0245 9.03699 11.5768 8.58927 11.0245 8.58927H3.5V22.741C3.5 23.8456 4.39543 24.741 5.5 24.741H22.1383C23.2429 24.741 24.1383 23.8456 24.1383 22.741V18.8142ZM10.6785 22.4977C10.6785 22.7455 10.4777 22.9464 10.2299 22.9464H5.7433C5.49551 22.9464 5.29464 22.7455 5.29464 22.4977C5.29464 22.2499 5.49551 22.049 5.7433 22.049H10.2299C10.4777 22.049 10.6785 22.2499 10.6785 22.4977ZM10.6785 20.7031C10.6785 20.9509 10.4777 21.1517 10.2299 21.1517H5.7433C5.49551 21.1517 5.29464 20.9509 5.29464 20.7031C5.29464 20.4553 5.49551 20.2544 5.7433 20.2544H10.2299C10.4777 20.2544 10.6785 20.4553 10.6785 20.7031ZM5.36225 6.46447C6.29994 5.52678 7.57171 5 8.89779 5H14.9798L12.2878 7.69196H4.13477L5.36225 6.46447ZM16.2482 7.69196H24.4013L27.0932 5H18.9402L16.2482 7.69196ZM27.7271 5.6344V14.6462L25.0352 13.3002V8.32635L27.7271 5.6344Z"
                        fill="url(#paint0_linear_4723_154886)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4723_154886"
                          x1="15.8371"
                          y1="26.1511"
                          x2="7.14707"
                          y2="8.52384"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#1B5EEB" />
                          <stop offset={1} stopColor="#4987FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <div className="item-container--content">
                    <p className="css-vrxl18 text-gray-10">
                      Đổi trả trong 30 ngày
                    </p>
                    <p className="css-1bu4btk text-gray-7">
                      kể từ ngày mua hàng
                    </p>
                  </div>
                </div>
                <div className="item-container">
                  <span size={40} className="estore-icon mr-2 css-1z1316r">
                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.5 14.7622H5.16079V25.1344H1.5V14.7622Z"
                        fill="#7EB5FF"
                      />
                      <path
                        d="M29.3645 18.8073C29.143 18.3815 28.763 18.0598 28.3065 17.9114C27.85 17.7631 27.3535 17.8 26.924 18.0142L20.0478 21.5163C19.1753 22.8769 17.7537 23.7555 16.3199 23.0661L11.506 20.8025C11.3719 20.7262 11.2716 20.6019 11.2255 20.4547C11.1793 20.3075 11.1906 20.1483 11.2571 20.0091C11.3236 19.8699 11.4404 19.7611 11.5839 19.7045C11.7275 19.6479 11.8871 19.6478 12.0307 19.7042C17.2717 22.1448 16.9544 22.0715 17.3632 22.0837C18.8092 22.1509 19.7244 19.9056 18.1442 19.2039C9.52914 15.1587 10.7494 15.2869 6.38086 15.8299V23.9141C7.04486 23.8626 7.71132 23.9757 8.32108 24.2436C17.2046 28.2766 14.7031 28.362 28.5713 21.2723C28.7853 21.1626 28.9756 21.0118 29.1313 20.8285C29.287 20.6452 29.405 20.4331 29.4787 20.2041C29.5523 19.9752 29.5802 19.7341 29.5606 19.4944C29.541 19.2547 29.4744 19.0212 29.3645 18.8073Z"
                        fill="url(#paint0_linear_4723_154899)"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M19.6878 18.8835C19.4058 18.552 19.0561 18.2847 18.6622 18.0995C17.2036 17.4142 16.0447 16.8626 15.1079 16.4169C11.7499 14.8188 11.248 14.58 10.041 14.4082V5H15.5322V8.66079C15.5325 8.7648 15.5594 8.86699 15.6103 8.95768C15.6613 9.04837 15.7345 9.12453 15.8232 9.17894C15.9118 9.23334 16.0129 9.26419 16.1168 9.26854C16.2207 9.27289 16.324 9.25061 16.4169 9.20381L18.5829 8.12387C19.0587 8.35989 19.4394 8.55355 19.7474 8.71021C20.9363 9.31491 21.0415 9.36839 21.3468 9.1794C21.6535 8.98954 21.6533 8.96282 21.6407 6.94829C21.6375 6.43803 21.6335 5.80025 21.6335 5H27.1247V16.6596C27.0631 16.6708 27.0143 16.6786 26.9659 16.6887C26.593 16.7667 26.2496 16.9859 20.2973 20.0214C20.1776 19.603 19.9698 19.215 19.6878 18.8835ZM24.6842 14.7621H22.2436C22.0818 14.7621 21.9266 14.8264 21.8122 14.9408C21.6978 15.0552 21.6335 15.2104 21.6335 15.3722C21.6335 15.5341 21.6978 15.6892 21.8122 15.8037C21.9266 15.9181 22.0818 15.9824 22.2436 15.9824H24.6842C24.846 15.9824 25.0012 15.9181 25.1156 15.8037C25.23 15.6892 25.2943 15.5341 25.2943 15.3722C25.2943 15.2104 25.23 15.0552 25.1156 14.9408C25.0012 14.8264 24.846 14.7621 24.6842 14.7621ZM19.3993 7.16896C18.722 6.83039 18.722 6.83039 18.5823 6.83039C18.446 6.83039 18.446 6.83039 17.8142 7.14588C17.5696 7.26801 17.2304 7.4374 16.752 7.67238V5H20.4127V7.67238C19.9653 7.45186 19.6397 7.28909 19.3993 7.16896Z"
                        fill="url(#paint1_linear_4723_154899)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4723_154899"
                          x1="18.1877"
                          y1="27.8176"
                          x2="14.7038"
                          y2="16.1535"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#1B5EEB" />
                          <stop offset={1} stopColor="#4987FF" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_4723_154899"
                          x1="18.7405"
                          y1="21.0944"
                          x2="11.8273"
                          y2="8.09924"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#1B5EEB" />
                          <stop offset={1} stopColor="#4987FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  <div className="item-container--content">
                    <p className="css-vrxl18 text-gray-10">Miễn phí 100%</p>
                    <p className="css-1bu4btk text-gray-7">đổi thuốc</p>
                  </div>
                </div>
                <div className="item-container">
                  <span size={40} className="estore-icon mr-2 css-1z1316r">
                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_4723_154911)">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M21.6544 22.1987C22.0338 20.3237 23.805 18.8337 25.7087 18.8337C27.5419 18.8337 28.8631 20.2156 28.8269 21.9925C30.8094 22.0444 31.3612 19.4338 31.3612 19.4338C31.5281 18.7038 31.7775 17.2806 31.9863 15.8837C32.0547 15.4525 32.0021 15.0107 31.8344 14.6075C31.3161 13.3978 30.6899 12.2372 29.9631 11.14C29.2756 10.1144 28.1225 9.50688 26.8062 9.485C26.0212 9.4725 25.2506 9.465 24.6687 9.465L24.6637 9.46C24.5887 8.205 23.6737 7.24375 22.3894 7.12875C21.5537 7.05437 18.2437 7 16.655 7C16.0237 7 15.1181 7.00875 14.2019 7.02375V7.02H14.1944H3.17813C3.03792 7.01992 2.89907 7.04747 2.76951 7.10109C2.63996 7.15471 2.52225 7.23334 2.42311 7.33248C2.32396 7.43162 2.24533 7.54934 2.19172 7.67889C2.1381 7.80844 2.11054 7.94729 2.11063 8.0875V8.0925C2.11063 8.37429 2.22257 8.64454 2.42182 8.8438C2.62108 9.04306 2.89133 9.155 3.17313 9.155H5.39375C5.66114 9.17471 5.91119 9.29479 6.09376 9.49115C6.27633 9.68751 6.3779 9.94563 6.37812 10.2137V10.2194C6.37854 10.3597 6.35127 10.4988 6.29788 10.6286C6.2445 10.7584 6.16605 10.8763 6.06701 10.9758C5.96797 11.0752 5.8503 11.1542 5.72073 11.2081C5.59115 11.262 5.45222 11.2898 5.31187 11.29H4.17312C3.89017 11.29 3.61881 11.4024 3.41873 11.6025C3.21865 11.8026 3.10625 12.0739 3.10625 12.3569C3.10617 12.497 3.1337 12.6358 3.18728 12.7653C3.24086 12.8949 3.31943 13.0125 3.41851 13.1117C3.51759 13.2108 3.63523 13.2894 3.76471 13.3431C3.89419 13.3968 4.03297 13.4244 4.17312 13.4244H5.31187C5.59499 13.4244 5.86652 13.5368 6.06671 13.737C6.26691 13.9372 6.37937 14.2088 6.37937 14.4919C6.37937 14.775 6.26691 15.0465 6.06671 15.2467C5.86652 15.4469 5.59499 15.5594 5.31187 15.5594H1.05187C0.768865 15.5594 0.497437 15.6718 0.297259 15.8718C0.0970823 16.0719 -0.0154593 16.3432 -0.015625 16.6262C-0.015625 16.9094 0.0968434 17.1809 0.297038 17.3811C0.497234 17.5813 0.768756 17.6937 1.05187 17.6937H5.31187C5.59499 17.6937 5.86652 17.8062 6.06671 18.0064C6.26691 18.2066 6.37937 18.4781 6.37937 18.7612C6.37904 19.0442 6.26643 19.3154 6.06627 19.5153C5.86611 19.7152 5.59478 19.8275 5.31187 19.8275H3.99437C3.71142 19.8275 3.44006 19.9399 3.23998 20.14C3.0399 20.3401 2.9275 20.6114 2.9275 20.8944C2.9275 21.1774 3.03988 21.4488 3.23994 21.649C3.44 21.8492 3.71136 21.9617 3.99437 21.9619L8.19812 21.9587L8.5475 21.0881C9.26313 19.7681 10.6869 18.8331 12.1944 18.8331C14.0988 18.8331 15.4513 20.3244 15.3025 22.2006H21.6537L21.6544 22.1987ZM24.5706 10.945C25.1287 10.945 25.8512 10.9525 26.5763 10.9644C27.455 10.9787 28.2237 11.3825 28.685 12.0712C29.1777 12.814 29.6205 13.5886 30.0106 14.39C30.2169 14.81 29.8375 15.3569 29.3406 15.3569H24.0125L24.5706 10.945ZM1.40508 11.3086C1.99447 11.3086 2.47227 11.7864 2.47227 12.3758C2.47227 12.9652 1.99447 13.443 1.40508 13.443C0.815687 13.443 0.337891 12.9652 0.337891 12.3758C0.337891 11.7864 0.815687 11.3086 1.40508 11.3086Z"
                          fill="url(#paint0_linear_4723_154911)"
                        />
                        <path
                          d="M13.189 24.0291C14.2103 23.0771 14.3676 21.5858 13.5402 20.6983C12.7129 19.8108 11.2143 19.8632 10.193 20.8152C9.17169 21.7673 9.01442 23.2585 9.84173 24.146C10.669 25.0335 12.1677 24.9812 13.189 24.0291Z"
                          fill="#7EB5FF"
                        />
                        <path
                          d="M26.7026 24.0291C27.724 23.0771 27.8812 21.5858 27.0539 20.6983C26.2266 19.8108 24.728 19.8631 23.7067 20.8152C22.6854 21.7673 22.5281 23.2585 23.3554 24.146C24.1827 25.0335 25.6813 24.9812 26.7026 24.0291Z"
                          fill="#7EB5FF"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_4723_154911"
                          x1="16.2954"
                          y1="23.2864"
                          x2="11.8202"
                          y2="7.69953"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#1B5EEB" />
                          <stop offset={1} stopColor="#4987FF" />
                        </linearGradient>
                        <clipPath id="clip0_4723_154911">
                          <rect width={32} height={32} fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <div className="item-container--content">
                    <p className="css-vrxl18 text-gray-10">
                      Miễn phí vận chuyển
                    </p>
                    <p className="css-1bu4btk text-gray-7">
                      theo chính sách giao hàng
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-lcpr="prr-id-product-detail-product-content">
          <div
            id="content-wrapper"
            className="bg-white p-4 md:rounded-xl css-13wbf7e"
          >
            <div className="lc-detail-content-inner relative">
              <div className="lc-col-1  css-119phdv">
                <ul className="lc-detail-tabs sticky top-3">
                  <li className="active">
                    <a>Mô tả sản phẩm</a>
                  </li>
                  <li className="">
                    <a>Thành phần</a>
                  </li>
                  <li className="">
                    <a>Công dụng</a>
                  </li>
                  <li className="">
                    <a>Cách dùng</a>
                  </li>
                  <li className="">
                    <a>Tác dụng phụ</a>
                  </li>
                  <li className="">
                    <a>Lưu ý</a>
                  </li>
                  <li className="">
                    <a>Bảo quản</a>
                  </li>
                </ul>
              </div>
              <div className="lc-col-2 ">
                <div className="lc-wrap-tit-detail">
                  <p className="text-heading2 lc-tit font-semibold md:basis-[669px]">
                    Gel Scargel Natureplex là gì ?
                  </p>
                  <div className="lc-switch-size">
                    <p className="txt txt-1 !text-sm">Kích thước chữ</p>
                    <ul className="lc-option-box-size">
                      <li className="cursor-pointer active">
                        <p className="css-osuj7x">Mặc định </p>
                      </li>
                      <li className="cursor-pointer">
                        <p className="css-osuj7x">Lớn hơn</p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lc-wrap-content lc-view-full-cont abc">
                  <div className="inner md:pb-12">
                    <div className="description" id="detail-content-0">
                      <h2 className="css-8uyn92">Mô tả sản phẩm </h2>
                      <div>
                        <p>
                          <a href="https://nhathuoclongchau.com.vn/duoc-my-pham/natureplex-scargel-tri-seo-35g-21669.html">
                            Gel trị sẹo Natureplex Scargel
                          </a>{" "}
                          là dòng sản phẩm uy tín đến từ đất Mỹ, chuyên hỗ trợ
                          điều trị các loại sẹo và ngăn ngừa hình thành sẹo
                          trong quá trình phục hồi vết thương. Với sự kết hợp
                          hài hòa giữa Allantoin, chiết xuất củ Hành tây,
                          Collagen thủy phân, Panthenol, sản phẩm cải thiện tình
                          trạng viêm nhiễm của vết thương và tăng tốc độ chữa
                          lành vết thương, làm giảm nguy cơ sẹo mới xuất hiện và
                          tình trạng màu sắc, kích thước của sẹo.
                        </p>
                        <p>
                          <img
                            width={1024}
                            height={625}
                            alt="Gel Natureplex Scargel điều trị sẹo (35g)"
                            src="https://cdn.nhathuoclongchau.com.vn/unsafe/800x0/filters:quality(95)/https://cms-prod.s3-sgn09.fptcloud.com/natureplex_scargel_tri_seo_35g_1fa025772b.png"
                          />
                        </p>
                        <p>
                          Một vết thương nhỏ, nếu không được chữa trị kịp thời,
                          đúng cách, có thể hình thành nên vết sẹo cứng đầu trên
                          làn da. Tùy thuộc vào cơ địa và nguyên nhân, sẹo sẽ
                          thể hiện đa dạng tình trạng màu sắc, kích thước,...
                          yêu cầu liệu trình điều trị khác nhau. Đối với phân
                          khúc sản phẩm sử dụng tại nhà, gel trị sẹo Natureplex
                          Scargel là sự lựa chọn đúng đắn từ bước đầu của quá
                          trình chữa lành vết thương, xua tan nỗi lo thâm sẹo và
                          sự tự tin cho bạn.
                        </p>
                        <h3>Hiệu quả của Natureplex Scargel</h3>
                        <p>
                          <strong>Hỗ trợ điều trị các loại sẹo</strong>
                        </p>
                        <p>
                          "Thành phần vàng" Allantoin trong gel trị sẹo
                          Natureplex Scargel giúp cải thiện tình trạng màu sắc,
                          kích thước của đa dạng các loại
                          <a href="https://nhathuoclongchau.com.vn/bai-viet/seo-lom-co-tu-day-khong-cach-lam-day-seo-lom-moi-62580.html">
                            {" "}
                            sẹo lõm
                          </a>
                          , rỗ do phẫu thuật, bỏng rộp, mụn trứng cá, xây xước
                          làn da,... Đặc biệt, nhờ cơ chế ức chế chức năng và sự
                          tăng sinh của tế bào sợi, chiết xuất củ Hành tây ngăn
                          ngừa vết sẹo phát triển trong tương lai, đặc biệt là
                          đối với sẹo lồi.
                        </p>
                        <p>
                          <strong>Ngăn ngừa hình thành sẹo</strong>
                        </p>
                        <p>
                          Với sự kết hợp hoàn hảo giữa các thành phần, gel trị
                          sẹo Natureplex Scargel mang đặc tính kháng viêm mạnh
                          mẽ cùng hiệu quả dưỡng ẩm chuyên sâu, củng cố chức
                          năng bảo vệ vết thương trước tác động của vi khuẩn,...
                          Ngoài ra, sản phẩm kích thích sản sinh tế bào mới, hỗ
                          trợ cho tốc độ chữa lành tự nhiên của vết thương.
                        </p>
                        <p>
                          Nhờ tác động trực tiếp đến vết thương trong quá trình
                          phục hồi, gel trị sẹo Natureplex Scargel khẳng định
                          được khả năng ngăn ngừa hình thành sẹo vô cùng hiệu
                          quả.
                        </p>
                        <h3>Ưu điểm nổi bật</h3>
                        <p>
                          Thiết kế của gel trị sẹo Scargel dạng tuýp nhỏ gọn,
                          chắc chắn, thích hợp sử dụng trong các dịp hoạt động
                          ngoài trời như dã ngoại.
                        </p>
                        <p>
                          Kết cấu sản phẩm dạng gel dễ dàng thẩm thấu vào làn
                          da, không gây cảm giác bết dính, nhờn rít.
                        </p>
                        <p>
                          Gel trị sẹo Natureplex Scargel mang mùi hương tự
                          nhiên, không gây hắc, khó chịu cho người sử dụng.
                        </p>
                        <p>
                          Sản phẩm có độ pH tầm trung, an toàn với làn da nhạy
                          cảm.
                        </p>
                        <p>
                          Không chứa parabens,{" "}
                          <a href="https://nhathuoclongchau.com.vn/thanh-phan/mineral-oil">
                            dầu khoáng
                          </a>
                          , chất tạo màu,... gây kích ứng làn da.
                        </p>
                        <p>
                          Đáp ứng tiêu chuẩn và quy định nghiêm ngặt về an toàn
                          vệ sinh của FDA.
                        </p>
                        <h3>Thành phần hoạt chất</h3>
                        <p>
                          <i>Allantoin:</i> Kháng viêm và kích thích sản sinh tế
                          bào mới giúp tăng tốc độ phục hồi vết thương, ngăn
                          ngừa hình thành sẹo, làm mờ màu sắc, tình trạng của
                          sẹo.
                        </p>
                        <p>
                          <i>Chiết xuất củ Hành tây: </i>Kháng viêm, kháng
                          khuẩn, hạn chế khả năng hình thành sẹo, đồng thời ức
                          chế tăng sinh tế bào giúp ngăn ngừa sự phát triển của
                          sẹo.
                        </p>
                        <p>
                          <i>Collagen thủy phân: </i>Kích thích quá trình phục
                          hồi vết thương tự nhiên trên làn da và cung cấp độ ẩm
                          giúp cải thiện độ đàn hồi, săn chắc, khỏe mạnh từ sâu
                          bên trong của làn da.
                        </p>
                        <p>
                          <i>Panthenol:</i> Là thành phần dưỡng ẩm với khả năng
                          kháng viêm hiệu quả giúp săn chắc làn da mịn màng và
                          làm dịu tình trạng kích ứng, viêm đỏ của vết thương
                          trên bề mặt làn da.
                        </p>
                        <p>
                          Natureplex là thương hiệu dược mỹ phẩm được thành lập
                          tại Mỹ vào năm 2001, chuyên cung cấp các dòng sản phẩm
                          hỗ trợ điều trị các vấn đề liên quan đến da liễu, răng
                          miệng và đường tiêu hóa. Mang tôn chỉ cung cấp sản
                          phẩm chất lượng tuyệt vời nhất với mức giá hợp lý
                          nhất, các sản phẩm của Natureplex được đầu tư kỹ lưỡng
                          từ bảng thành phần an toàn, lành tính đến thiết kế sản
                          phẩm gọn nhẹ, tối ưu trải nghiệm sử dụng cho khách
                          hàng. Đặc biệt, các sản phẩm và nhân viên của
                          Natureplex luôn đáp ứng các tiêu chuẩn vệ sinh nghiêm
                          ngặt của FDA, đảm bảo an toàn sử dụng cho người tiêu
                          dùng.
                        </p>
                      </div>
                    </div>
                    <div className="ingredient" id="detail-content-1">
                      <h2 className="css-8uyn92">
                        Thành phần của Gel Scargel Natureplex
                      </h2>
                      <div className="mt-2 md:mt-4">
                        <table className="w-full max-w-[700px] border-spacing-1">
                          <thead className="border-spacing-1">
                            <tr className="rounded">
                              <th
                                className="bg-gray-4 w-[60%] border-[2px] border-[#fff] p-2 text-left"
                                style={{
                                  borderBottomLeftRadius: 10,
                                  borderTopLeftRadius: 10,
                                }}
                              >
                                <p className="css-15sc8tc text-gray-10">
                                  Thông tin thành phần
                                </p>
                              </th>
                              <th
                                className="bg-gray-4 w-[40%] border-[2px] border-[#fff] p-2 text-right"
                                style={{
                                  borderBottomRightRadius: 10,
                                  borderTopRightRadius: 10,
                                }}
                              >
                                <p className="css-15sc8tc text-gray-10">
                                  Hàm lượng
                                </p>
                              </th>
                            </tr>
                          </thead>
                          <tbody className="border-spacing-1">
                            <tr className="rounded">
                              <td
                                className="border-[2px] border-[#fff] bg-[#edf0f3] p-2 text-left"
                                style={{
                                  borderBottomLeftRadius: 10,
                                  borderTopLeftRadius: 10,
                                }}
                              >
                                <p className="css-pqr9s7 text-gray-10">
                                  Allantoin
                                </p>
                              </td>
                              <td
                                className="border-[2px] border-[#fff] bg-[#edf0f3] p-2 text-right"
                                style={{
                                  borderBottomRightRadius: 10,
                                  borderTopRightRadius: 10,
                                }}
                              >
                                <p className="css-pqr9s7 text-gray-10"> </p>
                              </td>
                            </tr>
                            <tr className="rounded">
                              <td
                                className="border-[2px] border-[#fff] bg-[#edf0f3] p-2 text-left"
                                style={{
                                  borderBottomLeftRadius: 10,
                                  borderTopLeftRadius: 10,
                                }}
                              >
                                <p className="css-pqr9s7 text-gray-10">
                                  Collagen
                                </p>
                              </td>
                              <td
                                className="border-[2px] border-[#fff] bg-[#edf0f3] p-2 text-right"
                                style={{
                                  borderBottomRightRadius: 10,
                                  borderTopRightRadius: 10,
                                }}
                              >
                                <p className="css-pqr9s7 text-gray-10"> </p>
                              </td>
                            </tr>
                            <tr className="rounded">
                              <td
                                className="border-[2px] border-[#fff] bg-[#edf0f3] p-2 text-left"
                                style={{
                                  borderBottomLeftRadius: 10,
                                  borderTopLeftRadius: 10,
                                }}
                              >
                                <p className="css-pqr9s7 text-gray-10">
                                  Vitamin B5
                                </p>
                              </td>
                              <td
                                className="border-[2px] border-[#fff] bg-[#edf0f3] p-2 text-right"
                                style={{
                                  borderBottomRightRadius: 10,
                                  borderTopRightRadius: 10,
                                }}
                              >
                                <p className="css-pqr9s7 text-gray-10"> </p>
                              </td>
                            </tr>
                            <tr className="rounded">
                              <td
                                className="border-[2px] border-[#fff] bg-[#edf0f3] p-2 text-left"
                                style={{
                                  borderBottomLeftRadius: 10,
                                  borderTopLeftRadius: 10,
                                }}
                              >
                                <p className="css-pqr9s7 text-gray-10">
                                  Onion bulb extract
                                </p>
                              </td>
                              <td
                                className="border-[2px] border-[#fff] bg-[#edf0f3] p-2 text-right"
                                style={{
                                  borderBottomRightRadius: 10,
                                  borderTopRightRadius: 10,
                                }}
                              >
                                <p className="css-pqr9s7 text-gray-10"> </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <div />
                    </div>
                    <div className="usage" id="detail-content-2">
                      <h2 className="css-8uyn92">
                        Công dụng của Gel Scargel Natureplex
                      </h2>
                      <div>
                        <p>
                          Natureplex Scargel With Allantoin giúp cải thiện tính
                          đàn hồi, cấu trúc và hình dạng của nhiều loại sẹo (
                          <a href="https://nhathuoclongchau.com.vn/bai-viet/seo-loi-sau-mun-nguyen-nhan-va-cach-dieu-tri-56772.html">
                            sẹo do mụn
                          </a>
                          , sẹo do phẫu thuật, bỏng, vết cắt, sẹo thậm ở vùng da
                          nhạy cảm và những tổn thương khác...) giúp sẹo mềm và
                          trơn láng, ngăn ngừa sẹo đối với những vết thương mới
                          lành.
                        </p>
                      </div>
                    </div>
                    <div className="dosage" id="detail-content-3">
                      <h2 className="css-8uyn92">
                        Cách dùng Gel Scargel Natureplex
                      </h2>
                      <div>
                        <p>
                          Vệ sinh da vùng bị sẹo, thoa 1 lượng vừa đủ và mát-xa
                          vùng sẹo từ 2 - 3 phút. Sử dụng ngay sau khi vết
                          thương lành hoặc sau khi cắt chỉ. Có thể sử dụng ngay
                          lập tức trên những vết sẹo cũ.
                        </p>
                        <p>Thoa lên sẹo 3 - 4 lần/ngày.</p>
                      </div>
                    </div>
                    <div className="adverseEffect" id="detail-content-4">
                      <h2 className="css-8uyn92">Tác dụng phụ </h2>
                      <div>
                        <p>Chưa có thông tin về tác dụng phụ của sản phẩm.</p>
                      </div>
                    </div>
                    <div className="careful" id="detail-content-5">
                      <h2 className="css-8uyn92">Lưu ý </h2>
                      <div>
                        <p>
                          Không thoa lên mắt, không dùng cho vết thương hở và
                          vùng da bị tổn thương.
                        </p>
                        <p>Không dùng cho trẻ em dưới 4 tuổi.</p>
                        <p>&nbsp;</p>
                      </div>
                    </div>
                    <div className="preservation" id="detail-content-6">
                      <h2 className="css-8uyn92">Bảo quản </h2>
                      <div>
                        <p>Nơi khô ráo, tránh ánh nắng trực tiếp.&nbsp;</p>
                        <p>Để xa tầm tay trẻ em.</p>
                      </div>
                    </div>
                  </div>
                  <div className="lc-wrap-link lc-overlay-detail float-bottom mt-auto flex w-full cursor-pointer items-end justify-center">
                    <span
                      size={20}
                      className="estore-icon mr-1 !mb-0 transition-all duration-500  css-wi4pw5"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.9516 10.4793C19.2944 10.8392 19.2806 11.4088 18.9207 11.7517L12.6201 17.7533C12.2725 18.0844 11.7262 18.0844 11.3786 17.7533L5.07808 11.7517C4.71818 11.4088 4.70433 10.8392 5.04716 10.4793C5.38999 10.1193 5.95967 10.1055 6.31958 10.4483L11.9994 15.8586L17.6792 10.4483C18.0391 10.1055 18.6088 10.1193 18.9516 10.4793ZM18.9516 5.67926C19.2944 6.03916 19.2806 6.60884 18.9207 6.95167L12.6201 12.9533C12.2725 13.2844 11.7262 13.2844 11.3786 12.9533L5.07808 6.95167C4.71818 6.60884 4.70433 6.03916 5.04716 5.67926C5.38999 5.31935 5.95967 5.3055 6.31958 5.64833L11.9994 11.0586L17.6792 5.64833C18.0391 5.30551 18.6088 5.31935 18.9516 5.67926Z"
                          fill="currentColor"
                        />
                      </svg>
                    </span>
                    <p className="css-15sc8tc transition-all duration-500 ">
                      Xem thêm
                    </p>
                    <p className="css-15sc8tc transition-all duration-500 hidden">
                      Thu gọn
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lc-pharmacist-info ">
              <div className="left-side">
                <picture className="lc-img m-0">
                  <source
                    srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/56x56/https://cms-prod.s3-sgn09.fptcloud.com/thumbs/thumbnail_Thuy_NK_6_eec089d53d.jpg"
                    type="image/webp"
                    width={56}
                    height={56}
                  />
                  <source
                    srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                    type="image/webp"
                    width={56}
                    height={56}
                  />
                  <img
                    loading="lazy"
                    decoding="async"
                    alt=""
                    className="lc-img m-0"
                    src="/estore-images/fallback-images/error/img-error-1_1.svg"
                  />
                </picture>
              </div>
              <div className="right-side">
                <div className="lc-pharmacist-header">
                  <div className="lc-tit">
                    <span className="css-1ktc22 name text-gray-10">
                      Dược sĩ Đại học Ngô Kim Thúy
                    </span>
                    <span className="css-15sc8tc stick text-green-8 flex items-center">
                      <span size={20} className="estore-icon mr-2 css-wi4pw5">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM15.2197 8.96967L10.75 13.4393L8.78033 11.4697C8.48744 11.1768 8.01256 11.1768 7.71967 11.4697C7.42678 11.7626 7.42678 12.2374 7.71967 12.5303L10.2197 15.0303C10.5126 15.3232 10.9874 15.3232 11.2803 15.0303L16.2803 10.0303C16.5732 9.73744 16.5732 9.26256 16.2803 8.96967C15.9874 8.67678 15.5126 8.67678 15.2197 8.96967Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                      Đã kiểm duyệt nội dung
                    </span>
                  </div>
                </div>
                <div className="lc-cont">
                  <p className="css-1e2qim1 lc-desc text-gray-7">
                    Tốt nghiệp loại giỏi trường Đại học Y Dược Huế. Từng tham
                    gia nghiên cứu khoa học đề tài về Dược liệu. Nhiều năm kinh
                    nghiệm làm việc trong lĩnh vực Dược phẩm. Hiện đang là giảng
                    viên cho Dược sĩ tại Nhà thuốc Long Châu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          data-lcpr="prr-id-product-detail-related-product"
          className="umd:px-4"
        >
          <div className="bg-transparent">
            <div className="mb-4 flex items-center">
              <h2 className="flex w-full items-center text-heading3 font-semibold">
                Sản phẩm liên quan
              </h2>
            </div>
            <div className="relative -mx-4 h-auto w-screen shrink-0 rounded-xl md:mx-0 md:w-full styles_embla__9F4yB">
              <div className="relative">
                <div className="overflow-hidden pl-3 md:pl-0 styles_embla__container__Kdf_C">
                  <div
                    className="flex"
                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                  >
                    <div className="styles_embla__slide__JiX50">
                      <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-5 flex-col">
                        <a
                          className="px-3 block pt-3"
                          href="/duoc-my-pham/kem-boi-seo-fixderma-scar-gel-7-ml.html"
                        >
                          <div className="mb-1 shrink-0 text-center">
                            <img
                              alt="Gel làm mờ sẹo Fixderma Scars do mụn, bỏng, rạn da, vết thươngl (7ml)"
                              loading="lazy"
                              width={140}
                              height={140}
                              decoding="async"
                              data-nimg={1}
                              className="inline-block h-auto w-[140px] md:w-[160px]"
                              sizes="(min-width: 769px) 160px, 140px"
                              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg 2560w"
                              src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04121_98d624a190.jpg"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </a>
                        <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
                          <div>
                            <a
                              className="block px-3"
                              href="/duoc-my-pham/kem-boi-seo-fixderma-scar-gel-7-ml.html"
                            >
                              <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]" />
                              <h3 className="overflow-hidden text-gray-10 text-base font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                                Gel làm mờ sẹo Fixderma Scars do mụn, bỏng, rạn
                                da, vết thươngl (7ml)
                              </h3>
                            </a>
                            <div className="px-3">
                              <div className="mb-1">
                                <div className="text-blue-5">
                                  <span className="font-semibold">
                                    166.000đ
                                  </span>
                                  <span className="text-label2"> / Tuýp</span>
                                </div>
                              </div>
                              <p className="w-fit rounded-lg bg-layer-gray px-2 py-1 text-caption font-medium text-text-secondary line-clamp-2 md:text-caption2">
                                Tuýp x 7ml
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 px-3">
                            <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                              Chọn mua
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles_embla__slide__JiX50">
                      <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-5 flex-col">
                        <a
                          className="px-3 block pt-3"
                          href="/duoc-my-pham/kem-seo-phau-thuat-cesarin-ointment-lacopharm-30g-35759.html"
                        >
                          <div className="mb-1 shrink-0 text-center">
                            <img
                              alt="Kem Cesarin Ointment Lacopharm hỗ trợ làm mờ và làm mềm vết sẹo phẫu thuật (30g)"
                              loading="lazy"
                              width={140}
                              height={140}
                              decoding="async"
                              data-nimg={1}
                              className="inline-block h-auto w-[140px] md:w-[160px]"
                              sizes="(min-width: 769px) 160px, 140px"
                              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg 2560w"
                              src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501596_kem_seo_phau_thuat_cesarin_ointment_lacopharm_30g_3835_62f9_large_4980b82bef.jpg"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </a>
                        <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
                          <div>
                            <a
                              className="block px-3"
                              href="/duoc-my-pham/kem-seo-phau-thuat-cesarin-ointment-lacopharm-30g-35759.html"
                            >
                              <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]" />
                              <h3 className="overflow-hidden text-gray-10 text-base font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                                Kem Cesarin Ointment Lacopharm hỗ trợ làm mờ và
                                làm mềm vết sẹo phẫu thuật (30g)
                              </h3>
                            </a>
                            <div className="px-3">
                              <div className="mb-1">
                                <div className="text-blue-5">
                                  <span className="font-semibold">
                                    308.000đ
                                  </span>
                                  <span className="text-label2"> / Tuýp</span>
                                </div>
                              </div>
                              <p className="w-fit rounded-lg bg-layer-gray px-2 py-1 text-caption font-medium text-text-secondary line-clamp-2 md:text-caption2">
                                Tuýp x 30g
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 px-3">
                            <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                              Chọn mua
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles_embla__slide__JiX50">
                      <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-5 flex-col">
                        <a
                          className="px-3 block pt-3"
                          href="/duoc-my-pham/neocurma-gel-nghe-nano-20g-21573.html"
                        >
                          <div className="mb-1 shrink-0 text-center">
                            <img
                              alt="Gel Nghệ Nano NeoCurma ngừa mụn, ngừa sẹo, mờ vết thâm (20g)"
                              loading="lazy"
                              width={140}
                              height={140}
                              decoding="async"
                              data-nimg={1}
                              className="inline-block h-auto w-[140px] md:w-[160px]"
                              sizes="(min-width: 769px) 160px, 140px"
                              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg 2560w"
                              src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3745_1c9f1f9820.jpg"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </a>
                        <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
                          <div>
                            <a
                              className="block px-3"
                              href="/duoc-my-pham/neocurma-gel-nghe-nano-20g-21573.html"
                            >
                              <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]" />
                              <h3 className="overflow-hidden text-gray-10 text-base font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                                Gel Nghệ Nano NeoCurma ngừa mụn, ngừa sẹo, mờ
                                vết thâm (20g)
                              </h3>
                            </a>
                            <div className="px-3">
                              <div className="mb-1">
                                <div className="text-blue-5">
                                  <span className="font-semibold">69.000đ</span>
                                  <span className="text-label2"> / Tuýp</span>
                                </div>
                              </div>
                              <p className="w-fit rounded-lg bg-layer-gray px-2 py-1 text-caption font-medium text-text-secondary line-clamp-2 md:text-caption2">
                                Tuýp
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 px-3">
                            <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                              Chọn mua
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles_embla__slide__JiX50">
                      <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-5 flex-col">
                        <a
                          className="px-3 block pt-3"
                          href="/duoc-my-pham/gel-tri-seo-qderma-20g-30053.html"
                        >
                          <div className="px-2 py-0.5 md:py-1 absolute z-10 bgi-promotion-tag -top-[1px] -left-[1px] rounded-tl-xl rounded-br-xl">
                            <span
                              className="block text-caption font-semibold text-white md:text-caption2"
                              style={{
                                textShadow:
                                  "rgba(0, 0, 0, 0.25) 0.5px 0.5px 0px",
                              }}
                            >
                              -20%
                            </span>
                          </div>
                          <div className="mb-1 shrink-0 text-center">
                            <img
                              alt="Gel Qderma giúp làm phẳng, mềm và mờ các loại sẹo (20g)"
                              loading="lazy"
                              width={140}
                              height={140}
                              decoding="async"
                              data-nimg={1}
                              className="inline-block h-auto w-[140px] md:w-[160px]"
                              sizes="(min-width: 769px) 160px, 140px"
                              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG 2560w"
                              src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00029788_gel_tri_seo_qderma_20g_9261_630d_large_213edea830.JPG"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </a>
                        <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
                          <div>
                            <a
                              className="block px-3"
                              href="/duoc-my-pham/gel-tri-seo-qderma-20g-30053.html"
                            >
                              <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]">
                                <div className="" />
                              </div>
                              <h3 className="overflow-hidden text-gray-10 text-base font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                                Gel Qderma giúp làm phẳng, mềm và mờ các loại
                                sẹo (20g)
                              </h3>
                            </a>
                            <div className="px-3">
                              <div className="mb-1">
                                <div className="text-blue-5">
                                  <span className="font-semibold">
                                    220.000đ
                                  </span>
                                  <span className="text-label2"> / Tuýp</span>
                                </div>
                                <div className="text-caption font-normal text-gray-6 line-through md:text-label2 ">
                                  275.000đ
                                </div>
                              </div>
                              <p className="w-fit rounded-lg bg-layer-gray px-2 py-1 text-caption font-medium text-text-secondary line-clamp-2 md:text-caption2">
                                Tuýp
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 px-3">
                            <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                              Chọn mua
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles_embla__slide__JiX50">
                      <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-5 flex-col">
                        <a
                          className="px-3 block pt-3"
                          href="/duoc-my-pham/dizigone-nano-bac-tuyp-25g-31463.html"
                        >
                          <div className="mb-1 shrink-0 text-center">
                            <img
                              alt="Kem bôi Dizigone Nano Bạc Terrapharm hỗ trợ kháng khuẩn, tái tạo da và ngăn ngừa sẹo (25g)"
                              loading="lazy"
                              width={140}
                              height={140}
                              decoding="async"
                              data-nimg={1}
                              className="inline-block h-auto w-[140px] md:w-[160px]"
                              sizes="(min-width: 769px) 160px, 140px"
                              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg 2560w"
                              src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00031306_dizigone_nano_bac_tuyp_25g_8953_633b_large_ca3fd63a8c.jpg"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </a>
                        <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
                          <div>
                            <a
                              className="block px-3"
                              href="/duoc-my-pham/dizigone-nano-bac-tuyp-25g-31463.html"
                            >
                              <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]" />
                              <h3 className="overflow-hidden text-gray-10 text-base font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                                Kem bôi Dizigone Nano Bạc Terrapharm hỗ trợ
                                kháng khuẩn, tái tạo da và ngăn ngừa sẹo (25g)
                              </h3>
                            </a>
                            <div className="px-3">
                              <div className="mb-1">
                                <div className="text-blue-5">
                                  <span className="font-semibold">
                                    140.000đ
                                  </span>
                                  <span className="text-label2"> / Tuýp</span>
                                </div>
                              </div>
                              <p className="w-fit rounded-lg bg-layer-gray px-2 py-1 text-caption font-medium text-text-secondary line-clamp-2 md:text-caption2">
                                Tuýp x 25g
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 px-3">
                            <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                              Chọn mua
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles_embla__slide__JiX50">
                      <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-5 flex-col">
                        <a
                          className="px-3 block pt-3"
                          href="/duoc-my-pham/fixderma-gel-for-scars-15ml050-floz-16459.html"
                        >
                          <div className="mb-1 shrink-0 text-center">
                            <img
                              alt="Gel làm mờ sẹo Fixderma Scars gel do mụn, bỏng, rạn da, vết thương (15ml)"
                              loading="lazy"
                              width={140}
                              height={140}
                              decoding="async"
                              data-nimg={1}
                              className="inline-block h-auto w-[140px] md:w-[160px]"
                              sizes="(min-width: 769px) 160px, 140px"
                              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png 2560w"
                              src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/3_88f527b2d5.png"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </a>
                        <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
                          <div>
                            <a
                              className="block px-3"
                              href="/duoc-my-pham/fixderma-gel-for-scars-15ml050-floz-16459.html"
                            >
                              <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]" />
                              <h3 className="overflow-hidden text-gray-10 text-base font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                                Gel làm mờ sẹo Fixderma Scars gel do mụn, bỏng,
                                rạn da, vết thương (15ml)
                              </h3>
                            </a>
                            <div className="px-3">
                              <div className="mb-1">
                                <div className="text-blue-5">
                                  <span className="font-semibold">
                                    278.000đ
                                  </span>
                                  <span className="text-label2"> / Tuýp</span>
                                </div>
                              </div>
                              <p className="w-fit rounded-lg bg-layer-gray px-2 py-1 text-caption font-medium text-text-secondary line-clamp-2 md:text-caption2">
                                Tuýp x 15ml
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 px-3">
                            <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                              Chọn mua
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles_embla__slide__JiX50">
                      <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-5 flex-col">
                        <a
                          className="px-3 block pt-3"
                          href="/duoc-my-pham/hiruscar-5g-1013.html"
                        >
                          <div className="mb-1 shrink-0 text-center">
                            <img
                              alt="Gel Hiruscar Medinova điều trị sẹo lõm, sẹo lồi do phẫu thuật (5g)"
                              loading="lazy"
                              width={140}
                              height={140}
                              decoding="async"
                              data-nimg={1}
                              className="inline-block h-auto w-[140px] md:w-[160px]"
                              sizes="(min-width: 769px) 160px, 140px"
                              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg 2560w"
                              src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00014016_gel_boi_mo_seo_hiruscar_5g_8384_6303_large_e796acbcc4.jpg"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </a>
                        <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
                          <div>
                            <a
                              className="block px-3"
                              href="/duoc-my-pham/hiruscar-5g-1013.html"
                            >
                              <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]" />
                              <h3 className="overflow-hidden text-gray-10 text-base font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                                Gel Hiruscar Medinova điều trị sẹo lõm, sẹo lồi
                                do phẫu thuật (5g)
                              </h3>
                            </a>
                            <div className="px-3">
                              <div className="mb-1">
                                <div className="text-blue-5">
                                  <span className="font-semibold">
                                    136.000đ
                                  </span>
                                  <span className="text-label2"> / Tuýp</span>
                                </div>
                              </div>
                              <p className="w-fit rounded-lg bg-layer-gray px-2 py-1 text-caption font-medium text-text-secondary line-clamp-2 md:text-caption2">
                                Tuýp x 5g
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 px-3">
                            <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                              Chọn mua
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles_embla__slide__JiX50">
                      <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-5 flex-col">
                        <a
                          className="px-3 block pt-3"
                          href="/duoc-my-pham/nacurgo-12ml-2937.html"
                        >
                          <div className="mb-1 shrink-0 text-center">
                            <img
                              alt="Dung dịch xịt Nacurgo màng sinh học bảo vệ, tái tạo da tổn thương (100 lần xịt)"
                              loading="lazy"
                              width={140}
                              height={140}
                              decoding="async"
                              data-nimg={1}
                              className="inline-block h-auto w-[140px] md:w-[160px]"
                              sizes="(min-width: 769px) 160px, 140px"
                              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg 2560w"
                              src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/IMG_3733_807d08d62b.jpg"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </a>
                        <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
                          <div>
                            <a
                              className="block px-3"
                              href="/duoc-my-pham/nacurgo-12ml-2937.html"
                            >
                              <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]" />
                              <h3 className="overflow-hidden text-gray-10 text-base font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                                Dung dịch xịt Nacurgo màng sinh học bảo vệ, tái
                                tạo da tổn thương (100 lần xịt)
                              </h3>
                            </a>
                            <div className="px-3">
                              <div className="mb-1">
                                <div className="text-blue-5">
                                  <span className="font-semibold">
                                    119.000đ
                                  </span>
                                  <span className="text-label2"> / Chai</span>
                                </div>
                              </div>
                              <p className="w-fit rounded-lg bg-layer-gray px-2 py-1 text-caption font-medium text-text-secondary line-clamp-2 md:text-caption2">
                                Chai
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 px-3">
                            <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                              Chọn mua
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles_embla__slide__JiX50">
                      <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-5 flex-col">
                        <a
                          className="px-3 block pt-3"
                          href="/duoc-my-pham/ticarlox-10g-kem-tri-va-lam-mo-seo-loi-15858.html"
                        >
                          <div className="mb-1 shrink-0 text-center">
                            <img
                              alt="Kem Ticarlox trị và làm mờ sẹo lồi (10g)"
                              loading="lazy"
                              width={140}
                              height={140}
                              decoding="async"
                              data-nimg={1}
                              className="inline-block h-auto w-[140px] md:w-[160px]"
                              sizes="(min-width: 769px) 160px, 140px"
                              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG 2560w"
                              src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00013789_ticarlox_10g_1496_62ae_large_b6dcd2bc6d.JPG"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </a>
                        <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
                          <div>
                            <a
                              className="block px-3"
                              href="/duoc-my-pham/ticarlox-10g-kem-tri-va-lam-mo-seo-loi-15858.html"
                            >
                              <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]" />
                              <h3 className="overflow-hidden text-gray-10 text-base font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                                Kem Ticarlox trị và làm mờ sẹo lồi (10g)
                              </h3>
                            </a>
                            <div className="px-3">
                              <div className="mb-1">
                                <div className="text-blue-5">
                                  <span className="font-semibold">50.000đ</span>
                                  <span className="text-label2"> / Tuýp</span>
                                </div>
                              </div>
                              <p className="w-fit rounded-lg bg-layer-gray px-2 py-1 text-caption font-medium text-text-secondary line-clamp-2 md:text-caption2">
                                Tuýp
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 px-3">
                            <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                              Chọn mua
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles_embla__slide__JiX50">
                      <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-5 flex-col">
                        <a
                          className="px-3 block pt-3"
                          href="/duoc-my-pham/thai-duong-kem-nghe-td-20g-16436.html"
                        >
                          <div className="mb-1 shrink-0 text-center">
                            <img
                              alt="Kem nghệ và vitamin Thái Dương Nano Bạc dưỡng da, nhanh liền sẹo, mờ vết thâm, nám (20g)"
                              loading="lazy"
                              width={140}
                              height={140}
                              decoding="async"
                              data-nimg={1}
                              className="inline-block h-auto w-[140px] md:w-[160px]"
                              sizes="(min-width: 769px) 160px, 140px"
                              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png 2560w"
                              src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00010455_thai_duong_kem_nghe_td_20g_7536_5c87_large_099ff3432a.png"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </a>
                        <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
                          <div>
                            <a
                              className="block px-3"
                              href="/duoc-my-pham/thai-duong-kem-nghe-td-20g-16436.html"
                            >
                              <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]" />
                              <h3 className="overflow-hidden text-gray-10 text-base font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                                Kem nghệ và vitamin Thái Dương Nano Bạc dưỡng
                                da, nhanh liền sẹo, mờ vết thâm, nám (20g)
                              </h3>
                            </a>
                            <div className="px-3">
                              <div className="mb-1">
                                <div className="text-blue-5">
                                  <span className="font-semibold">18.000đ</span>
                                  <span className="text-label2"> / Tuýp</span>
                                </div>
                              </div>
                              <p className="w-fit rounded-lg bg-layer-gray px-2 py-1 text-caption font-medium text-text-secondary line-clamp-2 md:text-caption2">
                                Tuýp
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 px-3">
                            <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                              Chọn mua
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles_embla__slide__JiX50">
                      <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-5 flex-col">
                        <a
                          className="px-3 block pt-3"
                          href="/duoc-my-pham/yoosun-rau-ma-25g-16722.html"
                        >
                          <div className="mb-1 shrink-0 text-center">
                            <img
                              alt="Kem bôi da Yoosun rau má Đại Bắc ngừa mụn, mát da, tránh sẹo (25g)"
                              loading="lazy"
                              width={140}
                              height={140}
                              decoding="async"
                              data-nimg={1}
                              className="inline-block h-auto w-[140px] md:w-[160px]"
                              sizes="(min-width: 769px) 160px, 140px"
                              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg 2560w"
                              src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09861_c461e5b631.jpg"
                              style={{ color: "transparent" }}
                            />
                          </div>
                        </a>
                        <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
                          <div>
                            <a
                              className="block px-3"
                              href="/duoc-my-pham/yoosun-rau-ma-25g-16722.html"
                            >
                              <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]" />
                              <h3 className="overflow-hidden text-gray-10 text-base font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                                Kem bôi da Yoosun rau má Đại Bắc ngừa mụn, mát
                                da, tránh sẹo (25g)
                              </h3>
                            </a>
                            <div className="px-3">
                              <div className="mb-1">
                                <div className="text-blue-5">
                                  <span className="font-semibold">30.000đ</span>
                                  <span className="text-label2"> / Tuýp</span>
                                </div>
                              </div>
                              <p className="w-fit rounded-lg bg-layer-gray px-2 py-1 text-caption font-medium text-text-secondary line-clamp-2 md:text-caption2">
                                Tuýp
                              </p>
                            </div>
                          </div>
                          <div className="mt-4 px-3">
                            <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                              Chọn mua
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="absolute top-[50%] right-0 hidden translate-x-[50%] -translate-y-[50%] cursor-pointer items-center justify-center rounded-full bg-white transition-all md:flex md:border md:hover:border-text-focus h-10 w-10"
                  style={{
                    boxShadow:
                      "rgba(0, 39, 102, 0.1) 0px 0px 8px -2px, rgba(0, 39, 102, 0.06) 0px 0px 4px -2px",
                  }}
                >
                  <svg
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-text-focus"
                  >
                    <path
                      d="M9.25383 4.29289C8.86331 4.68342 8.86331 5.31658 9.25383 5.70711L15.5467 12L9.25383 18.2929C8.86331 18.6834 8.86331 19.3166 9.25383 19.7071C9.64436 20.0976 10.2775 20.0976 10.668 19.7071L17.668 12.7071C18.0586 12.3166 18.0586 11.6834 17.668 11.2929L10.668 4.29289C10.2775 3.90237 9.64435 3.90237 9.25383 4.29289Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          data-lcpr="prr-id-product-detail-faq"
          className="p-4 bg-white rounded-none md:rounded-xl"
        >
          <h2 className="text-heading3 mb-4 font-semibold">
            Câu hỏi thường gặp
          </h2>
          <ul>
            <li className="border-divider-1pt border-t py-4 first:border-0 first:pt-0 last:pb-0">
              <div
                className="hover:cursor-pointer -my-4 flex cursor-pointer items-center py-4"
                data-state="closed"
              >
                <svg
                  width={24}
                  className="text-icon-secondary mr-1 inline-block shrink-0"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM24.25 32C23.4216 32 22.75 32.6716 22.75 33.5C22.75 34.3284 23.4216 35 24.25 35C25.0784 35 25.75 34.3284 25.75 33.5C25.75 32.6716 25.0784 32 24.25 32ZM24.25 13C20.8864 13 18 15.8846 18 19.25C18 19.9404 18.5596 20.5 19.25 20.5C19.8541 20.5 20.358 20.0715 20.4746 19.5019L20.4935 19.3778L20.5055 19.0587C20.6142 17.1536 22.3307 15.5 24.25 15.5C26.2346 15.5 28 17.2634 28 19.25C28.0011 20.437 27.5794 21.29 26.3804 22.6455L26.1734 22.8762L25.1461 23.9739C23.5147 25.7467 22.8251 26.9703 22.8379 28.7589C22.8428 29.4493 23.4065 30.0049 24.0968 30.0001C24.6577 29.996 25.1297 29.6231 25.2843 29.1132L25.3143 28.9932L25.3323 28.8689L25.3379 28.7411L25.3409 28.5793C25.377 27.7786 25.7351 27.0936 26.6221 26.0726L26.8066 25.8638L27.8216 24.7772C29.7314 22.7192 30.502 21.3691 30.5 19.2488C30.5 15.8821 27.6147 13 24.25 13Z"
                    fill="currentColor"
                  />
                </svg>
                <h3 className="text-base md:te text-text-primary flex-1 font-medium">
                  Nên dùng mỹ phẩm hay dược mỹ phẩm?
                </h3>
                <svg
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-icon-secondary ml-4 w-5 shrink-0 duration-300 md:w-6"
                >
                  <path
                    d="M5.25383 8.29289C5.64435 7.90237 6.27752 7.90237 6.66804 8.29289L12.9609 14.5858L19.2538 8.29289C19.6444 7.90237 20.2775 7.90237 20.668 8.29289C21.0586 8.68342 21.0586 9.31658 20.668 9.70711L13.668 16.7071C13.2775 17.0976 12.6444 17.0976 12.2538 16.7071L5.25383 9.70711C4.86331 9.31658 4.86331 8.68342 5.25383 8.29289Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                className="Collapse_collapse-wrapper__FiMUw text-base md:te text-text-primary invisible"
                data-state="closed"
              >
                <div className="Collapse_collapse-inner__56IHT">
                  <div className="pt-2 faq_faq__SjzoK">
                    <p>
                      Tùy vào tình trạng da hiện tại mà bạn lựa chọn để có hiệu
                      quả tốt hơn. Mỹ phẩm trang điểm&nbsp; không thể thẩm thấu
                      qua khu vực giữa lớp biểu bì và hạ bì, không thể trực tiếp
                      điều trị một căn bệnh da liễu nào. Tuy nhiên, mỹ phẩm có
                      thể duy trì, bảo vệ, làm sạch và giúp nâng tông trên bề
                      mặt của da. Ngược lại, dược mỹ phẩm thì có thể, từ
                      đó&nbsp;nó phát huy công dụng điều trị hiệu quả các vấn đề
                      về da như dược mỹ phẩm{" "}
                      <a href="https://nhathuoclongchau.com.vn/duoc-my-pham/cham-soc-da-mat">
                        chăm sóc da mặt
                      </a>{" "}
                      <a href="https://nhathuoclongchau.com.vn/duoc-my-pham/tri-mun">
                        trị mụn
                      </a>
                      , trị nám hay{" "}
                      <a href="https://nhathuoclongchau.com.vn/duoc-my-pham/cham-soc-da-chuyen-sau?loai-da=tan-nhang">
                        tàn nhang
                      </a>
                      ,..
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li className="border-divider-1pt border-t py-4 first:border-0 first:pt-0 last:pb-0">
              <div
                className="hover:cursor-pointer -my-4 flex cursor-pointer items-center py-4"
                data-state="closed"
              >
                <svg
                  width={24}
                  className="text-icon-secondary mr-1 inline-block shrink-0"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM24.25 32C23.4216 32 22.75 32.6716 22.75 33.5C22.75 34.3284 23.4216 35 24.25 35C25.0784 35 25.75 34.3284 25.75 33.5C25.75 32.6716 25.0784 32 24.25 32ZM24.25 13C20.8864 13 18 15.8846 18 19.25C18 19.9404 18.5596 20.5 19.25 20.5C19.8541 20.5 20.358 20.0715 20.4746 19.5019L20.4935 19.3778L20.5055 19.0587C20.6142 17.1536 22.3307 15.5 24.25 15.5C26.2346 15.5 28 17.2634 28 19.25C28.0011 20.437 27.5794 21.29 26.3804 22.6455L26.1734 22.8762L25.1461 23.9739C23.5147 25.7467 22.8251 26.9703 22.8379 28.7589C22.8428 29.4493 23.4065 30.0049 24.0968 30.0001C24.6577 29.996 25.1297 29.6231 25.2843 29.1132L25.3143 28.9932L25.3323 28.8689L25.3379 28.7411L25.3409 28.5793C25.377 27.7786 25.7351 27.0936 26.6221 26.0726L26.8066 25.8638L27.8216 24.7772C29.7314 22.7192 30.502 21.3691 30.5 19.2488C30.5 15.8821 27.6147 13 24.25 13Z"
                    fill="currentColor"
                  />
                </svg>
                <h3 className="text-base md:te text-text-primary flex-1 font-medium">
                  Tại sao phải chăm sóc da bằng dược mỹ phẩm?
                </h3>
                <svg
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-icon-secondary ml-4 w-5 shrink-0 duration-300 md:w-6"
                >
                  <path
                    d="M5.25383 8.29289C5.64435 7.90237 6.27752 7.90237 6.66804 8.29289L12.9609 14.5858L19.2538 8.29289C19.6444 7.90237 20.2775 7.90237 20.668 8.29289C21.0586 8.68342 21.0586 9.31658 20.668 9.70711L13.668 16.7071C13.2775 17.0976 12.6444 17.0976 12.2538 16.7071L5.25383 9.70711C4.86331 9.31658 4.86331 8.68342 5.25383 8.29289Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                className="Collapse_collapse-wrapper__FiMUw text-base md:te text-text-primary invisible"
                data-state="closed"
              >
                <div className="Collapse_collapse-inner__56IHT">
                  <div className="pt-2 faq_faq__SjzoK">
                    <p>
                      Sản phẩm từ dược mỹ phẩm vừa có tác dụng làm đẹp vừa có
                      khả năng điều chỉnh và phục hồi các vấn đề chuyên sâu về
                      da. Cụ thể như lão hóa, sạm nám, viêm nhiễm,{" "}
                      <a href="https://nhathuoclongchau.com.vn/duoc-my-pham/tri-mun">
                        mụn
                      </a>{" "}
                      mà vẫn duy trì vẻ đẹp cho làn da an toàn. Dược mỹ phẩm
                      cũng gồm các dòng sản phẩm giống{" "}
                      <a href="https://nhathuoclongchau.com.vn/my-pham-trang-diem">
                        mỹ phẩm trang điểm
                      </a>{" "}
                      như: dòng trang điểm,{" "}
                      <a href="https://nhathuoclongchau.com.vn/duoc-my-pham/cham-soc-da-mat">
                        chăm sóc da mặt
                      </a>
                      , đặc trị và dưỡng da,{" "}
                      <a href="https://nhathuoclongchau.com.vn/duoc-my-pham/cham-soc-toc-da-dau">
                        chăm sóc tóc- da đầu
                      </a>
                      , chăm sóc&nbsp;móng,…
                    </p>
                    <p>&nbsp;</p>
                  </div>
                </div>
              </div>
            </li>
            <li className="border-divider-1pt border-t py-4 first:border-0 first:pt-0 last:pb-0">
              <div
                className="hover:cursor-pointer -my-4 flex cursor-pointer items-center py-4"
                data-state="closed"
              >
                <svg
                  width={24}
                  className="text-icon-secondary mr-1 inline-block shrink-0"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 4C35.0457 4 44 12.9543 44 24C44 35.0457 35.0457 44 24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4ZM24.25 32C23.4216 32 22.75 32.6716 22.75 33.5C22.75 34.3284 23.4216 35 24.25 35C25.0784 35 25.75 34.3284 25.75 33.5C25.75 32.6716 25.0784 32 24.25 32ZM24.25 13C20.8864 13 18 15.8846 18 19.25C18 19.9404 18.5596 20.5 19.25 20.5C19.8541 20.5 20.358 20.0715 20.4746 19.5019L20.4935 19.3778L20.5055 19.0587C20.6142 17.1536 22.3307 15.5 24.25 15.5C26.2346 15.5 28 17.2634 28 19.25C28.0011 20.437 27.5794 21.29 26.3804 22.6455L26.1734 22.8762L25.1461 23.9739C23.5147 25.7467 22.8251 26.9703 22.8379 28.7589C22.8428 29.4493 23.4065 30.0049 24.0968 30.0001C24.6577 29.996 25.1297 29.6231 25.2843 29.1132L25.3143 28.9932L25.3323 28.8689L25.3379 28.7411L25.3409 28.5793C25.377 27.7786 25.7351 27.0936 26.6221 26.0726L26.8066 25.8638L27.8216 24.7772C29.7314 22.7192 30.502 21.3691 30.5 19.2488C30.5 15.8821 27.6147 13 24.25 13Z"
                    fill="currentColor"
                  />
                </svg>
                <h3 className="text-base md:te text-text-primary flex-1 font-medium">
                  Dược mỹ phẩm là gì?
                </h3>
                <svg
                  viewBox="0 0 25 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-icon-secondary ml-4 w-5 shrink-0 duration-300 md:w-6"
                >
                  <path
                    d="M5.25383 8.29289C5.64435 7.90237 6.27752 7.90237 6.66804 8.29289L12.9609 14.5858L19.2538 8.29289C19.6444 7.90237 20.2775 7.90237 20.668 8.29289C21.0586 8.68342 21.0586 9.31658 20.668 9.70711L13.668 16.7071C13.2775 17.0976 12.6444 17.0976 12.2538 16.7071L5.25383 9.70711C4.86331 9.31658 4.86331 8.68342 5.25383 8.29289Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div
                className="Collapse_collapse-wrapper__FiMUw text-base md:te text-text-primary invisible"
                data-state="closed"
              >
                <div className="Collapse_collapse-inner__56IHT">
                  <div className="pt-2 faq_faq__SjzoK">
                    <p>
                      Dược mỹ phẩm là sản phẩm dinh dưỡng và làm đẹp, được
                      nghiên cứu bào chế và thử nghiệm theo các quy định nghiêm
                      ngặt như là một dược phẩm. Sản phẩm có khả năng điều chỉnh
                      và phục hồi các vấn đề chuyên sâu về da như lão hóa, sạm
                      nám, viêm nhiễm,{" "}
                      <a href="https://nhathuoclongchau.com.vn/duoc-my-pham/tri-mun">
                        mụn
                      </a>{" "}
                      mà vẫn duy trì vẻ đẹp cho làn da.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          data-lcpr="prr-id-product-detail-preview"
          className="bg-white p-4 md:rounded-xl"
        >
          <div className="lc-preview">
            <div className="mb-4 border-b pb-4">
              <div className="title">
                <h2 className="text-heading3 text-text-primary mr-1 inline-block font-bold">
                  Đánh giá sản phẩm{" "}
                  <span className="te text-text-tertiary font-normal">
                    (40 đánh giá)
                  </span>
                </h2>
              </div>
            </div>
            <div className="mb-4 border-b pb-4 md:flex">
              <div className="md:mr-8">
                <div className="mb-4 flex items-center justify-between md:mb-0 md:block">
                  <div>
                    <p className="text-text-secondary te font-semibold">
                      Trung bình
                    </p>
                    <p className="md:text-title1 text-title2 text-text-primary flex items-center font-semibold">
                      4.7
                      <svg
                        width={24}
                        height={24}
                        className="ml-2"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.803 6.08569C22.7017 4.26474 25.2983 4.26473 26.197 6.08568L31.0493 15.9177L41.8996 17.4943C43.9091 17.7863 44.7115 20.2558 43.2574 21.6732L35.4061 29.3264L37.2595 40.1327C37.6028 42.1342 35.5021 43.6604 33.7047 42.7155L24 37.6134L14.2952 42.7155C12.4978 43.6604 10.3971 42.1342 10.7404 40.1327L12.5938 29.3264L4.74255 21.6732C3.28843 20.2558 4.09083 17.7863 6.10037 17.4943L16.9506 15.9177L21.803 6.08569Z"
                          fill="url(#paint0_linear_4531_177138)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_4531_177138"
                            x1="43.9999"
                            y1="43.0023"
                            x2="5.75441"
                            y2="3.04089"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#F79009" />
                            <stop offset={1} stopColor="#FDB022" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </p>
                  </div>
                  <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[12px] px-[24px] h-[48px] rounded-[42px] text-label1">
                    Gửi đánh giá
                  </button>
                </div>
              </div>
              <div>
                <div className="mb-[6px] flex h-[18px] items-center gap-2">
                  <div className="rating">
                    <ul className="flex">
                      <li>
                        <label
                          htmlFor=":rq:1"
                          className="cursor-pointer text-[16px] text-[#F79009] pointer-events-none"
                        >
                          <input
                            id=":rq:1"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor=":rq:2"
                          className="cursor-pointer text-[16px] text-[#F79009] pointer-events-none"
                        >
                          <input
                            id=":rq:2"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor=":rq:3"
                          className="cursor-pointer text-[16px] text-[#F79009] pointer-events-none"
                        >
                          <input
                            id=":rq:3"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor=":rq:4"
                          className="cursor-pointer text-[16px] text-[#F79009] pointer-events-none"
                        >
                          <input
                            id=":rq:4"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor=":rq:5"
                          className="cursor-pointer text-[16px] text-[#F79009] pointer-events-none"
                        >
                          <input
                            id=":rq:5"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start bg-gray-3 font-normal overflow-hidden rounded-lg h-2 text-caption w-[231px]">
                      <div
                        className="flex justify-end items-center h-full text-white rounded-lg bgi-semantic-warning-gradient"
                        style={{ width: "87.5%" }}
                      />
                    </div>
                  </div>
                  <span className="text-caption2 text-text-primary">35</span>
                </div>
                <div className="mb-[6px] flex h-[18px] items-center gap-2">
                  <div className="rating">
                    <ul className="flex">
                      <li>
                        <label
                          htmlFor=":rr:1"
                          className="cursor-pointer text-[16px] text-[#F79009] pointer-events-none"
                        >
                          <input
                            id=":rr:1"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor=":rr:2"
                          className="cursor-pointer text-[16px] text-[#F79009] pointer-events-none"
                        >
                          <input
                            id=":rr:2"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor=":rr:3"
                          className="cursor-pointer text-[16px] text-[#F79009] pointer-events-none"
                        >
                          <input
                            id=":rr:3"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor=":rr:4"
                          className="cursor-pointer text-[16px] text-[#F79009] pointer-events-none"
                        >
                          <input
                            id=":rr:4"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor=":rr:5"
                          className="cursor-pointer text-[16px] text-text-tertiary pointer-events-none"
                        >
                          <input
                            id=":rr:5"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start bg-gray-3 font-normal overflow-hidden rounded-lg h-2 text-caption w-[231px]">
                      <div
                        className="flex justify-end items-center h-full text-white rounded-lg bgi-semantic-warning-gradient"
                        style={{ width: "5%" }}
                      />
                    </div>
                  </div>
                  <span className="text-caption2 text-text-primary">2</span>
                </div>
                <div className="mb-[6px] flex h-[18px] items-center gap-2">
                  <div className="rating">
                    <ul className="flex">
                      <li>
                        <label
                          htmlFor=":rs:1"
                          className="cursor-pointer text-[16px] text-[#F79009] pointer-events-none"
                        >
                          <input
                            id=":rs:1"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor=":rs:2"
                          className="cursor-pointer text-[16px] text-[#F79009] pointer-events-none"
                        >
                          <input
                            id=":rs:2"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor=":rs:3"
                          className="cursor-pointer text-[16px] text-[#F79009] pointer-events-none"
                        >
                          <input
                            id=":rs:3"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor=":rs:4"
                          className="cursor-pointer text-[16px] text-text-tertiary pointer-events-none"
                        >
                          <input
                            id=":rs:4"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor=":rs:5"
                          className="cursor-pointer text-[16px] text-text-tertiary pointer-events-none"
                        >
                          <input
                            id=":rs:5"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start bg-gray-3 font-normal overflow-hidden rounded-lg h-2 text-caption w-[231px]">
                      <div
                        className="flex justify-end items-center h-full text-white rounded-lg bgi-semantic-warning-gradient"
                        style={{ width: "5%" }}
                      />
                    </div>
                  </div>
                  <span className="text-caption2 text-text-primary">2</span>
                </div>
                <div className="mb-[6px] flex h-[18px] items-center gap-2">
                  <div className="rating">
                    <ul className="flex">
                      <li>
                        <label
                          htmlFor=":rt:1"
                          className="cursor-pointer text-[16px] text-[#F79009] pointer-events-none"
                        >
                          <input
                            id=":rt:1"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor=":rt:2"
                          className="cursor-pointer text-[16px] text-[#F79009] pointer-events-none"
                        >
                          <input
                            id=":rt:2"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor=":rt:3"
                          className="cursor-pointer text-[16px] text-text-tertiary pointer-events-none"
                        >
                          <input
                            id=":rt:3"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor=":rt:4"
                          className="cursor-pointer text-[16px] text-text-tertiary pointer-events-none"
                        >
                          <input
                            id=":rt:4"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor=":rt:5"
                          className="cursor-pointer text-[16px] text-text-tertiary pointer-events-none"
                        >
                          <input
                            id=":rt:5"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start bg-gray-3 font-normal overflow-hidden rounded-lg h-2 text-caption w-[231px]">
                      <div
                        className="flex justify-end items-center h-full text-white rounded-lg bgi-semantic-warning-gradient"
                        style={{ width: "0%" }}
                      />
                    </div>
                  </div>
                  <span className="text-caption2 text-text-primary">0</span>
                </div>
                <div className="mb-[6px] flex h-[18px] items-center gap-2">
                  <div className="rating">
                    <ul className="flex">
                      <li>
                        <label
                          htmlFor=":ru:1"
                          className="cursor-pointer text-[16px] text-[#F79009] pointer-events-none"
                        >
                          <input
                            id=":ru:1"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor=":ru:2"
                          className="cursor-pointer text-[16px] text-text-tertiary pointer-events-none"
                        >
                          <input
                            id=":ru:2"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor=":ru:3"
                          className="cursor-pointer text-[16px] text-text-tertiary pointer-events-none"
                        >
                          <input
                            id=":ru:3"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor=":ru:4"
                          className="cursor-pointer text-[16px] text-text-tertiary pointer-events-none"
                        >
                          <input
                            id=":ru:4"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                      <li>
                        <label
                          htmlFor=":ru:5"
                          className="cursor-pointer text-[16px] text-text-tertiary pointer-events-none"
                        >
                          <input
                            id=":ru:5"
                            type="radio"
                            className="rating_rating-hidden__C_KvQ"
                          />
                          <span className="text-inherit transition-colors">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 16 16"
                              width={16}
                              height={16}
                              className="h-[1em] w-[1em]"
                            >
                              <path
                                fill="currentColor"
                                d="M7.194 2.102a.9.9 0 011.614 0l1.521 3.082 3.401.494a.9.9 0 01.5 1.535l-2.462 2.4.581 3.387a.9.9 0 01-1.306.948L8.001 12.35l-3.042 1.6a.9.9 0 01-1.306-.95l.58-3.387-2.46-2.399a.9.9 0 01.499-1.535l3.4-.494 1.522-3.082z"
                              />
                            </svg>
                          </span>
                        </label>
                      </li>
                    </ul>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start bg-gray-3 font-normal overflow-hidden rounded-lg h-2 text-caption w-[231px]">
                      <div
                        className="flex justify-end items-center h-full text-white rounded-lg bgi-semantic-warning-gradient"
                        style={{ width: "2.5%" }}
                      />
                    </div>
                  </div>
                  <span className="text-caption2 text-text-primary">1</span>
                </div>
              </div>
            </div>
            <div className="my-[12px] md:my-[16px]">
              <div className="flex flex-col justify-start gap-[8px] md:flex-row md:items-center md:gap-[16px]">
                <p className="md:te text-base text-text-secondary">Lọc theo:</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex justify-center items-center pl-3 pr-3 rounded-[50px] border ring-offset-background relative font-medium text-text-primary overflow-hidden cursor-pointer bg-white h-8 text-label2">
                    <span className="text-base text-text-secondary font-medium">
                      5 sao
                    </span>
                  </div>
                  <div className="inline-flex justify-center items-center pl-3 pr-3 rounded-[50px] border ring-offset-background relative font-medium text-text-primary overflow-hidden cursor-pointer bg-white h-8 text-label2">
                    <span className="text-base text-text-secondary font-medium">
                      4 sao
                    </span>
                  </div>
                  <div className="inline-flex justify-center items-center pl-3 pr-3 rounded-[50px] border ring-offset-background relative font-medium text-text-primary overflow-hidden cursor-pointer bg-white h-8 text-label2">
                    <span className="text-base text-text-secondary font-medium">
                      3 sao
                    </span>
                  </div>
                  <div className="inline-flex justify-center items-center pl-3 pr-3 rounded-[50px] border ring-offset-background relative font-medium text-text-primary overflow-hidden cursor-pointer bg-white h-8 text-label2">
                    <span className="text-base text-text-secondary font-medium">
                      2 sao
                    </span>
                  </div>
                  <div className="inline-flex justify-center items-center pl-3 pr-3 rounded-[50px] border ring-offset-background relative font-medium text-text-primary overflow-hidden cursor-pointer bg-white h-8 text-label2">
                    <span className="text-base text-text-secondary font-medium">
                      1 sao
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <div className="lc-comment__item relative pt-5">
                    <div className="comment_comment-branch__b5nbp" />
                    <div className="comment-block flex gap-[12px]">
                      <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
                        <div className="bg-layer-gray-4 inline-flex h-[44px] w-[44px] items-center justify-center rounded-full px-[10px] text-[20px] leading-5 text-white md:h-[48px] md:w-[48px]">
                          Q
                        </div>
                      </div>
                      <div className="content flex-1">
                        <p className="text-label2 md:te text-text-secondary mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
                          Quỳnh
                        </p>
                        <div className="score mt-[2px] flex items-center">
                          <span className="text-base md:te text-text-secondary mr-[6px] font-normal">
                            5
                          </span>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.803 6.08569C22.7017 4.26474 25.2983 4.26473 26.197 6.08568L31.0493 15.9177L41.8996 17.4943C43.9091 17.7863 44.7115 20.2558 43.2574 21.6732L35.4061 29.3264L37.2595 40.1327C37.6028 42.1342 35.5021 43.6604 33.7047 42.7155L24 37.6134L14.2952 42.7155C12.4978 43.6604 10.3971 42.1342 10.7404 40.1327L12.5938 29.3264L4.74255 21.6732C3.28843 20.2558 4.09083 17.7863 6.10037 17.4943L16.9506 15.9177L21.803 6.08569Z"
                              fill="url(#paint0_linear_4531_177138)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_4531_177138"
                                x1="43.9999"
                                y1="43.0023"
                                x2="5.75441"
                                y2="3.04089"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#F79009" />
                                <stop offset={1} stopColor="#FDB022" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="user-comment">
                          <span
                            className="md:text-label1 text-label2 font-normal"
                            style={{ wordBreak: "break-word" }}
                          >
                            cho em hỏi, thuốc có tác dụng trị sẹo lâu năm không
                            ạ?
                          </span>
                        </div>
                        <div className="comment-utils mt-[8px]">
                          <div className="flex items-center">
                            <span className="md:text-base text-caption text-text-tertiary font-medium">
                              2 ngày trước
                            </span>
                            <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                            <span className="md:text-base text-caption1 text-text-focus cursor-pointer font-medium">
                              Trả lời
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="lc-comment__item relative pt-5 pl-[40px] md:pl-[60px]">
                        <div className="comment_reply-branch__NKquM" />
                        <div className="comment-block flex gap-[12px]">
                          <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
                            <img
                              size={44}
                              className=" css-1f66ahq"
                              src="/static/images/avatar-moderator.svg"
                            />
                          </div>
                          <div className="content flex-1">
                            <p className="text-label2 md:te text-text-secondary mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
                              Nguyễn Minh Hằng
                              <span className="text-caption2 bg-layer-blue-1 text-text-focus md mt-[4px] rounded px-[4px] py-[2px] font-medium md:ml-2 md:mt-0">
                                Dược sĩ
                              </span>
                            </p>
                            <div className="user-comment">
                              <span
                                className="md:text-label1 text-label2 font-normal"
                                style={{ wordBreak: "break-word" }}
                              >
                                <p className="editor-paragraph" dir="ltr">
                                  <span>Chào bạn Quỳnh,</span>
                                </p>
                                <p className="editor-paragraph" dir="ltr">
                                  <span>
                                    Dạ sản phẩm &nbsp;có thể sử dụng ngay lập
                                    tức trên những vết sẹo cũ, mình có thể dùng
                                    liên tục từ 6 tháng để có hiệu quả trên sẹo
                                    cũ lâu năm ạ
                                  </span>
                                </p>
                                <p className="editor-paragraph" dir="ltr">
                                  <span>Nhà thuốc thông tin đến bạn.</span>
                                </p>
                                <p className="editor-paragraph" dir="ltr">
                                  <span>Thân mến!</span>
                                </p>
                              </span>
                            </div>
                            <div className="comment-utils mt-[8px]">
                              <div className="flex items-center">
                                <span className="md:text-base text-caption text-text-tertiary font-medium">
                                  2 ngày trước
                                </span>
                                <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                                <span className="md:text-base text-caption1 text-text-focus cursor-pointer font-medium">
                                  Trả lời
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="lc-comment__item relative pt-5">
                    <div className="comment_comment-branch__b5nbp" />
                    <div className="comment-block flex gap-[12px]">
                      <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
                        <div className="bg-layer-gray-4 inline-flex h-[44px] w-[44px] items-center justify-center rounded-full px-[10px] text-[20px] leading-5 text-white md:h-[48px] md:w-[48px]">
                          T
                        </div>
                      </div>
                      <div className="content flex-1">
                        <p className="text-label2 md:te text-text-secondary mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
                          Thu
                        </p>
                        <div className="score mt-[2px] flex items-center">
                          <span className="text-base md:te text-text-secondary mr-[6px] font-normal">
                            5
                          </span>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.803 6.08569C22.7017 4.26474 25.2983 4.26473 26.197 6.08568L31.0493 15.9177L41.8996 17.4943C43.9091 17.7863 44.7115 20.2558 43.2574 21.6732L35.4061 29.3264L37.2595 40.1327C37.6028 42.1342 35.5021 43.6604 33.7047 42.7155L24 37.6134L14.2952 42.7155C12.4978 43.6604 10.3971 42.1342 10.7404 40.1327L12.5938 29.3264L4.74255 21.6732C3.28843 20.2558 4.09083 17.7863 6.10037 17.4943L16.9506 15.9177L21.803 6.08569Z"
                              fill="url(#paint0_linear_4531_177138)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_4531_177138"
                                x1="43.9999"
                                y1="43.0023"
                                x2="5.75441"
                                y2="3.04089"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#F79009" />
                                <stop offset={1} stopColor="#FDB022" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="user-comment">
                          <span
                            className="md:text-label1 text-label2 font-normal"
                            style={{ wordBreak: "break-word" }}
                          >
                            Cho em hỏi vết sẹo trắng do cắt mí 6 tháng có dùng
                            loại này được không
                          </span>
                        </div>
                        <div className="comment-utils mt-[8px]">
                          <div className="flex items-center">
                            <span className="md:text-base text-caption text-text-tertiary font-medium">
                              6 ngày trước
                            </span>
                            <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                            <span className="md:text-base text-caption1 text-text-focus cursor-pointer font-medium">
                              Trả lời
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="lc-comment__item relative pt-5 pl-[40px] md:pl-[60px]">
                        <div className="comment_reply-branch__NKquM" />
                        <div className="comment-block flex gap-[12px]">
                          <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
                            <img
                              size={44}
                              className=" css-1f66ahq"
                              src="/static/images/avatar-moderator.svg"
                            />
                          </div>
                          <div className="content flex-1">
                            <p className="text-label2 md:te text-text-secondary mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
                              Lê Quang Đạo
                              <span className="text-caption2 bg-layer-blue-1 text-text-focus md mt-[4px] rounded px-[4px] py-[2px] font-medium md:ml-2 md:mt-0">
                                Dược sĩ
                              </span>
                            </p>
                            <div className="user-comment">
                              <span
                                className="md:text-label1 text-label2 font-normal"
                                style={{ wordBreak: "break-word" }}
                              >
                                <p className="editor-paragraph" dir="ltr">
                                  <span>Chào bạn Thu,</span>
                                </p>
                                <p className="editor-paragraph" dir="ltr">
                                  <span>
                                    Dạ Gel Scargel Natureplex cải thiện tính đàn
                                    hồi, cấu trúc và hình dạng của nhiều loại
                                    sẹo&nbsp;trong đó có sẹo do phẫu thuật,
                                    bỏng, vết cắt nên có thể hỗ trợ cho tình
                                    trạng sẹo của mình, tuy nhiên nếu sử dụng ở
                                    mí mắt mình nên cẩn thận tránh sản phẩm dính
                                    vào mắt ạ.
                                  </span>
                                </p>
                                <p className="editor-paragraph" dir="ltr">
                                  <span>Nhà thuốc thông tin đến bạn.</span>
                                </p>
                                <p className="editor-paragraph" dir="ltr">
                                  <span>Thân mến!</span>
                                </p>
                              </span>
                            </div>
                            <div className="comment-utils mt-[8px]">
                              <div className="flex items-center">
                                <span className="md:text-base text-caption text-text-tertiary font-medium">
                                  6 ngày trước
                                </span>
                                <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                                <span className="md:text-base text-caption1 text-text-focus cursor-pointer font-medium">
                                  Trả lời
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="lc-comment__item relative pt-5">
                    <div className="comment_comment-branch__b5nbp" />
                    <div className="comment-block flex gap-[12px]">
                      <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
                        <div className="bg-layer-gray-4 inline-flex h-[44px] w-[44px] items-center justify-center rounded-full px-[10px] text-[20px] leading-5 text-white md:h-[48px] md:w-[48px]">
                          DD
                        </div>
                      </div>
                      <div className="content flex-1">
                        <p className="text-label2 md:te text-text-secondary mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
                          BÉ Diễm Đẹp
                        </p>
                        <div className="score mt-[2px] flex items-center">
                          <span className="text-base md:te text-text-secondary mr-[6px] font-normal">
                            5
                          </span>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.803 6.08569C22.7017 4.26474 25.2983 4.26473 26.197 6.08568L31.0493 15.9177L41.8996 17.4943C43.9091 17.7863 44.7115 20.2558 43.2574 21.6732L35.4061 29.3264L37.2595 40.1327C37.6028 42.1342 35.5021 43.6604 33.7047 42.7155L24 37.6134L14.2952 42.7155C12.4978 43.6604 10.3971 42.1342 10.7404 40.1327L12.5938 29.3264L4.74255 21.6732C3.28843 20.2558 4.09083 17.7863 6.10037 17.4943L16.9506 15.9177L21.803 6.08569Z"
                              fill="url(#paint0_linear_4531_177138)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_4531_177138"
                                x1="43.9999"
                                y1="43.0023"
                                x2="5.75441"
                                y2="3.04089"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#F79009" />
                                <stop offset={1} stopColor="#FDB022" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="user-comment">
                          <span
                            className="md:text-label1 text-label2 font-normal"
                            style={{ wordBreak: "break-word" }}
                          >
                            sản phẩm có trị thâm mụn không ạ
                          </span>
                        </div>
                        <div className="comment-utils mt-[8px]">
                          <div className="flex items-center">
                            <span className="md:text-base text-caption text-text-tertiary font-medium">
                              13 ngày trước
                            </span>
                            <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                            <span className="md:text-base text-caption1 text-text-focus cursor-pointer font-medium">
                              Trả lời
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="lc-comment__item relative pt-5 pl-[40px] md:pl-[60px]">
                        <div className="comment_reply-branch__NKquM" />
                        <div className="comment-block flex gap-[12px]">
                          <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
                            <img
                              size={44}
                              className=" css-1f66ahq"
                              src="/static/images/avatar-moderator.svg"
                            />
                          </div>
                          <div className="content flex-1">
                            <p className="text-label2 md:te text-text-secondary mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
                              Trần Thu Phương
                              <span className="text-caption2 bg-layer-blue-1 text-text-focus md mt-[4px] rounded px-[4px] py-[2px] font-medium md:ml-2 md:mt-0">
                                Dược sĩ
                              </span>
                            </p>
                            <div className="user-comment">
                              <span
                                className="md:text-label1 text-label2 font-normal"
                                style={{ wordBreak: "break-word" }}
                              >
                                <p className="editor-paragraph" dir="ltr">
                                  <span>Chào bạn Bé Diễm Đẹp,</span>
                                  <br />
                                  <span>
                                    Dạ sản phẩm có tác dụng trị sẹo và thâm do
                                    mụn ạ.
                                  </span>
                                  <br />
                                  <span>Nhà thuốc thông tin đến bạn.</span>
                                  <br />
                                  <span>Thân mến!</span>
                                </p>
                              </span>
                            </div>
                            <div className="comment-utils mt-[8px]">
                              <div className="flex items-center">
                                <span className="md:text-base text-caption text-text-tertiary font-medium">
                                  13 ngày trước
                                </span>
                                <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                                <span className="md:text-base text-caption1 text-text-focus cursor-pointer font-medium">
                                  Trả lời
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="lc-comment__item relative pt-5">
                    <div className="comment_comment-branch__b5nbp" />
                    <div className="comment-block flex gap-[12px]">
                      <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
                        <div className="bg-layer-gray-4 inline-flex h-[44px] w-[44px] items-center justify-center rounded-full px-[10px] text-[20px] leading-5 text-white md:h-[48px] md:w-[48px]">
                          A
                        </div>
                      </div>
                      <div className="content flex-1">
                        <p className="text-label2 md:te text-text-secondary mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
                          A
                        </p>
                        <div className="score mt-[2px] flex items-center">
                          <span className="text-base md:te text-text-secondary mr-[6px] font-normal">
                            5
                          </span>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.803 6.08569C22.7017 4.26474 25.2983 4.26473 26.197 6.08568L31.0493 15.9177L41.8996 17.4943C43.9091 17.7863 44.7115 20.2558 43.2574 21.6732L35.4061 29.3264L37.2595 40.1327C37.6028 42.1342 35.5021 43.6604 33.7047 42.7155L24 37.6134L14.2952 42.7155C12.4978 43.6604 10.3971 42.1342 10.7404 40.1327L12.5938 29.3264L4.74255 21.6732C3.28843 20.2558 4.09083 17.7863 6.10037 17.4943L16.9506 15.9177L21.803 6.08569Z"
                              fill="url(#paint0_linear_4531_177138)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_4531_177138"
                                x1="43.9999"
                                y1="43.0023"
                                x2="5.75441"
                                y2="3.04089"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#F79009" />
                                <stop offset={1} stopColor="#FDB022" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="user-comment">
                          <span
                            className="md:text-label1 text-label2 font-normal"
                            style={{ wordBreak: "break-word" }}
                          >
                            Long Châu địa chỉ 74 Tô Ngọc Vân, Linh Tây, Thủ Đức
                            còn hàng k ạ
                          </span>
                        </div>
                        <div className="comment-utils mt-[8px]">
                          <div className="flex items-center">
                            <span className="md:text-base text-caption text-text-tertiary font-medium">
                              14 ngày trước
                            </span>
                            <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                            <span className="md:text-base text-caption1 text-text-focus cursor-pointer font-medium">
                              Trả lời
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="lc-comment__item relative pt-5 pl-[40px] md:pl-[60px]">
                        <div className="comment_reply-branch__NKquM" />
                        <div className="comment-block flex gap-[12px]">
                          <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
                            <img
                              size={44}
                              className=" css-1f66ahq"
                              src="/static/images/avatar-moderator.svg"
                            />
                          </div>
                          <div className="content flex-1">
                            <p className="text-label2 md:te text-text-secondary mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
                              Cao Thị Linh Chi
                              <span className="text-caption2 bg-layer-blue-1 text-text-focus md mt-[4px] rounded px-[4px] py-[2px] font-medium md:ml-2 md:mt-0">
                                Dược sĩ
                              </span>
                            </p>
                            <div className="user-comment">
                              <span
                                className="md:text-label1 text-label2 font-normal"
                                style={{ wordBreak: "break-word" }}
                              >
                                <p className="editor-paragraph" dir="ltr">
                                  <span>Chào bạn A,</span>
                                </p>
                                <p className="editor-paragraph" dir="ltr">
                                  <span>
                                    Dạ sản phẩm còn hàng trên hệ thống ạ.
                                  </span>
                                </p>
                                <p className="editor-paragraph" dir="ltr">
                                  <span>
                                    Dạ sẽ có tư vấn viên nhà thuốc Long Châu
                                    liên hệ theo SĐT bạn đã để lại ạ.
                                  </span>
                                </p>
                                <p className="editor-paragraph" dir="ltr">
                                  <span>Thân mến!</span>
                                </p>
                              </span>
                            </div>
                            <div className="comment-utils mt-[8px]">
                              <div className="flex items-center">
                                <span className="md:text-base text-caption text-text-tertiary font-medium">
                                  14 ngày trước
                                </span>
                                <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                                <span className="md:text-base text-caption1 text-text-focus cursor-pointer font-medium">
                                  Trả lời
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="lc-comment__item relative pt-5">
                    <div className="comment_comment-branch__b5nbp" />
                    <div className="comment-block flex gap-[12px]">
                      <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
                        <div className="bg-layer-gray-4 inline-flex h-[44px] w-[44px] items-center justify-center rounded-full px-[10px] text-[20px] leading-5 text-white md:h-[48px] md:w-[48px]">
                          MQ
                        </div>
                      </div>
                      <div className="content flex-1">
                        <p className="text-label2 md:te text-text-secondary mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
                          Lê Minh Quân
                        </p>
                        <div className="score mt-[2px] flex items-center">
                          <span className="text-base md:te text-text-secondary mr-[6px] font-normal">
                            5
                          </span>
                          <svg
                            width={16}
                            height={16}
                            viewBox="0 0 48 48"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M21.803 6.08569C22.7017 4.26474 25.2983 4.26473 26.197 6.08568L31.0493 15.9177L41.8996 17.4943C43.9091 17.7863 44.7115 20.2558 43.2574 21.6732L35.4061 29.3264L37.2595 40.1327C37.6028 42.1342 35.5021 43.6604 33.7047 42.7155L24 37.6134L14.2952 42.7155C12.4978 43.6604 10.3971 42.1342 10.7404 40.1327L12.5938 29.3264L4.74255 21.6732C3.28843 20.2558 4.09083 17.7863 6.10037 17.4943L16.9506 15.9177L21.803 6.08569Z"
                              fill="url(#paint0_linear_4531_177138)"
                            />
                            <defs>
                              <linearGradient
                                id="paint0_linear_4531_177138"
                                x1="43.9999"
                                y1="43.0023"
                                x2="5.75441"
                                y2="3.04089"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#F79009" />
                                <stop offset={1} stopColor="#FDB022" />
                              </linearGradient>
                            </defs>
                          </svg>
                        </div>
                        <div className="user-comment">
                          <span
                            className="md:text-label1 text-label2 font-normal"
                            style={{ wordBreak: "break-word" }}
                          />
                        </div>
                        <div className="comment-utils mt-[8px]">
                          <div className="flex items-center">
                            <span className="md:text-base text-caption text-text-tertiary font-medium">
                              18 ngày trước
                            </span>
                            <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                            <span className="md:text-base text-caption1 text-text-focus cursor-pointer font-medium">
                              Trả lời
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="lc-comment__item relative pt-5 pl-[40px] md:pl-[60px]">
                        <div className="comment_reply-branch__NKquM" />
                        <div className="comment-block flex gap-[12px]">
                          <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
                            <img
                              size={44}
                              className=" css-1f66ahq"
                              src="/static/images/avatar-moderator.svg"
                            />
                          </div>
                          <div className="content flex-1">
                            <p className="text-label2 md:te text-text-secondary mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
                              Lữ Thị Anh Thư
                              <span className="text-caption2 bg-layer-blue-1 text-text-focus md mt-[4px] rounded px-[4px] py-[2px] font-medium md:ml-2 md:mt-0">
                                Dược sĩ
                              </span>
                            </p>
                            <div className="user-comment">
                              <span
                                className="md:text-label1 text-label2 font-normal"
                                style={{ wordBreak: "break-word" }}
                              >
                                <p className="editor-paragraph" dir="ltr">
                                  <span>Chào bạn Quân, </span>
                                </p>
                                <p className="editor-paragraph" dir="ltr">
                                  <span>
                                    Dạ rất cảm ơn tình cảm của bạn dành cho nhà
                                    thuốc FPT Long châu. Bất cứ bạn nào bạn cần
                                    hỗ trợ, vui lòng liên hệ tổng đài miễn phí
                                    18006928 để được tư vấn và đặt hàng.
                                  </span>
                                </p>
                                <p className="editor-paragraph" dir="ltr">
                                  <span>Thân mến!</span>
                                </p>
                              </span>
                            </div>
                            <div className="comment-utils mt-[8px]">
                              <div className="flex items-center">
                                <span className="md:text-base text-caption text-text-tertiary font-medium">
                                  18 ngày trước
                                </span>
                                <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                                <span className="md:text-base text-caption1 text-text-focus cursor-pointer font-medium">
                                  Trả lời
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="py-4 text-center">
              <div className="inline-flex cursor-pointer items-center justify-center">
                <svg
                  width={20}
                  height={20}
                  className="text-text-primary mr-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.9516 10.4793C19.2944 10.8392 19.2806 11.4088 18.9207 11.7517L12.6201 17.7533C12.2725 18.0844 11.7262 18.0844 11.3786 17.7533L5.07808 11.7517C4.71818 11.4088 4.70433 10.8392 5.04716 10.4793C5.38999 10.1193 5.95967 10.1055 6.31958 10.4483L11.9994 15.8586L17.6792 10.4483C18.0391 10.1055 18.6088 10.1193 18.9516 10.4793ZM18.9516 5.67926C19.2944 6.03916 19.2806 6.60884 18.9207 6.95167L12.6201 12.9533C12.2725 13.2844 11.7262 13.2844 11.3786 12.9533L5.07808 6.95167C4.71818 6.60884 4.70433 6.03916 5.04716 5.67926C5.38999 5.31935 5.95967 5.3055 6.31958 5.64833L11.9994 11.0586L17.6792 5.64833C18.0391 5.30551 18.6088 5.31935 18.9516 5.67926Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-label2 text-text-primary font-medium">
                  Xem thêm 5 bình luận
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          data-lcpr="prr-id-product-detail-comment"
          className="bg-white p-4 md:rounded-xl"
        >
          <div className="lc-comment">
            <div className="mb-4 border-b pb-4">
              <div className="title">
                <h2 className="text-heading3 text-text-primary mr-1 inline-block font-bold">
                  Hỏi đáp{" "}
                  <span className="te text-text-tertiary font-normal">
                    (489 bình luận)
                  </span>
                </h2>
              </div>
              <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[12px] px-[24px] h-[48px] rounded-[42px] text-label1 mt-[12px] md:mt-[16px]">
                Gửi bình luận
              </button>
            </div>
            <div className="my-[12px] md:my-[16px]">
              <div className="flex flex-col justify-start gap-[8px] md:flex-row md:items-center md:gap-[16px]">
                <p className="md:te text-base text-text-secondary">Lọc theo:</p>
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex justify-center items-center rounded-[50px] ring-offset-background relative font-medium text-text-primary overflow-hidden cursor-pointer h-8 text-label2 border-blue-5 border border-solid bg-white pl-4 pr-6">
                    <span className="text-base font-medium text-text-focus">
                      Mới nhất
                    </span>
                    <div className="w-[0px] h-[0px] top-[6px] right-[10px] border-t-[26px] border-l-[26px] border-solid border-l-transparent border-t-blue-5 -mt-[6px] -mr-[12px] absolute">
                      <span className="absolute -top-[22px] right-[3px]">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          width={10}
                          height={10}
                          className="text-white"
                        >
                          <path
                            d="M8.5 16.5858L4.70711 12.7929C4.31658 12.4024 3.68342 12.4024 3.29289 12.7929C2.90237 13.1834 2.90237 13.8166 3.29289 14.2071L7.79289 18.7071C8.18342 19.0976 8.81658 19.0976 9.20711 18.7071L20.2071 7.70711C20.5976 7.31658 20.5976 6.68342 20.2071 6.29289C19.8166 5.90237 19.1834 5.90237 18.7929 6.29289L8.5 16.5858Z"
                            fill="currentColor"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="inline-flex justify-center items-center pl-3 pr-3 rounded-[50px] border ring-offset-background relative font-medium text-text-primary overflow-hidden cursor-pointer bg-white h-8 text-label2">
                    <span className="text-base text-text-secondary font-medium">
                      Cũ nhất
                    </span>
                  </div>
                  <div className="inline-flex justify-center items-center pl-3 pr-3 rounded-[50px] border ring-offset-background relative font-medium text-text-primary overflow-hidden cursor-pointer bg-white h-8 text-label2">
                    <span className="text-base text-text-secondary font-medium">
                      Hữu ích nhất
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <ul>
                <li>
                  <div className="lc-comment__item relative pt-5">
                    <div className="comment_comment-branch__b5nbp" />
                    <div className="comment-block flex gap-[12px]">
                      <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
                        <div className="bg-layer-gray-4 inline-flex h-[44px] w-[44px] items-center justify-center rounded-full px-[10px] text-[20px] leading-5 text-white md:h-[48px] md:w-[48px]">
                          P
                        </div>
                      </div>
                      <div className="content flex-1">
                        <p className="text-label2 md:te text-text-secondary mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
                          Phuc
                        </p>
                        <div className="user-comment">
                          <span
                            className="md:text-label1 text-label2 font-normal"
                            style={{ wordBreak: "break-word" }}
                          >
                            Sẹo té xe 1 tháng dùng gel này ổn không ạ
                          </span>
                        </div>
                        <div className="comment-utils mt-[8px]">
                          <div className="flex items-center">
                            <span className="md:text-base text-caption text-text-tertiary font-medium">
                              5 ngày trước
                            </span>
                            <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                            <p className="flex cursor-pointer items-center">
                              <svg
                                width={16}
                                className="text-text-tertiary"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M24.8438 3.86983C25.2714 2.7048 26.5795 1.4998 28.2274 1.98846C29.878 2.47791 30.9525 3.65655 31.5907 5.08549C32.2145 6.48192 32.4481 8.16085 32.4619 9.84983C32.484 12.5691 31.9361 15.5596 31.2216 18H36.2618C39.7238 18 42.238 21.2922 41.3266 24.6321L37.993 36.8488C36.6778 41.6687 31.7729 44.5732 26.9143 43.4092L12.8443 40.0386C10.2824 39.4249 8.25507 37.4698 7.54875 34.932L6.31514 30.4996C5.55638 27.7733 7.1056 25.0828 9.51969 23.9751C15.8443 21.0729 19.2274 16.8476 21.8774 11.4492C22.7172 9.73847 23.3316 8.04012 24.166 5.7336C24.3757 5.15403 24.5993 4.53605 24.8438 3.86983ZM27.4273 4.41363C27.3468 4.46525 27.2479 4.57548 27.1907 4.73122C26.9596 5.36096 26.7444 5.95617 26.5393 6.5235C25.6984 8.84928 25.0271 10.7063 24.1216 12.5508C21.291 18.317 17.5437 23.0437 10.5623 26.2473C9.10287 26.917 8.33964 28.4497 8.7236 29.8293L9.95721 34.2617C10.42 35.9244 11.7482 37.2053 13.4267 37.6074L27.4967 40.978C31.0422 41.8274 34.6214 39.7079 35.5811 36.1907L38.9148 23.974C39.3922 22.2245 38.0752 20.5 36.2618 20.5H29.4995C29.0917 20.5 28.7096 20.3011 28.4757 19.9671C28.2417 19.6332 28.1854 19.2061 28.3248 18.8228C29.2092 16.3908 29.9865 12.8877 29.9619 9.87015C29.9497 8.35879 29.7363 7.06379 29.3081 6.10507C28.8944 5.17885 28.3119 4.6211 27.5167 4.3853C27.5044 4.38164 27.5 4.3823 27.4951 4.38311C27.4873 4.38445 27.4639 4.39019 27.4273 4.41363Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <span className="text-base text-text-tertiary ml-1 font-medium">
                                Hữu ích
                              </span>
                            </p>
                            <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                            <span className="md:text-base text-caption1 text-text-focus cursor-pointer font-medium">
                              Trả lời
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="lc-comment__item relative pt-5 pl-[40px] md:pl-[60px]">
                        <div className="comment_reply-branch__NKquM" />
                        <div className="comment-block flex gap-[12px]">
                          <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
                            <img
                              size={44}
                              className=" css-1f66ahq"
                              src="/static/images/avatar-moderator.svg"
                            />
                          </div>
                          <div className="content flex-1">
                            <p className="text-label2 md:te text-text-secondary mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
                              Nguyễn Khánh Linh
                              <span className="text-caption2 bg-layer-blue-1 text-text-focus md mt-[4px] rounded px-[4px] py-[2px] font-medium md:ml-2 md:mt-0">
                                Dược sĩ
                              </span>
                            </p>
                            <div className="user-comment">
                              <span
                                className="md:text-label1 text-label2 font-normal"
                                style={{ wordBreak: "break-word" }}
                              >
                                <p className="editor-paragraph" dir="ltr">
                                  <span>Chào bạn Phuc,</span>
                                </p>
                                <p className="editor-paragraph" dir="ltr">
                                  <span>
                                    Dạ sản phẩm Gel Scargel Natureplex cải thiện
                                    tính đàn hồi, cấu trúc và hình dạng của
                                    nhiều loại sẹo. Mình có thể tham khảo sử
                                    dụng sản phẩm được ạ.
                                  </span>
                                </p>
                                <p className="editor-paragraph" dir="ltr">
                                  <span>Nhà thuốc thông tin đến bạn ạ.</span>
                                </p>
                                <p className="editor-paragraph" dir="ltr">
                                  <span>Thân mến!</span>
                                </p>
                              </span>
                            </div>
                            <div className="comment-utils mt-[8px]">
                              <div className="flex items-center">
                                <span className="md:text-base text-caption text-text-tertiary font-medium">
                                  5 ngày trước
                                </span>
                                <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                                <p className="flex cursor-pointer items-center">
                                  <svg
                                    width={16}
                                    className="text-text-tertiary"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M24.8438 3.86983C25.2714 2.7048 26.5795 1.4998 28.2274 1.98846C29.878 2.47791 30.9525 3.65655 31.5907 5.08549C32.2145 6.48192 32.4481 8.16085 32.4619 9.84983C32.484 12.5691 31.9361 15.5596 31.2216 18H36.2618C39.7238 18 42.238 21.2922 41.3266 24.6321L37.993 36.8488C36.6778 41.6687 31.7729 44.5732 26.9143 43.4092L12.8443 40.0386C10.2824 39.4249 8.25507 37.4698 7.54875 34.932L6.31514 30.4996C5.55638 27.7733 7.1056 25.0828 9.51969 23.9751C15.8443 21.0729 19.2274 16.8476 21.8774 11.4492C22.7172 9.73847 23.3316 8.04012 24.166 5.7336C24.3757 5.15403 24.5993 4.53605 24.8438 3.86983ZM27.4273 4.41363C27.3468 4.46525 27.2479 4.57548 27.1907 4.73122C26.9596 5.36096 26.7444 5.95617 26.5393 6.5235C25.6984 8.84928 25.0271 10.7063 24.1216 12.5508C21.291 18.317 17.5437 23.0437 10.5623 26.2473C9.10287 26.917 8.33964 28.4497 8.7236 29.8293L9.95721 34.2617C10.42 35.9244 11.7482 37.2053 13.4267 37.6074L27.4967 40.978C31.0422 41.8274 34.6214 39.7079 35.5811 36.1907L38.9148 23.974C39.3922 22.2245 38.0752 20.5 36.2618 20.5H29.4995C29.0917 20.5 28.7096 20.3011 28.4757 19.9671C28.2417 19.6332 28.1854 19.2061 28.3248 18.8228C29.2092 16.3908 29.9865 12.8877 29.9619 9.87015C29.9497 8.35879 29.7363 7.06379 29.3081 6.10507C28.8944 5.17885 28.3119 4.6211 27.5167 4.3853C27.5044 4.38164 27.5 4.3823 27.4951 4.38311C27.4873 4.38445 27.4639 4.39019 27.4273 4.41363Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                  <span className="text-base text-text-tertiary ml-1 font-medium">
                                    Hữu ích
                                  </span>
                                </p>
                                <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                                <span className="md:text-base text-caption1 text-text-focus cursor-pointer font-medium">
                                  Trả lời
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="lc-comment__item relative pt-5">
                    <div className="comment_comment-branch__b5nbp" />
                    <div className="comment-block flex gap-[12px]">
                      <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
                        <div className="bg-layer-gray-4 inline-flex h-[44px] w-[44px] items-center justify-center rounded-full px-[10px] text-[20px] leading-5 text-white md:h-[48px] md:w-[48px]">
                          Q
                        </div>
                      </div>
                      <div className="content flex-1">
                        <p className="text-label2 md:te text-text-secondary mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
                          Quân
                        </p>
                        <div className="user-comment">
                          <span
                            className="md:text-label1 text-label2 font-normal"
                            style={{ wordBreak: "break-word" }}
                          >
                            Sản phẩm này có bôi được khi tẩy nốt ruồi to không ạ
                          </span>
                        </div>
                        <div className="comment-utils mt-[8px]">
                          <div className="flex items-center">
                            <span className="md:text-base text-caption text-text-tertiary font-medium">
                              8 ngày trước
                            </span>
                            <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                            <p className="flex cursor-pointer items-center">
                              <svg
                                width={16}
                                className="text-text-tertiary"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M24.8438 3.86983C25.2714 2.7048 26.5795 1.4998 28.2274 1.98846C29.878 2.47791 30.9525 3.65655 31.5907 5.08549C32.2145 6.48192 32.4481 8.16085 32.4619 9.84983C32.484 12.5691 31.9361 15.5596 31.2216 18H36.2618C39.7238 18 42.238 21.2922 41.3266 24.6321L37.993 36.8488C36.6778 41.6687 31.7729 44.5732 26.9143 43.4092L12.8443 40.0386C10.2824 39.4249 8.25507 37.4698 7.54875 34.932L6.31514 30.4996C5.55638 27.7733 7.1056 25.0828 9.51969 23.9751C15.8443 21.0729 19.2274 16.8476 21.8774 11.4492C22.7172 9.73847 23.3316 8.04012 24.166 5.7336C24.3757 5.15403 24.5993 4.53605 24.8438 3.86983ZM27.4273 4.41363C27.3468 4.46525 27.2479 4.57548 27.1907 4.73122C26.9596 5.36096 26.7444 5.95617 26.5393 6.5235C25.6984 8.84928 25.0271 10.7063 24.1216 12.5508C21.291 18.317 17.5437 23.0437 10.5623 26.2473C9.10287 26.917 8.33964 28.4497 8.7236 29.8293L9.95721 34.2617C10.42 35.9244 11.7482 37.2053 13.4267 37.6074L27.4967 40.978C31.0422 41.8274 34.6214 39.7079 35.5811 36.1907L38.9148 23.974C39.3922 22.2245 38.0752 20.5 36.2618 20.5H29.4995C29.0917 20.5 28.7096 20.3011 28.4757 19.9671C28.2417 19.6332 28.1854 19.2061 28.3248 18.8228C29.2092 16.3908 29.9865 12.8877 29.9619 9.87015C29.9497 8.35879 29.7363 7.06379 29.3081 6.10507C28.8944 5.17885 28.3119 4.6211 27.5167 4.3853C27.5044 4.38164 27.5 4.3823 27.4951 4.38311C27.4873 4.38445 27.4639 4.39019 27.4273 4.41363Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <span className="text-base text-text-tertiary ml-1 font-medium">
                                Hữu ích
                              </span>
                            </p>
                            <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                            <span className="md:text-base text-caption1 text-text-focus cursor-pointer font-medium">
                              Trả lời
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="lc-comment__item relative pt-5 pl-[40px] md:pl-[60px]">
                        <div className="comment_reply-branch__NKquM" />
                        <div className="comment-block flex gap-[12px]">
                          <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
                            <img
                              size={44}
                              className=" css-1f66ahq"
                              src="/static/images/avatar-moderator.svg"
                            />
                          </div>
                          <div className="content flex-1">
                            <p className="text-label2 md:te text-text-secondary mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
                              Nguyễn Phương Lan
                              <span className="text-caption2 bg-layer-blue-1 text-text-focus md mt-[4px] rounded px-[4px] py-[2px] font-medium md:ml-2 md:mt-0">
                                Dược sĩ
                              </span>
                            </p>
                            <div className="user-comment">
                              <span
                                className="md:text-label1 text-label2 font-normal"
                                style={{ wordBreak: "break-word" }}
                              >
                                <p dir="ltr" className="editor-paragraph">
                                  <span>Chào bạn Quân,</span>
                                </p>
                                <p dir="ltr" className="editor-paragraph">
                                  <span>
                                    Dạ bạn có thể dùng sản phẩm giúp cải thiện
                                    tính đàn hồi, cấu trúc và hình dạng của sẹo,
                                    giúp sẹo mềm và trơn láng, ngăn ngừa sẹo đối
                                    với những vết thương mới lành ạ.
                                  </span>
                                </p>
                                <p dir="ltr" className="editor-paragraph">
                                  <span>Nhà thuốc thông tin đến bạn.</span>
                                </p>
                                <p dir="ltr" className="editor-paragraph">
                                  <span>Thân mến!</span>
                                </p>
                              </span>
                            </div>
                            <div className="comment-utils mt-[8px]">
                              <div className="flex items-center">
                                <span className="md:text-base text-caption text-text-tertiary font-medium">
                                  8 ngày trước
                                </span>
                                <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                                <p className="flex cursor-pointer items-center">
                                  <svg
                                    width={16}
                                    className="text-text-tertiary"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M24.8438 3.86983C25.2714 2.7048 26.5795 1.4998 28.2274 1.98846C29.878 2.47791 30.9525 3.65655 31.5907 5.08549C32.2145 6.48192 32.4481 8.16085 32.4619 9.84983C32.484 12.5691 31.9361 15.5596 31.2216 18H36.2618C39.7238 18 42.238 21.2922 41.3266 24.6321L37.993 36.8488C36.6778 41.6687 31.7729 44.5732 26.9143 43.4092L12.8443 40.0386C10.2824 39.4249 8.25507 37.4698 7.54875 34.932L6.31514 30.4996C5.55638 27.7733 7.1056 25.0828 9.51969 23.9751C15.8443 21.0729 19.2274 16.8476 21.8774 11.4492C22.7172 9.73847 23.3316 8.04012 24.166 5.7336C24.3757 5.15403 24.5993 4.53605 24.8438 3.86983ZM27.4273 4.41363C27.3468 4.46525 27.2479 4.57548 27.1907 4.73122C26.9596 5.36096 26.7444 5.95617 26.5393 6.5235C25.6984 8.84928 25.0271 10.7063 24.1216 12.5508C21.291 18.317 17.5437 23.0437 10.5623 26.2473C9.10287 26.917 8.33964 28.4497 8.7236 29.8293L9.95721 34.2617C10.42 35.9244 11.7482 37.2053 13.4267 37.6074L27.4967 40.978C31.0422 41.8274 34.6214 39.7079 35.5811 36.1907L38.9148 23.974C39.3922 22.2245 38.0752 20.5 36.2618 20.5H29.4995C29.0917 20.5 28.7096 20.3011 28.4757 19.9671C28.2417 19.6332 28.1854 19.2061 28.3248 18.8228C29.2092 16.3908 29.9865 12.8877 29.9619 9.87015C29.9497 8.35879 29.7363 7.06379 29.3081 6.10507C28.8944 5.17885 28.3119 4.6211 27.5167 4.3853C27.5044 4.38164 27.5 4.3823 27.4951 4.38311C27.4873 4.38445 27.4639 4.39019 27.4273 4.41363Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                  <span className="text-base text-text-tertiary ml-1 font-medium">
                                    Hữu ích (1)
                                  </span>
                                </p>
                                <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                                <span className="md:text-base text-caption1 text-text-focus cursor-pointer font-medium">
                                  Trả lời
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="lc-comment__item relative pt-5">
                    <div className="comment_comment-branch__b5nbp" />
                    <div className="comment-block flex gap-[12px]">
                      <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
                        <div className="bg-layer-gray-4 inline-flex h-[44px] w-[44px] items-center justify-center rounded-full px-[10px] text-[20px] leading-5 text-white md:h-[48px] md:w-[48px]">
                          G
                        </div>
                      </div>
                      <div className="content flex-1">
                        <p className="text-label2 md:te text-text-secondary mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
                          Giau
                        </p>
                        <div className="user-comment">
                          <span
                            className="md:text-label1 text-label2 font-normal"
                            style={{ wordBreak: "break-word" }}
                          >
                            Cho em hỏi em dùng gel này tầm hơn hai tuần trên mặt
                            do bị sẹo rỗ, em thấy vùng bôi da khô và mỏng, dễ
                            bong tróc, cho em hỏi là đó có phải tác dụng ko
                          </span>
                        </div>
                        <div className="comment-utils mt-[8px]">
                          <div className="flex items-center">
                            <span className="md:text-base text-caption text-text-tertiary font-medium">
                              9 ngày trước
                            </span>
                            <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                            <p className="flex cursor-pointer items-center">
                              <svg
                                width={16}
                                className="text-text-tertiary"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M24.8438 3.86983C25.2714 2.7048 26.5795 1.4998 28.2274 1.98846C29.878 2.47791 30.9525 3.65655 31.5907 5.08549C32.2145 6.48192 32.4481 8.16085 32.4619 9.84983C32.484 12.5691 31.9361 15.5596 31.2216 18H36.2618C39.7238 18 42.238 21.2922 41.3266 24.6321L37.993 36.8488C36.6778 41.6687 31.7729 44.5732 26.9143 43.4092L12.8443 40.0386C10.2824 39.4249 8.25507 37.4698 7.54875 34.932L6.31514 30.4996C5.55638 27.7733 7.1056 25.0828 9.51969 23.9751C15.8443 21.0729 19.2274 16.8476 21.8774 11.4492C22.7172 9.73847 23.3316 8.04012 24.166 5.7336C24.3757 5.15403 24.5993 4.53605 24.8438 3.86983ZM27.4273 4.41363C27.3468 4.46525 27.2479 4.57548 27.1907 4.73122C26.9596 5.36096 26.7444 5.95617 26.5393 6.5235C25.6984 8.84928 25.0271 10.7063 24.1216 12.5508C21.291 18.317 17.5437 23.0437 10.5623 26.2473C9.10287 26.917 8.33964 28.4497 8.7236 29.8293L9.95721 34.2617C10.42 35.9244 11.7482 37.2053 13.4267 37.6074L27.4967 40.978C31.0422 41.8274 34.6214 39.7079 35.5811 36.1907L38.9148 23.974C39.3922 22.2245 38.0752 20.5 36.2618 20.5H29.4995C29.0917 20.5 28.7096 20.3011 28.4757 19.9671C28.2417 19.6332 28.1854 19.2061 28.3248 18.8228C29.2092 16.3908 29.9865 12.8877 29.9619 9.87015C29.9497 8.35879 29.7363 7.06379 29.3081 6.10507C28.8944 5.17885 28.3119 4.6211 27.5167 4.3853C27.5044 4.38164 27.5 4.3823 27.4951 4.38311C27.4873 4.38445 27.4639 4.39019 27.4273 4.41363Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <span className="text-base text-text-tertiary ml-1 font-medium">
                                Hữu ích
                              </span>
                            </p>
                            <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                            <span className="md:text-base text-caption1 text-text-focus cursor-pointer font-medium">
                              Trả lời
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="lc-comment__item relative pt-5 pl-[40px] md:pl-[60px]">
                        <div className="comment_reply-branch__NKquM" />
                        <div className="comment-block flex gap-[12px]">
                          <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
                            <img
                              size={44}
                              className=" css-1f66ahq"
                              src="/static/images/avatar-moderator.svg"
                            />
                          </div>
                          <div className="content flex-1">
                            <p className="text-label2 md:te text-text-secondary mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
                              Trần Thu Phương
                              <span className="text-caption2 bg-layer-blue-1 text-text-focus md mt-[4px] rounded px-[4px] py-[2px] font-medium md:ml-2 md:mt-0">
                                Dược sĩ
                              </span>
                            </p>
                            <div className="user-comment">
                              <span
                                className="md:text-label1 text-label2 font-normal"
                                style={{ wordBreak: "break-word" }}
                              >
                                <p className="editor-paragraph" dir="ltr">
                                  <span>dạ</span>
                                </p>
                              </span>
                            </div>
                            <div className="comment-utils mt-[8px]">
                              <div className="flex items-center">
                                <span className="md:text-base text-caption text-text-tertiary font-medium">
                                  9 ngày trước
                                </span>
                                <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                                <p className="flex cursor-pointer items-center">
                                  <svg
                                    width={16}
                                    className="text-text-tertiary"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M24.8438 3.86983C25.2714 2.7048 26.5795 1.4998 28.2274 1.98846C29.878 2.47791 30.9525 3.65655 31.5907 5.08549C32.2145 6.48192 32.4481 8.16085 32.4619 9.84983C32.484 12.5691 31.9361 15.5596 31.2216 18H36.2618C39.7238 18 42.238 21.2922 41.3266 24.6321L37.993 36.8488C36.6778 41.6687 31.7729 44.5732 26.9143 43.4092L12.8443 40.0386C10.2824 39.4249 8.25507 37.4698 7.54875 34.932L6.31514 30.4996C5.55638 27.7733 7.1056 25.0828 9.51969 23.9751C15.8443 21.0729 19.2274 16.8476 21.8774 11.4492C22.7172 9.73847 23.3316 8.04012 24.166 5.7336C24.3757 5.15403 24.5993 4.53605 24.8438 3.86983ZM27.4273 4.41363C27.3468 4.46525 27.2479 4.57548 27.1907 4.73122C26.9596 5.36096 26.7444 5.95617 26.5393 6.5235C25.6984 8.84928 25.0271 10.7063 24.1216 12.5508C21.291 18.317 17.5437 23.0437 10.5623 26.2473C9.10287 26.917 8.33964 28.4497 8.7236 29.8293L9.95721 34.2617C10.42 35.9244 11.7482 37.2053 13.4267 37.6074L27.4967 40.978C31.0422 41.8274 34.6214 39.7079 35.5811 36.1907L38.9148 23.974C39.3922 22.2245 38.0752 20.5 36.2618 20.5H29.4995C29.0917 20.5 28.7096 20.3011 28.4757 19.9671C28.2417 19.6332 28.1854 19.2061 28.3248 18.8228C29.2092 16.3908 29.9865 12.8877 29.9619 9.87015C29.9497 8.35879 29.7363 7.06379 29.3081 6.10507C28.8944 5.17885 28.3119 4.6211 27.5167 4.3853C27.5044 4.38164 27.5 4.3823 27.4951 4.38311C27.4873 4.38445 27.4639 4.39019 27.4273 4.41363Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                  <span className="text-base text-text-tertiary ml-1 font-medium">
                                    Hữu ích
                                  </span>
                                </p>
                                <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                                <span className="md:text-base text-caption1 text-text-focus cursor-pointer font-medium">
                                  Trả lời
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="lc-comment__item relative pt-5">
                    <div className="comment_comment-branch__b5nbp" />
                    <div className="comment-block flex gap-[12px]">
                      <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
                        <div className="bg-layer-gray-4 inline-flex h-[44px] w-[44px] items-center justify-center rounded-full px-[10px] text-[20px] leading-5 text-white md:h-[48px] md:w-[48px]">
                          NH
                        </div>
                      </div>
                      <div className="content flex-1">
                        <p className="text-label2 md:te text-text-secondary mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
                          Nguyễn Hằng
                        </p>
                        <div className="user-comment">
                          <span
                            className="md:text-label1 text-label2 font-normal"
                            style={{ wordBreak: "break-word" }}
                          >
                            Kem bôi sẹo này thiên về sẹo lõm đúng k ạ ?
                          </span>
                        </div>
                        <div className="comment-utils mt-[8px]">
                          <div className="flex items-center">
                            <span className="md:text-base text-caption text-text-tertiary font-medium">
                              11 ngày trước
                            </span>
                            <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                            <p className="flex cursor-pointer items-center">
                              <svg
                                width={16}
                                className="text-text-tertiary"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M24.8438 3.86983C25.2714 2.7048 26.5795 1.4998 28.2274 1.98846C29.878 2.47791 30.9525 3.65655 31.5907 5.08549C32.2145 6.48192 32.4481 8.16085 32.4619 9.84983C32.484 12.5691 31.9361 15.5596 31.2216 18H36.2618C39.7238 18 42.238 21.2922 41.3266 24.6321L37.993 36.8488C36.6778 41.6687 31.7729 44.5732 26.9143 43.4092L12.8443 40.0386C10.2824 39.4249 8.25507 37.4698 7.54875 34.932L6.31514 30.4996C5.55638 27.7733 7.1056 25.0828 9.51969 23.9751C15.8443 21.0729 19.2274 16.8476 21.8774 11.4492C22.7172 9.73847 23.3316 8.04012 24.166 5.7336C24.3757 5.15403 24.5993 4.53605 24.8438 3.86983ZM27.4273 4.41363C27.3468 4.46525 27.2479 4.57548 27.1907 4.73122C26.9596 5.36096 26.7444 5.95617 26.5393 6.5235C25.6984 8.84928 25.0271 10.7063 24.1216 12.5508C21.291 18.317 17.5437 23.0437 10.5623 26.2473C9.10287 26.917 8.33964 28.4497 8.7236 29.8293L9.95721 34.2617C10.42 35.9244 11.7482 37.2053 13.4267 37.6074L27.4967 40.978C31.0422 41.8274 34.6214 39.7079 35.5811 36.1907L38.9148 23.974C39.3922 22.2245 38.0752 20.5 36.2618 20.5H29.4995C29.0917 20.5 28.7096 20.3011 28.4757 19.9671C28.2417 19.6332 28.1854 19.2061 28.3248 18.8228C29.2092 16.3908 29.9865 12.8877 29.9619 9.87015C29.9497 8.35879 29.7363 7.06379 29.3081 6.10507C28.8944 5.17885 28.3119 4.6211 27.5167 4.3853C27.5044 4.38164 27.5 4.3823 27.4951 4.38311C27.4873 4.38445 27.4639 4.39019 27.4273 4.41363Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <span className="text-base text-text-tertiary ml-1 font-medium">
                                Hữu ích
                              </span>
                            </p>
                            <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                            <span className="md:text-base text-caption1 text-text-focus cursor-pointer font-medium">
                              Trả lời
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="lc-comment__item relative pt-5 pl-[40px] md:pl-[60px]">
                        <div className="comment_reply-branch__NKquM" />
                        <div className="comment-block flex gap-[12px]">
                          <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
                            <img
                              size={44}
                              className=" css-1f66ahq"
                              src="/static/images/avatar-moderator.svg"
                            />
                          </div>
                          <div className="content flex-1">
                            <p className="text-label2 md:te text-text-secondary mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
                              Lê Quang Đạo
                              <span className="text-caption2 bg-layer-blue-1 text-text-focus md mt-[4px] rounded px-[4px] py-[2px] font-medium md:ml-2 md:mt-0">
                                Dược sĩ
                              </span>
                            </p>
                            <div className="user-comment">
                              <span
                                className="md:text-label1 text-label2 font-normal"
                                style={{ wordBreak: "break-word" }}
                              >
                                <p className="editor-paragraph" dir="ltr">
                                  <span>Chào bạn Nguyễn Hằng,</span>
                                </p>
                                <p className="editor-paragraph" dir="ltr">
                                  <span>
                                    Dạ Allantoin trong gel trị sẹo Natureplex
                                    Scargel giúp cải thiện tình trạng màu sắc,
                                    kích thước của đa dạng các loại&nbsp;sẹo
                                    lõm, rỗ. Chiết xuất củ Hành tây ngăn ngừa
                                    vết sẹo phát triển trong tương lai, đặc biệt
                                    là đối với sẹo lồi nên sản phẩm có thể sử
                                    dụng cho cả hai tình trạng ạ.
                                  </span>
                                </p>
                                <p className="editor-paragraph" dir="ltr">
                                  <span>Nhà thuốc thông tin đến bạn.</span>
                                </p>
                                <p className="editor-paragraph" dir="ltr">
                                  <span>Thân mến!</span>
                                </p>
                              </span>
                            </div>
                            <div className="comment-utils mt-[8px]">
                              <div className="flex items-center">
                                <span className="md:text-base text-caption text-text-tertiary font-medium">
                                  11 ngày trước
                                </span>
                                <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                                <p className="flex cursor-pointer items-center">
                                  <svg
                                    width={16}
                                    className="text-text-tertiary"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M24.8438 3.86983C25.2714 2.7048 26.5795 1.4998 28.2274 1.98846C29.878 2.47791 30.9525 3.65655 31.5907 5.08549C32.2145 6.48192 32.4481 8.16085 32.4619 9.84983C32.484 12.5691 31.9361 15.5596 31.2216 18H36.2618C39.7238 18 42.238 21.2922 41.3266 24.6321L37.993 36.8488C36.6778 41.6687 31.7729 44.5732 26.9143 43.4092L12.8443 40.0386C10.2824 39.4249 8.25507 37.4698 7.54875 34.932L6.31514 30.4996C5.55638 27.7733 7.1056 25.0828 9.51969 23.9751C15.8443 21.0729 19.2274 16.8476 21.8774 11.4492C22.7172 9.73847 23.3316 8.04012 24.166 5.7336C24.3757 5.15403 24.5993 4.53605 24.8438 3.86983ZM27.4273 4.41363C27.3468 4.46525 27.2479 4.57548 27.1907 4.73122C26.9596 5.36096 26.7444 5.95617 26.5393 6.5235C25.6984 8.84928 25.0271 10.7063 24.1216 12.5508C21.291 18.317 17.5437 23.0437 10.5623 26.2473C9.10287 26.917 8.33964 28.4497 8.7236 29.8293L9.95721 34.2617C10.42 35.9244 11.7482 37.2053 13.4267 37.6074L27.4967 40.978C31.0422 41.8274 34.6214 39.7079 35.5811 36.1907L38.9148 23.974C39.3922 22.2245 38.0752 20.5 36.2618 20.5H29.4995C29.0917 20.5 28.7096 20.3011 28.4757 19.9671C28.2417 19.6332 28.1854 19.2061 28.3248 18.8228C29.2092 16.3908 29.9865 12.8877 29.9619 9.87015C29.9497 8.35879 29.7363 7.06379 29.3081 6.10507C28.8944 5.17885 28.3119 4.6211 27.5167 4.3853C27.5044 4.38164 27.5 4.3823 27.4951 4.38311C27.4873 4.38445 27.4639 4.39019 27.4273 4.41363Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                  <span className="text-base text-text-tertiary ml-1 font-medium">
                                    Hữu ích
                                  </span>
                                </p>
                                <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                                <span className="md:text-base text-caption1 text-text-focus cursor-pointer font-medium">
                                  Trả lời
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
                <li>
                  <div className="lc-comment__item relative pt-5">
                    <div className="comment_comment-branch__b5nbp" />
                    <div className="comment-block flex gap-[12px]">
                      <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
                        <div className="bg-layer-gray-4 inline-flex h-[44px] w-[44px] items-center justify-center rounded-full px-[10px] text-[20px] leading-5 text-white md:h-[48px] md:w-[48px]">
                          0
                        </div>
                      </div>
                      <div className="content flex-1">
                        <p className="text-label2 md:te text-text-secondary mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
                          0702xxxxxx
                        </p>
                        <div className="user-comment">
                          <span
                            className="md:text-label1 text-label2 font-normal"
                            style={{ wordBreak: "break-word" }}
                          >
                            sức sẹo lâu năm hết k ạ
                          </span>
                        </div>
                        <div className="comment-utils mt-[8px]">
                          <div className="flex items-center">
                            <span className="md:text-base text-caption text-text-tertiary font-medium">
                              12 ngày trước
                            </span>
                            <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                            <p className="flex cursor-pointer items-center">
                              <svg
                                width={16}
                                className="text-text-tertiary"
                                viewBox="0 0 48 48"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M24.8438 3.86983C25.2714 2.7048 26.5795 1.4998 28.2274 1.98846C29.878 2.47791 30.9525 3.65655 31.5907 5.08549C32.2145 6.48192 32.4481 8.16085 32.4619 9.84983C32.484 12.5691 31.9361 15.5596 31.2216 18H36.2618C39.7238 18 42.238 21.2922 41.3266 24.6321L37.993 36.8488C36.6778 41.6687 31.7729 44.5732 26.9143 43.4092L12.8443 40.0386C10.2824 39.4249 8.25507 37.4698 7.54875 34.932L6.31514 30.4996C5.55638 27.7733 7.1056 25.0828 9.51969 23.9751C15.8443 21.0729 19.2274 16.8476 21.8774 11.4492C22.7172 9.73847 23.3316 8.04012 24.166 5.7336C24.3757 5.15403 24.5993 4.53605 24.8438 3.86983ZM27.4273 4.41363C27.3468 4.46525 27.2479 4.57548 27.1907 4.73122C26.9596 5.36096 26.7444 5.95617 26.5393 6.5235C25.6984 8.84928 25.0271 10.7063 24.1216 12.5508C21.291 18.317 17.5437 23.0437 10.5623 26.2473C9.10287 26.917 8.33964 28.4497 8.7236 29.8293L9.95721 34.2617C10.42 35.9244 11.7482 37.2053 13.4267 37.6074L27.4967 40.978C31.0422 41.8274 34.6214 39.7079 35.5811 36.1907L38.9148 23.974C39.3922 22.2245 38.0752 20.5 36.2618 20.5H29.4995C29.0917 20.5 28.7096 20.3011 28.4757 19.9671C28.2417 19.6332 28.1854 19.2061 28.3248 18.8228C29.2092 16.3908 29.9865 12.8877 29.9619 9.87015C29.9497 8.35879 29.7363 7.06379 29.3081 6.10507C28.8944 5.17885 28.3119 4.6211 27.5167 4.3853C27.5044 4.38164 27.5 4.3823 27.4951 4.38311C27.4873 4.38445 27.4639 4.39019 27.4273 4.41363Z"
                                  fill="currentColor"
                                />
                              </svg>
                              <span className="text-base text-text-tertiary ml-1 font-medium">
                                Hữu ích
                              </span>
                            </p>
                            <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                            <span className="md:text-base text-caption1 text-text-focus cursor-pointer font-medium">
                              Trả lời
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul>
                    <li>
                      <div className="lc-comment__item relative pt-5 pl-[40px] md:pl-[60px]">
                        <div className="comment_reply-branch__NKquM" />
                        <div className="comment-block flex gap-[12px]">
                          <div className="avatar relative z-10 h-full w-full max-w-full basis-[44px] bg-white md:basis-[48px]">
                            <img
                              size={44}
                              className=" css-1f66ahq"
                              src="/static/images/avatar-moderator.svg"
                            />
                          </div>
                          <div className="content flex-1">
                            <p className="text-label2 md:te text-text-secondary mb-[8px] flex flex-col items-baseline font-bold capitalize md:inline-block">
                              Lữ Thị Anh Thư
                              <span className="text-caption2 bg-layer-blue-1 text-text-focus md mt-[4px] rounded px-[4px] py-[2px] font-medium md:ml-2 md:mt-0">
                                Dược sĩ
                              </span>
                            </p>
                            <div className="user-comment">
                              <span
                                className="md:text-label1 text-label2 font-normal"
                                style={{ wordBreak: "break-word" }}
                              >
                                <p className="editor-paragraph" dir="ltr">
                                  <span>Chào bạn, </span>
                                </p>
                                <p className="editor-paragraph" dir="ltr">
                                  <span>
                                    Dạ sản phẩm giúp Natureplex Scargel giúp cải
                                    thiện tính đàn hồi, cấu trúc và hình dạng
                                    của nhiều loại sẹo (sẹo do mụn, sẹo do phẫu
                                    thuật, bỏng, vết cắt, sẹo thâm ở vùng da
                                    nhạy cảm và những tổn thương
                                    khác...)&nbsp;bao gồm sẹo lâu năm ạ. Bạn nên
                                    kiên trì dùng để đạt hiệu quả ạ.{" "}
                                  </span>
                                </p>
                                <p className="editor-paragraph" dir="ltr">
                                  <span>Nhà Thuốc thông tin đến bạn. </span>
                                </p>
                                <p className="editor-paragraph" dir="ltr">
                                  <span>Thân mến!</span>
                                </p>
                              </span>
                            </div>
                            <div className="comment-utils mt-[8px]">
                              <div className="flex items-center">
                                <span className="md:text-base text-caption text-text-tertiary font-medium">
                                  12 ngày trước
                                </span>
                                <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                                <p className="flex cursor-pointer items-center">
                                  <svg
                                    width={16}
                                    className="text-text-tertiary"
                                    viewBox="0 0 48 48"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      d="M24.8438 3.86983C25.2714 2.7048 26.5795 1.4998 28.2274 1.98846C29.878 2.47791 30.9525 3.65655 31.5907 5.08549C32.2145 6.48192 32.4481 8.16085 32.4619 9.84983C32.484 12.5691 31.9361 15.5596 31.2216 18H36.2618C39.7238 18 42.238 21.2922 41.3266 24.6321L37.993 36.8488C36.6778 41.6687 31.7729 44.5732 26.9143 43.4092L12.8443 40.0386C10.2824 39.4249 8.25507 37.4698 7.54875 34.932L6.31514 30.4996C5.55638 27.7733 7.1056 25.0828 9.51969 23.9751C15.8443 21.0729 19.2274 16.8476 21.8774 11.4492C22.7172 9.73847 23.3316 8.04012 24.166 5.7336C24.3757 5.15403 24.5993 4.53605 24.8438 3.86983ZM27.4273 4.41363C27.3468 4.46525 27.2479 4.57548 27.1907 4.73122C26.9596 5.36096 26.7444 5.95617 26.5393 6.5235C25.6984 8.84928 25.0271 10.7063 24.1216 12.5508C21.291 18.317 17.5437 23.0437 10.5623 26.2473C9.10287 26.917 8.33964 28.4497 8.7236 29.8293L9.95721 34.2617C10.42 35.9244 11.7482 37.2053 13.4267 37.6074L27.4967 40.978C31.0422 41.8274 34.6214 39.7079 35.5811 36.1907L38.9148 23.974C39.3922 22.2245 38.0752 20.5 36.2618 20.5H29.4995C29.0917 20.5 28.7096 20.3011 28.4757 19.9671C28.2417 19.6332 28.1854 19.2061 28.3248 18.8228C29.2092 16.3908 29.9865 12.8877 29.9619 9.87015C29.9497 8.35879 29.7363 7.06379 29.3081 6.10507C28.8944 5.17885 28.3119 4.6211 27.5167 4.3853C27.5044 4.38164 27.5 4.3823 27.4951 4.38311C27.4873 4.38445 27.4639 4.39019 27.4273 4.41363Z"
                                      fill="currentColor"
                                    />
                                  </svg>
                                  <span className="text-base text-text-tertiary ml-1 font-medium">
                                    Hữu ích
                                  </span>
                                </p>
                                <div className="bullet-dot bg-icon-tertiary mx-[8px] h-[4px] w-[4px] rounded-full" />
                                <span className="md:text-base text-caption1 text-text-focus cursor-pointer font-medium">
                                  Trả lời
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="py-4 text-center">
              <div className="inline-flex cursor-pointer items-center justify-center">
                <svg
                  width={20}
                  height={20}
                  className="text-text-primary mr-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.9516 10.4793C19.2944 10.8392 19.2806 11.4088 18.9207 11.7517L12.6201 17.7533C12.2725 18.0844 11.7262 18.0844 11.3786 17.7533L5.07808 11.7517C4.71818 11.4088 4.70433 10.8392 5.04716 10.4793C5.38999 10.1193 5.95967 10.1055 6.31958 10.4483L11.9994 15.8586L17.6792 10.4483C18.0391 10.1055 18.6088 10.1193 18.9516 10.4793ZM18.9516 5.67926C19.2944 6.03916 19.2806 6.60884 18.9207 6.95167L12.6201 12.9533C12.2725 13.2844 11.7262 13.2844 11.3786 12.9533L5.07808 6.95167C4.71818 6.60884 4.70433 6.03916 5.04716 5.67926C5.38999 5.31935 5.95967 5.3055 6.31958 5.64833L11.9994 11.0586L17.6792 5.64833C18.0391 5.30551 18.6088 5.31935 18.9516 5.67926Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-label2 text-text-primary font-medium">
                  Xem thêm 5 bình luận
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="!mx-0 !px-0 css-1wn7moc">
          <div className="bg-transparent umd:px-4">
            <div className="mb-4 flex items-center">
              <h2 className="w-full flex items-center font-semibold text-heading3">
                Sản phẩm vừa xem
              </h2>
            </div>
            <div className="relative h-auto w-screen shrink-0 rounded-xl md:mx-0 md:w-full styles_embla__9F4yB -mx-4">
              <div className="relative">
                <div className="overflow-hidden pl-3 md:pl-0 styles_embla__container__Kdf_C">
                  <div
                    className="flex"
                    style={{ transform: "translate3d(0px, 0px, 0px)" }}
                  >
                    <div className="styles_embla__slide__JiX50">
                      <div className="h-full">
                        <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-5 flex-col">
                          <a
                            className="px-3 block pt-3"
                            href="/duoc-my-pham/dung-dich-ve-sinh-bimunica-250-ml-danh-cho-be-gai.html"
                          >
                            <div className="px-2 py-0.5 md:py-1 absolute z-10 bgi-promotion-tag -top-[1px] -left-[1px] rounded-tl-xl rounded-br-xl">
                              <span
                                className="block text-caption font-semibold text-white md:text-caption2"
                                style={{
                                  textShadow:
                                    "rgba(0, 0, 0, 0.25) 0.5px 0.5px 0px",
                                }}
                              >
                                -15%
                              </span>
                            </div>
                            <div className="mb-1 shrink-0 text-center">
                              <img
                                alt="Dung dịch vệ sinh vùng kín Bimunica 250ml dành cho bé gái từ 0 tháng tuổi "
                                loading="lazy"
                                width={140}
                                height={140}
                                decoding="async"
                                data-nimg={1}
                                className="inline-block h-auto w-[140px] md:w-[160px]"
                                sizes="(min-width: 769px) 160px, 140px"
                                srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg 2560w"
                                src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09568_adc7da8783.jpg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </a>
                          <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
                            <div>
                              <a
                                className="block px-3"
                                href="/duoc-my-pham/dung-dich-ve-sinh-bimunica-250-ml-danh-cho-be-gai.html"
                              >
                                <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]">
                                  <div className="" />
                                </div>
                                <h3 className="overflow-hidden text-gray-10 text-base font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                                  Dung dịch vệ sinh vùng kín Bimunica 250ml dành
                                  cho bé gái từ 0 tháng tuổi{" "}
                                </h3>
                              </a>
                              <div className="px-3">
                                <div className="mb-1">
                                  <div className="text-blue-5">
                                    <span className="font-semibold">
                                      195.500đ
                                    </span>
                                    <span className="text-label2"> / Chai</span>
                                  </div>
                                  <div className="text-caption font-normal text-gray-6 line-through md:text-label2 ">
                                    230.000đ
                                  </div>
                                </div>
                                <p className="w-fit rounded-lg bg-layer-gray px-2 py-1 text-caption font-medium text-text-secondary line-clamp-2 md:text-caption2">
                                  Chai
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 px-3">
                              <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                                Chọn mua
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles_embla__slide__JiX50">
                      <div className="h-full">
                        <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-5 flex-col">
                          <a
                            className="px-3 block pt-3"
                            href="/thuc-pham-chuc-nang/orihiro-deep-sea-shark-extract-capsule-moral-purpose-360-v-1.html"
                          >
                            <div className="px-2 py-0.5 md:py-1 absolute z-10 bgi-promotion-tag -top-[1px] -left-[1px] rounded-tl-xl rounded-br-xl">
                              <span
                                className="block text-caption font-semibold text-white md:text-caption2"
                                style={{
                                  textShadow:
                                    "rgba(0, 0, 0, 0.25) 0.5px 0.5px 0px",
                                }}
                              >
                                -39%
                              </span>
                            </div>
                            <div className="mb-1 shrink-0 text-center">
                              <img
                                alt="Viên uống Orihiro Deep Sea Shark Extract Capsule Moral Purpose hỗ trợ chống oxy hóa (360 viên)"
                                loading="lazy"
                                width={140}
                                height={140}
                                decoding="async"
                                data-nimg={1}
                                className="inline-block h-auto w-[140px] md:w-[160px]"
                                sizes="(min-width: 769px) 160px, 140px"
                                srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg 2560w"
                                src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09178_e8ca8c9af4.jpg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </a>
                          <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
                            <div>
                              <a
                                className="block px-3"
                                href="/thuc-pham-chuc-nang/orihiro-deep-sea-shark-extract-capsule-moral-purpose-360-v-1.html"
                              >
                                <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]">
                                  <div className="" />
                                </div>
                                <h3 className="overflow-hidden text-gray-10 text-base font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                                  Viên uống Orihiro Deep Sea Shark Extract
                                  Capsule Moral Purpose hỗ trợ chống oxy hóa
                                  (360 viên)
                                </h3>
                              </a>
                              <div className="px-3">
                                <div className="mb-1">
                                  <div className="text-blue-5">
                                    <span className="font-semibold">
                                      353.800đ
                                    </span>
                                    <span className="text-label2"> / Hộp</span>
                                  </div>
                                  <div className="text-caption font-normal text-gray-6 line-through md:text-label2 ">
                                    580.000đ
                                  </div>
                                </div>
                                <p className="w-fit rounded-lg bg-layer-gray px-2 py-1 text-caption font-medium text-text-secondary line-clamp-2 md:text-caption2">
                                  Hộp 360 Viên
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 px-3">
                              <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                                Chọn mua
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles_embla__slide__JiX50">
                      <div className="h-full">
                        <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-5 flex-col">
                          <a
                            className="px-3 block pt-3"
                            href="/thuc-pham-chuc-nang/sua-tang-can-appeton-weight-gain-tu-12-tuoi-huong-vani-900-g-1.html"
                          >
                            <div className="px-2 py-0.5 md:py-1 absolute z-10 bgi-promotion-tag -top-[1px] -left-[1px] rounded-tl-xl rounded-br-xl">
                              <span
                                className="block text-caption font-semibold text-white md:text-caption2"
                                style={{
                                  textShadow:
                                    "rgba(0, 0, 0, 0.25) 0.5px 0.5px 0px",
                                }}
                              >
                                -15%
                              </span>
                            </div>
                            <div className="mb-1 shrink-0 text-center">
                              <img
                                alt="Sữa tăng cân Appeton Weight Gain hương Vani giúp tăng cân hiệu quả và khỏe mạnh (900g)"
                                loading="lazy"
                                width={140}
                                height={140}
                                decoding="async"
                                data-nimg={1}
                                className="inline-block h-auto w-[140px] md:w-[160px]"
                                sizes="(min-width: 769px) 160px, 140px"
                                srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg 2560w"
                                src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_04209_5816b3a584.jpg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </a>
                          <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
                            <div>
                              <a
                                className="block px-3"
                                href="/thuc-pham-chuc-nang/sua-tang-can-appeton-weight-gain-tu-12-tuoi-huong-vani-900-g-1.html"
                              >
                                <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]">
                                  <div className="" />
                                </div>
                                <h3 className="overflow-hidden text-gray-10 text-base font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                                  Sữa tăng cân Appeton Weight Gain hương Vani
                                  giúp tăng cân hiệu quả và khỏe mạnh (900g)
                                </h3>
                              </a>
                              <div className="px-3">
                                <div className="mb-1">
                                  <div className="text-blue-5">
                                    <span className="font-semibold">
                                      871.250đ
                                    </span>
                                    <span className="text-label2"> / Hộp</span>
                                  </div>
                                  <div className="text-caption font-normal text-gray-6 line-through md:text-label2 ">
                                    1.025.000đ
                                  </div>
                                </div>
                                <p className="w-fit rounded-lg bg-layer-gray px-2 py-1 text-caption font-medium text-text-secondary line-clamp-2 md:text-caption2">
                                  Hộp
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 px-3">
                              <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                                Chọn mua
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles_embla__slide__JiX50">
                      <div className="h-full">
                        <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-5 flex-col">
                          <a
                            className="px-3 block pt-3"
                            href="/thuc-pham-chuc-nang/hamogan-tue-linh-30v-21989.html"
                          >
                            <div className="px-2 py-0.5 md:py-1 absolute z-10 bgi-promotion-tag -top-[1px] -left-[1px] rounded-tl-xl rounded-br-xl">
                              <span
                                className="block text-caption font-semibold text-white md:text-caption2"
                                style={{
                                  textShadow:
                                    "rgba(0, 0, 0, 0.25) 0.5px 0.5px 0px",
                                }}
                              >
                                -20%
                              </span>
                            </div>
                            <div className="mb-1 shrink-0 text-center">
                              <img
                                alt="Viên uống giải độc gan Hamogan Tuệ Linh hỗ trợ giảm mỡ máu, mỡ gan (30 viên)"
                                loading="lazy"
                                width={140}
                                height={140}
                                decoding="async"
                                data-nimg={1}
                                className="inline-block h-auto w-[140px] md:w-[160px]"
                                sizes="(min-width: 769px) 160px, 140px"
                                srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg 2560w"
                                src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_01790_58e2899186.jpg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </a>
                          <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
                            <div>
                              <a
                                className="block px-3"
                                href="/thuc-pham-chuc-nang/hamogan-tue-linh-30v-21989.html"
                              >
                                <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]">
                                  <div className="" />
                                </div>
                                <h3 className="overflow-hidden text-gray-10 text-base font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                                  Viên uống giải độc gan Hamogan Tuệ Linh hỗ trợ
                                  giảm mỡ máu, mỡ gan (30 viên)
                                </h3>
                              </a>
                              <div className="px-3">
                                <div className="mb-1 flex rounded-md bg-gray-1 md:mb-2">
                                  <div className="min-w-0 flex-1 [&:first-child>button]:rounded-tl-md [&:first-child>button]:rounded-bl-md [&:last-child>button]:rounded-tr-md [&:last-child>button]:rounded-br-md">
                                    <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active active:bgi-none h-fit w-full text-ellipsis rounded-none border !bg-none px-2 py-[3px] text-caption2 hover:rounded-md hover:text-blue-5 active:bg-gray-1 !rounded-md border-blue-5 bg-white text-blue-5 hover:bg-white">
                                      Hộp
                                    </button>
                                  </div>
                                  <div className="min-w-0 flex-1 [&:first-child>button]:rounded-tl-md [&:first-child>button]:rounded-bl-md [&:last-child>button]:rounded-tr-md [&:last-child>button]:rounded-br-md">
                                    <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active active:bgi-none h-fit w-full text-ellipsis rounded-none border border-transparent bg-gray-1 !bg-none px-2 py-[3px] text-caption2 text-gray-7 hover:rounded-md hover:bg-blue-1 hover:text-blue-5 active:bg-gray-1">
                                      Viên
                                    </button>
                                  </div>
                                </div>
                                <div className="mb-1">
                                  <div className="text-blue-5">
                                    <span className="font-semibold">
                                      156.800đ
                                    </span>
                                    <span className="text-label2"> / Hộp</span>
                                  </div>
                                  <div className="text-caption font-normal text-gray-6 line-through md:text-label2 ">
                                    196.000đ
                                  </div>
                                </div>
                                <p className="w-fit rounded-lg bg-layer-gray px-2 py-1 text-caption font-medium text-text-secondary line-clamp-2 md:text-caption2">
                                  Hộp 30 viên
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 px-3">
                              <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                                Chọn mua
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles_embla__slide__JiX50">
                      <div className="h-full">
                        <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-5 flex-col">
                          <a
                            className="px-3 block pt-3"
                            href="/thuoc/telfor-60-2x10-15180.html"
                          >
                            <div className="mb-1 shrink-0 text-center">
                              <img
                                alt="Thuốc Telfor 60 DHG điều trị các triệu chứng viêm mũi dị ứng (2 vỉ x 10 viên)"
                                loading="lazy"
                                width={140}
                                height={140}
                                decoding="async"
                                data-nimg={1}
                                className="inline-block h-auto w-[140px] md:w-[160px]"
                                sizes="(min-width: 769px) 160px, 140px"
                                srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg 2560w"
                                src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00015009_telfor_60_2x10_9025_605c_large_fcc434cbcf.jpg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </a>
                          <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
                            <div>
                              <a
                                className="block px-3"
                                href="/thuoc/telfor-60-2x10-15180.html"
                              >
                                <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]" />
                                <h3 className="overflow-hidden text-gray-10 text-base font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                                  Thuốc Telfor 60 DHG điều trị các triệu chứng
                                  viêm mũi dị ứng (2 vỉ x 10 viên)
                                </h3>
                              </a>
                              <div className="px-3">
                                <div className="mb-1 flex rounded-md bg-gray-1 md:mb-2">
                                  <div className="min-w-0 flex-1 [&:first-child>button]:rounded-tl-md [&:first-child>button]:rounded-bl-md [&:last-child>button]:rounded-tr-md [&:last-child>button]:rounded-br-md">
                                    <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active active:bgi-none h-fit w-full text-ellipsis rounded-none border border-transparent bg-gray-1 !bg-none px-2 py-[3px] text-caption2 text-gray-7 hover:rounded-md hover:bg-blue-1 hover:text-blue-5 active:bg-gray-1">
                                      Hộp
                                    </button>
                                  </div>
                                  <div className="min-w-0 flex-1 [&:first-child>button]:rounded-tl-md [&:first-child>button]:rounded-bl-md [&:last-child>button]:rounded-tr-md [&:last-child>button]:rounded-br-md">
                                    <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active active:bgi-none h-fit w-full text-ellipsis rounded-none border border-transparent bg-gray-1 !bg-none px-2 py-[3px] text-caption2 text-gray-7 hover:rounded-md hover:bg-blue-1 hover:text-blue-5 active:bg-gray-1">
                                      Vỉ
                                    </button>
                                  </div>
                                  <div className="min-w-0 flex-1 [&:first-child>button]:rounded-tl-md [&:first-child>button]:rounded-bl-md [&:last-child>button]:rounded-tr-md [&:last-child>button]:rounded-br-md">
                                    <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active active:bgi-none h-fit w-full text-ellipsis rounded-none border !bg-none px-2 py-[3px] text-caption2 hover:rounded-md hover:text-blue-5 active:bg-gray-1 !rounded-md border-blue-5 bg-white text-blue-5 hover:bg-white">
                                      Viên
                                    </button>
                                  </div>
                                </div>
                                <div className="mb-1">
                                  <div className="text-blue-5">
                                    <span className="font-semibold">
                                      1.300đ
                                    </span>
                                    <span className="text-label2"> / Viên</span>
                                  </div>
                                </div>
                                <p className="w-fit rounded-lg bg-layer-gray px-2 py-1 text-caption font-medium text-text-secondary line-clamp-2 md:text-caption2">
                                  Hộp 2 Vỉ x 10 Viên
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 px-3">
                              <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                                Chọn mua
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles_embla__slide__JiX50">
                      <div className="h-full">
                        <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-5 flex-col">
                          <a
                            className="px-3 block pt-3"
                            href="/cham-soc-ca-nhan/nuoc-yen-sao-cao-cap-cho-tre-em-nunest-kid-grow-vi-cam-6-hu-x-70-ml.html"
                          >
                            <div className="px-2 py-0.5 md:py-1 absolute z-10 bgi-promotion-tag -top-[1px] -left-[1px] rounded-tl-xl rounded-br-xl">
                              <span
                                className="block text-caption font-semibold text-white md:text-caption2"
                                style={{
                                  textShadow:
                                    "rgba(0, 0, 0, 0.25) 0.5px 0.5px 0px",
                                }}
                              >
                                -20%
                              </span>
                            </div>
                            <div className="mb-1 shrink-0 text-center">
                              <img
                                alt="Nước yến sào cao cấp Nunest Kid Grow vị cam hỗ trợ phát triển hệ xương, tăng cường sức khỏe (6 lọ x 70ml)"
                                loading="lazy"
                                width={140}
                                height={140}
                                decoding="async"
                                data-nimg={1}
                                className="inline-block h-auto w-[140px] md:w-[160px]"
                                sizes="(min-width: 769px) 160px, 140px"
                                srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg 2560w"
                                src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_07253_b8c427cb66.jpg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </a>
                          <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
                            <div>
                              <a
                                className="block px-3"
                                href="/cham-soc-ca-nhan/nuoc-yen-sao-cao-cap-cho-tre-em-nunest-kid-grow-vi-cam-6-hu-x-70-ml.html"
                              >
                                <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]">
                                  <div className="" />
                                </div>
                                <h3 className="overflow-hidden text-gray-10 text-base font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                                  Nước yến sào cao cấp Nunest Kid Grow vị cam hỗ
                                  trợ phát triển hệ xương, tăng cường sức khỏe
                                  (6 lọ x 70ml)
                                </h3>
                              </a>
                              <div className="px-3">
                                <div className="mb-1">
                                  <div className="text-blue-5">
                                    <span className="font-semibold">
                                      188.000đ
                                    </span>
                                    <span className="text-label2"> / Hộp</span>
                                  </div>
                                  <div className="text-caption font-normal text-gray-6 line-through md:text-label2 ">
                                    235.000đ
                                  </div>
                                </div>
                                <p className="w-fit rounded-lg bg-layer-gray px-2 py-1 text-caption font-medium text-text-secondary line-clamp-2 md:text-caption2">
                                  Hộp 6 Hũ x 70ml
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 px-3">
                              <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                                Chọn mua
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles_embla__slide__JiX50">
                      <div className="h-full">
                        <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-5 flex-col">
                          <a
                            className="px-3 block pt-3"
                            href="/trang-thiet-bi-y-te/livespo-navax-livespo-5-ong-x-5-ml-va-1-binh-nho-giot.html"
                          >
                            <div className="mb-1 shrink-0 text-center">
                              <img
                                alt="Dung dịch vệ sinh tai, mũi, họng Livespo Navax 5ml giảm sổ mũi, viêm tai, viêm xoang (5 ống và 1 bình nhỏ giọt)"
                                loading="lazy"
                                width={140}
                                height={140}
                                decoding="async"
                                data-nimg={1}
                                className="inline-block h-auto w-[140px] md:w-[160px]"
                                sizes="(min-width: 769px) 160px, 140px"
                                srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg 2560w"
                                src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09970_180e335149.jpg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </a>
                          <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
                            <div>
                              <a
                                className="block px-3"
                                href="/trang-thiet-bi-y-te/livespo-navax-livespo-5-ong-x-5-ml-va-1-binh-nho-giot.html"
                              >
                                <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]" />
                                <h3 className="overflow-hidden text-gray-10 text-base font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                                  Dung dịch vệ sinh tai, mũi, họng Livespo Navax
                                  5ml giảm sổ mũi, viêm tai, viêm xoang (5 ống
                                  và 1 bình nhỏ giọt)
                                </h3>
                              </a>
                              <div className="px-3">
                                <div className="mb-1 flex rounded-md bg-gray-1 md:mb-2">
                                  <div className="min-w-0 flex-1 [&:first-child>button]:rounded-tl-md [&:first-child>button]:rounded-bl-md [&:last-child>button]:rounded-tr-md [&:last-child>button]:rounded-br-md">
                                    <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active active:bgi-none h-fit w-full text-ellipsis rounded-none border !bg-none px-2 py-[3px] text-caption2 hover:rounded-md hover:text-blue-5 active:bg-gray-1 !rounded-md border-blue-5 bg-white text-blue-5 hover:bg-white">
                                      Hộp
                                    </button>
                                  </div>
                                  <div className="min-w-0 flex-1 [&:first-child>button]:rounded-tl-md [&:first-child>button]:rounded-bl-md [&:last-child>button]:rounded-tr-md [&:last-child>button]:rounded-br-md">
                                    <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active active:bgi-none h-fit w-full text-ellipsis rounded-none border border-transparent bg-gray-1 !bg-none px-2 py-[3px] text-caption2 text-gray-7 hover:rounded-md hover:bg-blue-1 hover:text-blue-5 active:bg-gray-1">
                                      Ống
                                    </button>
                                  </div>
                                </div>
                                <div className="mb-1">
                                  <div className="text-blue-5">
                                    <span className="font-semibold">
                                      98.000đ
                                    </span>
                                    <span className="text-label2"> / Hộp</span>
                                  </div>
                                </div>
                                <p className="w-fit rounded-lg bg-layer-gray px-2 py-1 text-caption font-medium text-text-secondary line-clamp-2 md:text-caption2">
                                  Hộp 5 Ống
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 px-3">
                              <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                                Chọn mua
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles_embla__slide__JiX50">
                      <div className="h-full">
                        <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-5 flex-col">
                          <a
                            className="px-3 block pt-3"
                            href="/thuc-pham-chuc-nang/vien-uong-tang-cuong-sinh-ly-ironmen-ocavill-60v-35751.html"
                          >
                            <div className="mb-1 shrink-0 text-center">
                              <img
                                alt="Viên uống Ironmen Ocavill hỗ trợ tăng cường sinh lý nam giới (60 viên)"
                                loading="lazy"
                                width={140}
                                height={140}
                                decoding="async"
                                data-nimg={1}
                                className="inline-block h-auto w-[140px] md:w-[160px]"
                                sizes="(min-width: 769px) 160px, 140px"
                                srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg 2560w"
                                src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/00501597_vien_uong_tang_cuong_sinh_ly_ironmen_ocavill_60v_5022_6302_large_3cb863cf94.jpg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </a>
                          <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
                            <div>
                              <a
                                className="block px-3"
                                href="/thuc-pham-chuc-nang/vien-uong-tang-cuong-sinh-ly-ironmen-ocavill-60v-35751.html"
                              >
                                <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]" />
                                <h3 className="overflow-hidden text-gray-10 text-base font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                                  Viên uống Ironmen Ocavill hỗ trợ tăng cường
                                  sinh lý nam giới (60 viên)
                                </h3>
                              </a>
                              <div className="px-3">
                                <div className="mb-1">
                                  <div className="text-blue-5">
                                    <span className="font-semibold">
                                      615.000đ
                                    </span>
                                    <span className="text-label2"> / Hộp</span>
                                  </div>
                                </div>
                                <p className="w-fit rounded-lg bg-layer-gray px-2 py-1 text-caption font-medium text-text-secondary line-clamp-2 md:text-caption2">
                                  Hộp 60 Viên
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 px-3">
                              <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                                Chọn mua
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles_embla__slide__JiX50">
                      <div className="h-full">
                        <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-5 flex-col">
                          <a
                            className="px-3 block pt-3"
                            href="/cham-soc-ca-nhan/to-yen-tinh-che-soi-dai-kami-nest-50-g.html"
                          >
                            <div className="px-2 py-0.5 md:py-1 absolute z-10 bgi-promotion-tag -top-[1px] -left-[1px] rounded-tl-xl rounded-br-xl">
                              <span
                                className="block text-caption font-semibold text-white md:text-caption2"
                                style={{
                                  textShadow:
                                    "rgba(0, 0, 0, 0.25) 0.5px 0.5px 0px",
                                }}
                              >
                                -20%
                              </span>
                            </div>
                            <div className="mb-1 shrink-0 text-center">
                              <img
                                alt="Tổ yến tinh chế sợi dài Kami Nest bổ dưỡng cho hệ tim mạch, tăng cường hệ thống miễn dịch (50g)"
                                loading="lazy"
                                width={140}
                                height={140}
                                decoding="async"
                                data-nimg={1}
                                className="inline-block h-auto w-[140px] md:w-[160px]"
                                sizes="(min-width: 769px) 160px, 140px"
                                srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg 2560w"
                                src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09817_7994c78cac.jpg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </a>
                          <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
                            <div>
                              <a
                                className="block px-3"
                                href="/cham-soc-ca-nhan/to-yen-tinh-che-soi-dai-kami-nest-50-g.html"
                              >
                                <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]">
                                  <div className="" />
                                </div>
                                <h3 className="overflow-hidden text-gray-10 text-base font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                                  Tổ yến tinh chế sợi dài Kami Nest bổ dưỡng cho
                                  hệ tim mạch, tăng cường hệ thống miễn dịch
                                  (50g)
                                </h3>
                              </a>
                              <div className="px-3">
                                <div className="mb-1">
                                  <div className="text-blue-5">
                                    <span className="font-semibold">
                                      2.072.000đ
                                    </span>
                                    <span className="text-label2"> / Hộp</span>
                                  </div>
                                  <div className="text-caption font-normal text-gray-6 line-through md:text-label2 ">
                                    2.590.000đ
                                  </div>
                                </div>
                                <p className="w-fit rounded-lg bg-layer-gray px-2 py-1 text-caption font-medium text-text-secondary line-clamp-2 md:text-caption2">
                                  Hộp
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 px-3">
                              <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                                Chọn mua
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="styles_embla__slide__JiX50">
                      <div className="h-full">
                        <div className="h-full relative flex rounded-xl border border-solid border-white bg-white transition-all duration-300 ease-out hover:border-blue-5 flex-col">
                          <a
                            className="px-3 block pt-3"
                            href="/thuc-pham-chuc-nang/vien-sui-kudos-kids-multivitamins-plus-calcium-and-d3-huong-dua-hau-20-v.html"
                          >
                            <div className="px-2 py-0.5 md:py-1 absolute z-10 bgi-promotion-tag -top-[1px] -left-[1px] rounded-tl-xl rounded-br-xl">
                              <span
                                className="block text-caption font-semibold text-white md:text-caption2"
                                style={{
                                  textShadow:
                                    "rgba(0, 0, 0, 0.25) 0.5px 0.5px 0px",
                                }}
                              >
                                -20%
                              </span>
                            </div>
                            <div className="mb-1 shrink-0 text-center">
                              <img
                                alt="Viên sủi Kudos Kids Multivitamins Plus Calcium & D3 hương dưa hấu giúp bổ sung calci và vitamin cho cơ thể (20 viên)"
                                loading="lazy"
                                width={140}
                                height={140}
                                decoding="async"
                                data-nimg={1}
                                className="inline-block h-auto w-[140px] md:w-[160px]"
                                sizes="(min-width: 769px) 160px, 140px"
                                srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/16x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 16w, https://cdn.nhathuoclongchau.com.vn/unsafe/24x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 24w, https://cdn.nhathuoclongchau.com.vn/unsafe/28x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 28w, https://cdn.nhathuoclongchau.com.vn/unsafe/32x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 32w, https://cdn.nhathuoclongchau.com.vn/unsafe/40x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 40w, https://cdn.nhathuoclongchau.com.vn/unsafe/48x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 48w, https://cdn.nhathuoclongchau.com.vn/unsafe/64x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 64w, https://cdn.nhathuoclongchau.com.vn/unsafe/72x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 72w, https://cdn.nhathuoclongchau.com.vn/unsafe/96x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 96w, https://cdn.nhathuoclongchau.com.vn/unsafe/128x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 128w, https://cdn.nhathuoclongchau.com.vn/unsafe/144x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 144w, https://cdn.nhathuoclongchau.com.vn/unsafe/256x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 256w, https://cdn.nhathuoclongchau.com.vn/unsafe/320x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 320w, https://cdn.nhathuoclongchau.com.vn/unsafe/375x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 375w, https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg 2560w"
                                src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09365_33ea32b9d1.jpg"
                                style={{ color: "transparent" }}
                              />
                            </div>
                          </a>
                          <div className="flex min-w-0 flex-1 flex-col justify-between pb-3">
                            <div>
                              <a
                                className="block px-3"
                                href="/thuc-pham-chuc-nang/vien-sui-kudos-kids-multivitamins-plus-calcium-and-d3-huong-dua-hau-20-v.html"
                              >
                                <div className="mb-1 flex min-h-[36px] items-end md:mt-0 md:min-h-[20px]">
                                  <div className="" />
                                </div>
                                <h3 className="overflow-hidden text-gray-10 text-base font-semibold line-clamp-2 md:line-clamp-3 mb-1 md:mb-2">
                                  Viên sủi Kudos Kids Multivitamins Plus Calcium
                                  &amp; D3 hương dưa hấu giúp bổ sung calci và
                                  vitamin cho cơ thể (20 viên)
                                </h3>
                              </a>
                              <div className="px-3">
                                <div className="mb-1">
                                  <div className="text-blue-5">
                                    <span className="font-semibold">
                                      116.800đ
                                    </span>
                                    <span className="text-label2"> / Tuýp</span>
                                  </div>
                                  <div className="text-caption font-normal text-gray-6 line-through md:text-label2 ">
                                    146.000đ
                                  </div>
                                </div>
                                <p className="w-fit rounded-lg bg-layer-gray px-2 py-1 text-caption font-medium text-text-secondary line-clamp-2 md:text-caption2">
                                  Tuýp 20 Viên
                                </p>
                              </div>
                            </div>
                            <div className="mt-4 px-3">
                              <button className="inline-flex items-center justify-center font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed ring-offset-background bgi-button-primary-active text-text-white active:bg-button-primary-pressed active:bgi-none py-[8px] px-[12px] h-[36px] rounded-[50px] text-label2 w-full">
                                Chọn mua
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  type="button"
                  className="absolute top-[50%] right-0 hidden translate-x-[50%] -translate-y-[50%] cursor-pointer items-center justify-center rounded-full bg-white transition-all md:flex md:border md:hover:border-text-focus h-10 w-10"
                  style={{
                    boxShadow:
                      "rgba(0, 39, 102, 0.1) 0px 0px 8px -2px, rgba(0, 39, 102, 0.06) 0px 0px 4px -2px",
                  }}
                >
                  <svg
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-text-focus"
                  >
                    <path
                      d="M9.25383 4.29289C8.86331 4.68342 8.86331 5.31658 9.25383 5.70711L15.5467 12L9.25383 18.2929C8.86331 18.6834 8.86331 19.3166 9.25383 19.7071C9.64436 20.0976 10.2775 20.0976 10.668 19.7071L17.668 12.7071C18.0586 12.3166 18.0586 11.6834 17.668 11.2929L10.668 4.29289C10.2775 3.90237 9.64435 3.90237 9.25383 4.29289Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
