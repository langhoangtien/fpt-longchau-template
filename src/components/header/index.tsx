"use client";
import { useEffect } from "react";
import Dialog from "./dialog";
import Info from "./info";
import Cart from "./cart";

export default function Header() {
  useEffect(() => {}, []);
  return (
    <header className="sticky top-0 z-[10] bg-[#2167dd] transition-[height] md:relative">
      <div className="relative">
        <div className="relative md:static">
          <Info />
          <img
            alt=""
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="md:hidden pointer-events-none select-none object-cover z-[-1]"
            sizes="100vw"
            srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_responsive_new_0219cd6d06.png 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_responsive_new_0219cd6d06.png 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_responsive_new_0219cd6d06.png 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_responsive_new_0219cd6d06.png 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_responsive_new_0219cd6d06.png 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_responsive_new_0219cd6d06.png 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_responsive_new_0219cd6d06.png 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_responsive_new_0219cd6d06.png 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_responsive_new_0219cd6d06.png 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_responsive_new_0219cd6d06.png 2560w"
            src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_responsive_new_0219cd6d06.png"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: 0,
              color: "transparent",
              userSelect: "none",
              pointerEvents: "none",
            }}
          />
          <img
            alt=""
            loading="lazy"
            decoding="async"
            data-nimg="fill"
            className="umd:hidden pointer-events-none select-none object-cover z-[-1]"
            sizes="100vw"
            srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_desktop_a4bfadd206.png 425w, https://cdn.nhathuoclongchau.com.vn/unsafe/640x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_desktop_a4bfadd206.png 640w, https://cdn.nhathuoclongchau.com.vn/unsafe/768x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_desktop_a4bfadd206.png 768w, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_desktop_a4bfadd206.png 828w, https://cdn.nhathuoclongchau.com.vn/unsafe/1080x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_desktop_a4bfadd206.png 1080w, https://cdn.nhathuoclongchau.com.vn/unsafe/1280x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_desktop_a4bfadd206.png 1280w, https://cdn.nhathuoclongchau.com.vn/unsafe/1440x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_desktop_a4bfadd206.png 1440w, https://cdn.nhathuoclongchau.com.vn/unsafe/1920x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_desktop_a4bfadd206.png 1920w, https://cdn.nhathuoclongchau.com.vn/unsafe/2048x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_desktop_a4bfadd206.png 2048w, https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_desktop_a4bfadd206.png 2560w"
            src="https://cdn.nhathuoclongchau.com.vn/unsafe/2560x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/header_desktop_a4bfadd206.png"
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              inset: 0,
              color: "transparent",
              userSelect: "none",
              pointerEvents: "none",
            }}
          />
          <div className="h-full md:relative md:h-auto">
            <div className="container-lite grid grid-cols-[40px_1fr_40px] grid-rows-[40px] content-center pt-1.5 pb-2 md:grid-cols-[200px_1fr_270px] md:grid-rows-[56px] md:pt-4 md:pb-[44px]">
              <Dialog />
              <div className="grid place-content-center content-center transition-[opacity] duration-300 md:place-content-start">
                <a href="/">
                  <img
                    src="/logo/logo-5.svg"
                    alt="Long Châu"
                    className="h-[28px] w-[100px] !bg-transparent !bg-none object-contain md:h-[56px] md:w-[183px]"
                  />
                </a>
              </div>
              <div className="grid place-content-end content-center md:col-start-3 md:col-end-4 md:place-content-stretch">
                <div className="flex h-full items-center justify-between">
                  <div className="hidden md:flex items-center">
                    <div className="flex items-center cursor-pointer">
                      <svg
                        width={24}
                        height={24}
                        className="text-white"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M24 4C18.4772 4 14 8.47715 14 14C14 19.5228 18.4772 24 24 24C29.5228 24 34 19.5228 34 14C34 8.47715 29.5228 4 24 4ZM12.2499 28C9.90326 28 8.00002 29.9013 8 32.2489L8 33C8 36.7555 9.94167 39.5669 12.9202 41.3802C15.8491 43.1633 19.7861 44 24 44C28.2139 44 32.1509 43.1633 35.0798 41.3802C38.0583 39.5669 40 36.7555 40 33L40 32.2487C40 29.9011 38.0967 28 35.7502 28H12.2499Z"
                          fill="currentColor"
                        />
                      </svg>
                      <div className="ml-2 text-body1 font-medium text-white">
                        Đăng nhập
                      </div>
                    </div>
                  </div>
                  <div className="cart-mini relative shrink-0 md:ml-auto css-62ialb">
                    <a
                      className="inline-flex items-center justify-center w-10 h-10 bg-blue-700 rounded-full md:w-[134px] md:h-[48px] md:rounded-[42px]"
                      href="/gio-hang"
                    >
                      <div className="relative">
                        <span
                          className="estore-icon align-middle text-xl  css-1usv4xi"
                          fill="#fff"
                        >
                          <svg
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M0 0.857143C0 0.383756 0.383756 0 0.857143 0H1.49516C2.58141 0 3.2318 0.730277 3.60371 1.40914C3.85162 1.86165 4.03095 2.38649 4.17123 2.86166C4.20922 2.85867 4.2477 2.85714 4.28663 2.85714H18.5692C19.518 2.85714 20.2032 3.76505 19.943 4.67748L17.8542 12.0022C17.4692 13.3522 16.2357 14.2832 14.8319 14.2832H8.03402C6.61861 14.2832 5.37783 13.337 5.00323 11.9721L4.1341 8.8052L2.6957 3.94946L2.69337 3.94096C2.51542 3.29201 2.34842 2.68577 2.10026 2.2328C1.85927 1.79292 1.66716 1.71429 1.49516 1.71429H0.857143C0.383756 1.71429 0 1.33053 0 0.857143ZM7.42857 20C8.69094 20 9.71429 18.9767 9.71429 17.7143C9.71429 16.4519 8.69094 15.4286 7.42857 15.4286C6.16621 15.4286 5.14286 16.4519 5.14286 17.7143C5.14286 18.9767 6.16621 20 7.42857 20ZM15.4286 20C16.6909 20 17.7143 18.9767 17.7143 17.7143C17.7143 16.4519 16.6909 15.4286 15.4286 15.4286C14.1662 15.4286 13.1429 16.4519 13.1429 17.7143C13.1429 18.9767 14.1662 20 15.4286 20Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                        <span className="inline-flex items-center css-et6mfy">
                          1
                        </span>
                      </div>
                      <span className="css-14c0258">Giỏ hàng</span>
                    </a>
                    <Cart></Cart>
                  </div>
                </div>
              </div>
              <div className="search-section col-span-full mt-1.5 grid h-[36px] content-center transition-[margin] md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:mx-auto md:mt-0 md:h-auto md:w-[680px]">
                <div className="cs-search-wrapper relative">
                  <div>
                    <span className="relative inline-flex items-center bg-white md:rounded-[35px] p-[6px] md:pl-4 w-full rounded-[28px] p-1 pl-3">
                      <input
                        id="search_header"
                        placeholder="Tìm tên thuốc, bệnh lý, thực phẩm chức năng..."
                        autoComplete="off"
                        maxLength={200}
                        className="w-full text-ellipsis bg-transparent text-text-primary outline-none placeholder:text-text-tertiary placeholder-shown:text-ellipsis md:h-[40px] h-[28px] text-body1 placeholder:text-label1"
                        defaultValue=""
                      />
                      <button className="ml-2 items-center h-[20px] w-[20px] shrink-0 text-text-secondary hidden">
                        <svg
                          width={24}
                          height={24}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.0033 2.4C17.3053 2.4 21.6033 6.69807 21.6033 12C21.6033 17.3019 17.3053 21.6 12.0033 21.6C6.70139 21.6 2.40332 17.3019 2.40332 12C2.40332 6.69807 6.70139 2.4 12.0033 2.4ZM9.37464 8.53646C9.1408 8.37447 8.81749 8.39761 8.60921 8.60589L8.53978 8.68899C8.37779 8.92283 8.40093 9.24614 8.60921 9.45442L11.1548 12L8.60921 14.5456L8.53978 14.6287C8.37779 14.8625 8.40093 15.1858 8.60921 15.3941L8.69231 15.4635C8.92615 15.6255 9.24946 15.6024 9.45774 15.3941L12.0033 12.8485L14.5489 15.3941L14.632 15.4635C14.8658 15.6255 15.1892 15.6024 15.3974 15.3941L15.4669 15.311C15.6289 15.0772 15.6057 14.7539 15.3974 14.5456L12.8518 12L15.3974 9.45442L15.4669 9.37132C15.6289 9.13748 15.6057 8.81417 15.3974 8.60589L15.3143 8.53646C15.0805 8.37447 14.7572 8.39761 14.5489 8.60589L12.0033 11.1515L9.45774 8.60589L9.37464 8.53646Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                      <button className="shrink-0 rounded-full bg-blue-200 text-blue-500 md:w-[40px] md:h-[40px] md:p-[10px] md:ml-3 w-[28px] h-[28px] p-[6px] sm:ml-2">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M10.9414 1.93125C5.98269 1.93125 1.94336 5.97057 1.94336 10.9293C1.94336 15.888 5.98269 19.9352 10.9414 19.9352C13.0594 19.9352 15.0074 19.193 16.5469 17.9606L20.2949 21.7066C20.4841 21.888 20.7367 21.988 20.9987 21.9853C21.2607 21.9826 21.5112 21.8775 21.6966 21.6923C21.882 21.5072 21.9875 21.2569 21.9906 20.9949C21.9936 20.7329 21.8939 20.4801 21.7129 20.2907L17.9648 16.5427C19.1983 15.0008 19.9414 13.0498 19.9414 10.9293C19.9414 5.97057 15.9001 1.93125 10.9414 1.93125ZM10.9414 3.93128C14.8192 3.93128 17.9395 7.05148 17.9395 10.9293C17.9395 14.8071 14.8192 17.9352 10.9414 17.9352C7.06357 17.9352 3.94336 14.8071 3.94336 10.9293C3.94336 7.05148 7.06357 3.93128 10.9414 3.93128Z"
                            fill="currentColor"
                          />
                        </svg>
                      </button>
                    </span>
                    <div className="hidden md:block css-1azp7v2">
                      <ul className="flex items-center">
                        <li className="item">
                          <a href="https://nhathuoclongchau.com.vn/tim-kiem?s=dung+d%E1%BB%8Bch+v%E1%BB%87+sinh">
                            dung dịch vệ sinh
                          </a>
                        </li>
                        <li className="item">
                          <a href="https://nhathuoclongchau.com.vn/tim-kiem?s=s%E1%BB%AFa+r%E1%BB%ADa+m%E1%BA%B7t">
                            sữa rửa mặt
                          </a>
                        </li>
                        <li className="item">
                          <a href="https://nhathuoclongchau.com.vn/tim-kiem?s=omega+3">
                            omega 3
                          </a>
                        </li>
                        <li className="item">
                          <a href="https://nhathuoclongchau.com.vn/tim-kiem?s=Canxi">
                            Canxi
                          </a>
                        </li>
                        <li className="item">
                          <a href="https://nhathuoclongchau.com.vn/tim-kiem?s=kem+ch%E1%BB%91ng+n%E1%BA%AFng">
                            thuốc nhỏ mắt
                          </a>
                        </li>
                        <li className="item">
                          <a href="https://nhathuoclongchau.com.vn/tim-kiem?s=k%E1%BA%BDm">
                            kẽm
                          </a>
                        </li>
                        <li className="item">
                          <a href="https://nhathuoclongchau.com.vn/tim-kiem?s=men+vi+sinh">
                            men vi sinh
                          </a>
                        </li>
                        <li className="item">
                          <a href="https://nhathuoclongchau.com.vn/tim-kiem?s=S%E1%BA%AFt">
                            Sắt
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
