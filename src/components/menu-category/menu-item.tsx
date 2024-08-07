export default function MenuItem() {
  return (
    <li className="list-none py-3 [&:hover>.category-panel-styled]:visible [&:hover>.category-panel-styled]:top-full [&:hover>.category-panel-styled]:opacity-100 nav-item">
      <a href="/trang-thiet-bi-y-te">
        <span className="flex items-center gap-2 text-base font-medium">
          <p className="css-15sc8tc text-category mb-0 text-gray-10 line-clamp-1">
            Thiết bị y tế
          </p>
          <span
            size={20}
            className="estore-icon estore-icon arrow-up shrink-0 nav-icon"
          >
            <svg
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.25383 15.7071C5.64435 16.0976 6.27752 16.0976 6.66804 15.7071L12.9609 9.41421L19.2538 15.7071C19.6444 16.0976 20.2775 16.0976 20.668 15.7071C21.0586 15.3166 21.0586 14.6834 20.668 14.2929L13.668 7.29289C13.2775 6.90237 12.6444 6.90237 12.2538 7.29289L5.25383 14.2929C4.86331 14.6834 4.86331 15.3166 5.25383 15.7071Z"
                fill="currentColor"
              />
            </svg>
          </span>
        </span>
      </a>
      <div className="category-panel-styled p-[16px] bg-white !w-[1111px] css-6tzk3l">
        <div
          style={{ alignItems: "normal" }}
          className="lc-row relative flex flex-wrap  css-nnuuop"
        >
          <div className="w-[290px]" gutter={0}>
            <div className="css-1o73i2i">
              <div className="category-panel-left-li  cursor-pointer text-sm px-[16px] hover:bg-slate-200 hover:rounded-l-lg [&:hover>.category-panel-left-anchor]:border-t-0">
                <a
                  className="category-panel-left-anchor flex py-[11px] "
                  href="/trang-thiet-bi-y-te/dung-cu-y-te"
                >
                  <picture className="h-6 w-6">
                    <source
                      srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/24x24/https://cms-prod.s3-sgn09.fptcloud.com/smalls/dung_cu_y_te_level_2_9b136905b5.png"
                      type="image/webp"
                      width={24}
                      height={24}
                    />
                    <source
                      srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                      type="image/webp"
                      width={24}
                      height={24}
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      alt="Dụng cụ y tế"
                      className="h-6 w-6"
                      src="/estore-images/fallback-images/error/img-error-1_1.svg"
                    />
                  </picture>
                  <p className="css-15sc8tc ml-[10px] flex flex-1 items-center line-clamp-1 text-gray-7 mb-0 hover:font-medium text-base">
                    Dụng cụ y tế
                  </p>
                </a>
              </div>
              <div className="category-panel-left-li  cursor-pointer text-sm px-[16px] hover:bg-slate-200 hover:rounded-l-lg [&:hover>.category-panel-left-anchor]:border-t-0">
                <a
                  className="category-panel-left-anchor flex py-[11px]"
                  href="/trang-thiet-bi-y-te/dung-cu-theo-doi"
                >
                  <picture className="h-6 w-6">
                    <source
                      srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/24x24/https://cms-prod.s3-sgn09.fptcloud.com/smalls/dung_cu_theo_doi_level_2_fac9d43d8f.png"
                      type="image/webp"
                      width={24}
                      height={24}
                    />
                    <source
                      srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                      type="image/webp"
                      width={24}
                      height={24}
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      alt="Dụng cụ theo dõi"
                      className="h-6 w-6"
                      src="/estore-images/fallback-images/error/img-error-1_1.svg"
                    />
                  </picture>
                  <p className="css-tc11gt ml-[10px] flex flex-1 items-center line-clamp-1 text-gray-10 mb-0 hover:font-medium text-base">
                    Dụng cụ theo dõi
                  </p>
                </a>
              </div>
              <div className="category-panel-left-li cursor-pointer text-sm px-[16px] hover:bg-slate-200 hover:rounded-l-lg [&:hover>.category-panel-left-anchor]:border-t-0">
                <a
                  className="category-panel-left-anchor flex py-[11px]"
                  href="/trang-thiet-bi-y-te/dung-cu-so-cuu"
                >
                  <picture className="h-6 w-6">
                    <source
                      srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/24x24/https://cms-prod.s3-sgn09.fptcloud.com/smalls/dung_cu_so_cuu_level_2_8c6a7cfa0d.png"
                      type="image/webp"
                      width={24}
                      height={24}
                    />
                    <source
                      srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                      type="image/webp"
                      width={24}
                      height={24}
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      alt="Dụng cụ sơ cứu"
                      className="h-6 w-6"
                      src="/estore-images/fallback-images/error/img-error-1_1.svg"
                    />
                  </picture>
                  <p className="css-15sc8tc ml-[10px] flex flex-1 items-center line-clamp-1 text-gray-7 mb-0 hover:font-medium text-base">
                    Dụng cụ sơ cứu
                  </p>
                </a>
              </div>
              <div className="category-panel-left-li cursor-pointer text-sm px-[16px] hover:bg-slate-200 hover:rounded-l-lg [&:hover>.category-panel-left-anchor]:border-t-0">
                <a
                  className="category-panel-left-anchor flex py-[11px]"
                  href="/trang-thiet-bi-y-te/khau-trang"
                >
                  <picture className="h-6 w-6">
                    <source
                      srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/24x24/https://cms-prod.s3-sgn09.fptcloud.com/smalls/khau_trang_level_2_6f09dcca5c.png"
                      type="image/webp"
                      width={24}
                      height={24}
                    />
                    <source
                      srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                      type="image/webp"
                      width={24}
                      height={24}
                    />
                    <img
                      loading="lazy"
                      decoding="async"
                      alt="Khẩu trang"
                      className="h-6 w-6"
                      src="/estore-images/fallback-images/error/img-error-1_1.svg"
                    />
                  </picture>
                  <p className="css-15sc8tc ml-[10px] flex flex-1 items-center line-clamp-1 text-gray-7 mb-0 hover:font-medium text-base">
                    Khẩu trang
                  </p>
                </a>
              </div>
            </div>
          </div>
          <div style={{ width: "calc(100% - 290px)" }} gutter={0}>
            <div className="no-scrollbar p-6 bg-slate-200 h-full max-h-[550px] rounded-r-xl overflow-auto css-en3p1x">
              <div className="lc-row relative flex flex-wrap  css-aa44ry">
                <div
                  span={4}
                  className="lc-col lc-col-4   css-l7f889"
                  hidden=""
                >
                  <a
                    className="category-item-level-3-item flex min-h-[80px] items-center "
                    href="/trang-thiet-bi-y-te/dung-cu-ve-sinh-mui"
                  >
                    <div className="mr-[8px] flex w-full basis-[40px] items-center">
                      <picture>
                        <source
                          srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/dung_cu_ve_sinh_mui_level_3_b9c09af6cf.png"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <source
                          srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          alt="Dụng cụ vệ sinh mũi"
                          src="/estore-images/fallback-images/error/img-error-1_1.svg"
                        />
                      </picture>
                    </div>
                    <p className="css-15sc8tc mb-0 flex-1 text-gray-10 line-clamp-2">
                      Dụng cụ vệ sinh mũi
                    </p>
                  </a>
                </div>
                <div
                  span={4}
                  className="lc-col lc-col-4   css-l7f889"
                  hidden=""
                >
                  <a
                    className="category-item-level-3-item flex min-h-[80px] items-center "
                    href="/trang-thiet-bi-y-te/kim-cac-loai"
                  >
                    <div className="mr-[8px] flex w-full basis-[40px] items-center">
                      <picture>
                        <source
                          srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/kim_cac_loai_level_3_a5f2b837b1.png"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <source
                          srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          alt="Kim các loại"
                          src="/estore-images/fallback-images/error/img-error-1_1.svg"
                        />
                      </picture>
                    </div>
                    <p className="css-15sc8tc mb-0 flex-1 text-gray-10 line-clamp-2">
                      Kim các loại
                    </p>
                  </a>
                </div>
                <div
                  span={4}
                  className="lc-col lc-col-4   css-l7f889"
                  hidden=""
                >
                  <a
                    className="category-item-level-3-item flex min-h-[80px] items-center "
                    href="/trang-thiet-bi-y-te/may-massage"
                  >
                    <div className="mr-[8px] flex w-full basis-[40px] items-center">
                      <picture>
                        <source
                          srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/may_massage_level_3_4bf6a7b467.png"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <source
                          srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          alt="Máy massage"
                          src="/estore-images/fallback-images/error/img-error-1_1.svg"
                        />
                      </picture>
                    </div>
                    <p className="css-15sc8tc mb-0 flex-1 text-gray-10 line-clamp-2">
                      Máy massage
                    </p>
                  </a>
                </div>
                <div
                  span={4}
                  className="lc-col lc-col-4   css-l7f889"
                  hidden=""
                >
                  <a
                    className="category-item-level-3-item flex min-h-[80px] items-center "
                    href="/trang-thiet-bi-y-te/tui-chuom"
                  >
                    <div className="mr-[8px] flex w-full basis-[40px] items-center">
                      <picture>
                        <source
                          srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/tui_chuom_level_3_869011b667.png"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <source
                          srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          alt="Túi chườm"
                          src="/estore-images/fallback-images/error/img-error-1_1.svg"
                        />
                      </picture>
                    </div>
                    <p className="css-15sc8tc mb-0 flex-1 text-gray-10 line-clamp-2">
                      Túi chườm
                    </p>
                  </a>
                </div>
                <div
                  span={4}
                  className="lc-col lc-col-4   css-l7f889"
                  hidden=""
                >
                  <a
                    className="category-item-level-3-item flex min-h-[80px] items-center "
                    href="/trang-thiet-bi-y-te/vo-ngan-tinh-mach"
                  >
                    <div className="mr-[8px] flex w-full basis-[40px] items-center">
                      <picture>
                        <source
                          srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/vo_ngan_tinh_mach_level_3_4977786e8d.png"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <source
                          srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          alt="Vớ ngăn tĩnh mạch"
                          src="/estore-images/fallback-images/error/img-error-1_1.svg"
                        />
                      </picture>
                    </div>
                    <p className="css-15sc8tc mb-0 flex-1 text-gray-10 line-clamp-2">
                      Vớ ngăn tĩnh mạch
                    </p>
                  </a>
                </div>
                <div
                  span={4}
                  className="lc-col lc-col-4   css-l7f889"
                  hidden=""
                >
                  <a
                    className="category-item-level-3-item flex min-h-[80px] items-center "
                    href="/trang-thiet-bi-y-te/dung-cu-y-te"
                  >
                    <div className="mr-[8px] flex w-full basis-[40px] items-center">
                      <img
                        loading="lazy"
                        decoding="async"
                        alt=""
                        src="/estore-images/icon-service/show-more-dot-icon.svg"
                      />
                    </div>
                    <p className="css-15sc8tc mb-0 flex-1 text-gray-10 line-clamp-2">
                      Xem thêm
                    </p>
                  </a>
                </div>
                <div
                  span={4}
                  hidden=""
                  className="lc-col lc-col-4   css-l7f889"
                />
                <div
                  span={4}
                  hidden=""
                  className="lc-col lc-col-4   css-l7f889"
                />
                <div
                  span={4}
                  hidden=""
                  className="lc-col lc-col-4   css-l7f889"
                />
                <div
                  span={4}
                  hidden=""
                  className="lc-col lc-col-4   css-l7f889"
                />
                <div
                  span={4}
                  hidden=""
                  className="lc-col lc-col-4   css-l7f889"
                />
                <div span={4} className="lc-col lc-col-4   css-l7f889">
                  <a
                    className="category-item-level-3-item flex min-h-[80px] items-center "
                    href="/trang-thiet-bi-y-te/may-do-huyet-ap"
                  >
                    <div className="mr-[8px] flex w-full basis-[40px] items-center">
                      <picture>
                        <source
                          srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/may_do_huyet_ap_level_3_d1cc8315d5.png"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <source
                          srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          alt="Máy đo huyết áp"
                          src="/estore-images/fallback-images/error/img-error-1_1.svg"
                        />
                      </picture>
                    </div>
                    <p className="css-15sc8tc mb-0 flex-1 text-gray-10 line-clamp-2">
                      Máy đo huyết áp
                    </p>
                  </a>
                </div>
                <div span={4} className="lc-col lc-col-4   css-l7f889">
                  <a
                    className="category-item-level-3-item flex min-h-[80px] items-center "
                    href="/trang-thiet-bi-y-te/may-que-thu-duong-huyet"
                  >
                    <div className="mr-[8px] flex w-full basis-[40px] items-center">
                      <picture>
                        <source
                          srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/may_que_thu_duong_huyet_level_3_5dd4c1b707.png"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <source
                          srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          alt="Máy, que thử đường huyết"
                          src="/estore-images/fallback-images/error/img-error-1_1.svg"
                        />
                      </picture>
                    </div>
                    <p className="css-15sc8tc mb-0 flex-1 text-gray-10 line-clamp-2">
                      Máy, que thử đường huyết
                    </p>
                  </a>
                </div>
                <div span={4} className="lc-col lc-col-4   css-l7f889">
                  <a
                    className="category-item-level-3-item flex min-h-[80px] items-center "
                    href="/trang-thiet-bi-y-te/thu-thai"
                  >
                    <div className="mr-[8px] flex w-full basis-[40px] items-center">
                      <picture>
                        <source
                          srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/thu_thai_level_3_d43b6243ac.png"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <source
                          srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          alt="Thử thai"
                          src="/estore-images/fallback-images/error/img-error-1_1.svg"
                        />
                      </picture>
                    </div>
                    <p className="css-15sc8tc mb-0 flex-1 text-gray-10 line-clamp-2">
                      Thử thai
                    </p>
                  </a>
                </div>
                <div span={4} className="lc-col lc-col-4   css-l7f889">
                  <a
                    className="category-item-level-3-item flex min-h-[80px] items-center "
                    href="/trang-thiet-bi-y-te/nhiet-ke"
                  >
                    <div className="mr-[8px] flex w-full basis-[40px] items-center">
                      <picture>
                        <source
                          srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/nhiet_ke_level_3_1f60ec9b7d.png"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <source
                          srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          alt="Nhiệt kế"
                          src="/estore-images/fallback-images/error/img-error-1_1.svg"
                        />
                      </picture>
                    </div>
                    <p className="css-15sc8tc mb-0 flex-1 text-gray-10 line-clamp-2">
                      Nhiệt kế
                    </p>
                  </a>
                </div>
                <div span={4} className="lc-col lc-col-4   css-l7f889">
                  <a
                    className="category-item-level-3-item flex min-h-[80px] items-center "
                    href="/trang-thiet-bi-y-te/kit-test-covid"
                  >
                    <div className="mr-[8px] flex w-full basis-[40px] items-center">
                      <picture>
                        <source
                          srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/kit_test_covid_level_3_anh_that_a4a7e228ea.png"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <source
                          srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          alt="Kit Test Covid"
                          src="/estore-images/fallback-images/error/img-error-1_1.svg"
                        />
                      </picture>
                    </div>
                    <p className="css-15sc8tc mb-0 flex-1 text-gray-10 line-clamp-2">
                      Kit Test Covid
                    </p>
                  </a>
                </div>
                <div span={4} className="lc-col lc-col-4   css-l7f889">
                  <a
                    className="category-item-level-3-item flex min-h-[80px] items-center "
                    href="/trang-thiet-bi-y-te/may-do-sp-o2"
                  >
                    <div className="mr-[8px] flex w-full basis-[40px] items-center">
                      <picture>
                        <source
                          srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/may_do_spo2_level_3_anh_that_81c8bb7fae.png"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <source
                          srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          alt="Máy đo SpO2"
                          src="/estore-images/fallback-images/error/img-error-1_1.svg"
                        />
                      </picture>
                    </div>
                    <p className="css-15sc8tc mb-0 flex-1 text-gray-10 line-clamp-2">
                      Máy đo SpO2
                    </p>
                  </a>
                </div>
                <div
                  span={4}
                  hidden=""
                  className="lc-col lc-col-4   css-l7f889"
                >
                  <a
                    className="category-item-level-3-item flex min-h-[80px] items-center "
                    href="/trang-thiet-bi-y-te/bang-y-te"
                  >
                    <div className="mr-[8px] flex w-full basis-[40px] items-center">
                      <picture>
                        <source
                          srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/bang_y_te_level_3_723e6fe8ea.png"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <source
                          srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          alt="Băng y tế"
                          src="/estore-images/fallback-images/error/img-error-1_1.svg"
                        />
                      </picture>
                    </div>
                    <p className="css-15sc8tc mb-0 flex-1 text-gray-10 line-clamp-2">
                      Băng y tế
                    </p>
                  </a>
                </div>
                <div
                  span={4}
                  hidden=""
                  className="lc-col lc-col-4   css-l7f889"
                >
                  <a
                    className="category-item-level-3-item flex min-h-[80px] items-center "
                    href="/trang-thiet-bi-y-te/bong-y-te"
                  >
                    <div className="mr-[8px] flex w-full basis-[40px] items-center">
                      <picture>
                        <source
                          srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/bong_y_te_level_3_f5f1e97bfe.png"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <source
                          srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          alt="Bông y tế"
                          src="/estore-images/fallback-images/error/img-error-1_1.svg"
                        />
                      </picture>
                    </div>
                    <p className="css-15sc8tc mb-0 flex-1 text-gray-10 line-clamp-2">
                      Bông y tế
                    </p>
                  </a>
                </div>
                <div
                  span={4}
                  hidden=""
                  className="lc-col lc-col-4   css-l7f889"
                >
                  <a
                    className="category-item-level-3-item flex min-h-[80px] items-center "
                    href="/trang-thiet-bi-y-te/con-va-nuoc-sat-trung"
                  >
                    <div className="mr-[8px] flex w-full basis-[40px] items-center">
                      <picture>
                        <source
                          srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/con_va_nuoc_sat_trung_level_3_14cf1667c6.png"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <source
                          srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          alt="Cồn, nước sát trùng, nước muối"
                          src="/estore-images/fallback-images/error/img-error-1_1.svg"
                        />
                      </picture>
                    </div>
                    <p className="css-15sc8tc mb-0 flex-1 text-gray-10 line-clamp-2">
                      Cồn, nước sát trùng, nước muối
                    </p>
                  </a>
                </div>
                <div
                  span={4}
                  hidden=""
                  className="lc-col lc-col-4   css-l7f889"
                >
                  <a
                    className="category-item-level-3-item flex min-h-[80px] items-center "
                    href="/trang-thiet-bi-y-te/cham-soc-vet-thuong"
                  >
                    <div className="mr-[8px] flex w-full basis-[40px] items-center">
                      <picture>
                        <source
                          srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/cham_soc_vet_thuong_level_3_0d9f2632cc.png"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <source
                          srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          alt="Chăm sóc vết thương"
                          src="/estore-images/fallback-images/error/img-error-1_1.svg"
                        />
                      </picture>
                    </div>
                    <p className="css-15sc8tc mb-0 flex-1 text-gray-10 line-clamp-2">
                      Chăm sóc vết thương
                    </p>
                  </a>
                </div>
                <div
                  span={4}
                  hidden=""
                  className="lc-col lc-col-4   css-l7f889"
                >
                  <a
                    className="category-item-level-3-item flex min-h-[80px] items-center "
                    href="/trang-thiet-bi-y-te/xit-giam-dau"
                  >
                    <div className="mr-[8px] flex w-full basis-[40px] items-center">
                      <picture>
                        <source
                          srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/xit_giam_dau_level_3_556e16eb7f.png"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <source
                          srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          alt="Xịt giảm đau, kháng viêm"
                          src="/estore-images/fallback-images/error/img-error-1_1.svg"
                        />
                      </picture>
                    </div>
                    <p className="css-15sc8tc mb-0 flex-1 text-gray-10 line-clamp-2">
                      Xịt giảm đau, kháng viêm
                    </p>
                  </a>
                </div>
                <div
                  span={4}
                  hidden=""
                  className="lc-col lc-col-4   css-l7f889"
                >
                  <a
                    className="category-item-level-3-item flex min-h-[80px] items-center "
                    href="/trang-thiet-bi-y-te/mieng-dan-giam-dau"
                  >
                    <div className="mr-[8px] flex w-full basis-[40px] items-center">
                      <picture>
                        <source
                          srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/mieng_dan_giam_dau_level_3_f348574869.png"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <source
                          srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          alt="Miếng dán giảm đau, hạ sốt"
                          src="/estore-images/fallback-images/error/img-error-1_1.svg"
                        />
                      </picture>
                    </div>
                    <p className="css-15sc8tc mb-0 flex-1 text-gray-10 line-clamp-2">
                      Miếng dán giảm đau, hạ sốt
                    </p>
                  </a>
                </div>
                <div
                  span={4}
                  hidden=""
                  className="lc-col lc-col-4   css-l7f889"
                >
                  <a
                    className="category-item-level-3-item flex min-h-[80px] items-center "
                    href="/trang-thiet-bi-y-te/khau-trang-y-te"
                  >
                    <div className="mr-[8px] flex w-full basis-[40px] items-center">
                      <picture>
                        <source
                          srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/khau_trang_y_te_level_3_dd6078fcdc.png"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <source
                          srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          alt="Khẩu trang y tế"
                          src="/estore-images/fallback-images/error/img-error-1_1.svg"
                        />
                      </picture>
                    </div>
                    <p className="css-15sc8tc mb-0 flex-1 text-gray-10 line-clamp-2">
                      Khẩu trang y tế
                    </p>
                  </a>
                </div>
                <div
                  span={4}
                  hidden=""
                  className="lc-col lc-col-4   css-l7f889"
                >
                  <a
                    className="category-item-level-3-item flex min-h-[80px] items-center "
                    href="/trang-thiet-bi-y-te/khau-trang-vai"
                  >
                    <div className="mr-[8px] flex w-full basis-[40px] items-center">
                      <picture>
                        <source
                          srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/40x40/https://cms-prod.s3-sgn09.fptcloud.com/khau_trang_vai_level_3_09b76a7c62.png"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <source
                          srcSet="/estore-images/fallback-images/default/img-default-1_1.svg"
                          type="image/webp"
                          width={40}
                          height={40}
                        />
                        <img
                          loading="lazy"
                          decoding="async"
                          alt="Khẩu trang vải"
                          src="/estore-images/fallback-images/error/img-error-1_1.svg"
                        />
                      </picture>
                    </div>
                    <p className="css-15sc8tc mb-0 flex-1 text-gray-10 line-clamp-2">
                      Khẩu trang vải
                    </p>
                  </a>
                </div>
              </div>
              <div
                className="ant-divider css-10ed4xt ant-divider-horizontal"
                role="separator"
                style={{ margin: "16px 0px" }}
              />
              <div className="mb-[16px] flex items-center">
                <span className="text-base font-semibold">Bán chạy nhất</span>
                <div
                  className="ant-divider css-10ed4xt ant-divider-vertical"
                  role="separator"
                  style={{ backgroundColor: "rgb(193, 200, 209)" }}
                />
                <a
                  className="text-blue-5 flex items-center"
                  href="/trang-thiet-bi-y-te/dung-cu-theo-doi"
                >
                  <span className="text-sm">Xem tất cả</span>{" "}
                  <span
                    className="estore-icon  css-u5y24t"
                    style={{ fontSize: 18, marginLeft: 6 }}
                  >
                    <svg
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.25383 4.29289C8.86331 4.68342 8.86331 5.31658 9.25383 5.70711L15.5467 12L9.25383 18.2929C8.86331 18.6834 8.86331 19.3166 9.25383 19.7071C9.64436 20.0976 10.2775 20.0976 10.668 19.7071L17.668 12.7071C18.0586 12.3166 18.0586 11.6834 17.668 11.2929L10.668 4.29289C10.2775 3.90237 9.64435 3.90237 9.25383 4.29289Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-5 gap-[15.25px]">
                <div className="css-1og66wj">
                  <div className="product-card">
                    <div className="relative">
                      <a href="/trang-thiet-bi-y-te/que-thu-rung-trung-safefit-test-hop-7-cai.html">
                        <div className="img">
                          <picture>
                            <source
                              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/104x104/https://cms-prod.s3-sgn09.fptcloud.com/DSC_02416_5c5a59d4e1.jpg"
                              type="image/webp"
                              width={104}
                              height={104}
                            />
                            <source
                              srcSet="/static/images/img-product.svg"
                              type="image/webp"
                              width={104}
                              height={104}
                            />
                            <img
                              loading="lazy"
                              decoding="async"
                              alt="Que thử rụng trứng Safefit Test dùng để xác định ngày rụng trứng (7 que)"
                              src="/estore-images/fallback-images/error/img-error-1_1.svg"
                              style={{ height: 104, width: 104 }}
                            />
                          </picture>
                        </div>
                      </a>
                    </div>
                    <div className="content">
                      <a
                        className="name"
                        href="/trang-thiet-bi-y-te/que-thu-rung-trung-safefit-test-hop-7-cai.html"
                      >
                        <div className="text-body2 font-medium">
                          Que thử rụng trứng Safefit Test dùng để xác định ngày
                          rụng trứng (7 que)
                        </div>
                      </a>
                      <div className="price">
                        <span className="new text-body2 font-semibold">
                          55.000đ
                        </span>
                        <span className="new text-caption font-medium">
                          {" "}
                          / Hộp
                        </span>
                      </div>
                      <div className="" />
                    </div>
                  </div>
                </div>
                <div className="css-1og66wj">
                  <div className="product-card">
                    <div className="relative">
                      <a href="/trang-thiet-bi-y-te/but-thu-thai-nhanh-safefit.html">
                        <div className="img">
                          <picture>
                            <source
                              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/104x104/https://cms-prod.s3-sgn09.fptcloud.com/DSC_02426_df87a65394.jpg"
                              type="image/webp"
                              width={104}
                              height={104}
                            />
                            <source
                              srcSet="/static/images/img-product.svg"
                              type="image/webp"
                              width={104}
                              height={104}
                            />
                            <img
                              loading="lazy"
                              decoding="async"
                              alt="Bút thử thai nhanh Safefit cho kết quả nhanh với độ chính xác cao"
                              src="/estore-images/fallback-images/error/img-error-1_1.svg"
                              style={{ height: 104, width: 104 }}
                            />
                          </picture>
                        </div>
                      </a>
                    </div>
                    <div className="content">
                      <a
                        className="name"
                        href="/trang-thiet-bi-y-te/but-thu-thai-nhanh-safefit.html"
                      >
                        <div className="text-body2 font-medium">
                          Bút thử thai nhanh Safefit cho kết quả nhanh với độ
                          chính xác cao
                        </div>
                      </a>
                      <div className="price">
                        <span className="new text-body2 font-semibold">
                          35.000đ
                        </span>
                        <span className="new text-caption font-medium">
                          {" "}
                          / Hộp
                        </span>
                      </div>
                      <div className="" />
                    </div>
                  </div>
                </div>
                <div className="css-1og66wj">
                  <div className="product-card">
                    <div className="relative">
                      <a href="/trang-thiet-bi-y-te/que-thu-thai-safefit-pregnancy-test-kit.html">
                        <div className="img">
                          <picture>
                            <source
                              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/104x104/https://cms-prod.s3-sgn09.fptcloud.com/DSC_00604_f120550fdd.jpg"
                              type="image/webp"
                              width={104}
                              height={104}
                            />
                            <source
                              srcSet="/static/images/img-product.svg"
                              type="image/webp"
                              width={104}
                              height={104}
                            />
                            <img
                              loading="lazy"
                              decoding="async"
                              alt="Que thử thai nhanh Safefit Test (Hộp 1 que x 1 cốc nhựa)"
                              src="/estore-images/fallback-images/error/img-error-1_1.svg"
                              style={{ height: 104, width: 104 }}
                            />
                          </picture>
                        </div>
                      </a>
                    </div>
                    <div className="content">
                      <a
                        className="name"
                        href="/trang-thiet-bi-y-te/que-thu-thai-safefit-pregnancy-test-kit.html"
                      >
                        <div className="text-body2 font-medium">
                          Que thử thai nhanh Safefit Test (Hộp 1 que x 1 cốc
                          nhựa)
                        </div>
                      </a>
                      <div className="price">
                        <span className="new text-body2 font-semibold">
                          12.000đ
                        </span>
                        <span className="new text-caption font-medium">
                          {" "}
                          / Hộp
                        </span>
                      </div>
                      <div className="" />
                    </div>
                  </div>
                </div>
                <div className="css-1og66wj">
                  <div className="product-card">
                    <div className="relative">
                      <a href="/trang-thiet-bi-y-te/que-do-duong-huyet-nipro-premier-hop-25-que.html">
                        <div className="img">
                          <picture>
                            <source
                              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/104x104/https://cms-prod.s3-sgn09.fptcloud.com/DSC_00456_fda7c62462.jpg"
                              type="image/webp"
                              width={104}
                              height={104}
                            />
                            <source
                              srcSet="/static/images/img-product.svg"
                              type="image/webp"
                              width={104}
                              height={104}
                            />
                            <img
                              loading="lazy"
                              decoding="async"
                              alt="Que thử đường huyết Nipro Premier (25 que)"
                              src="/estore-images/fallback-images/error/img-error-1_1.svg"
                              style={{ height: 104, width: 104 }}
                            />
                          </picture>
                        </div>
                      </a>
                    </div>
                    <div className="content">
                      <a
                        className="name"
                        href="/trang-thiet-bi-y-te/que-do-duong-huyet-nipro-premier-hop-25-que.html"
                      >
                        <div className="text-body2 font-medium">
                          Que thử đường huyết Nipro Premier (25 que)
                        </div>
                      </a>
                      <div className="price">
                        <span className="new text-body2 font-semibold">
                          205.000đ
                        </span>
                        <span className="new text-caption font-medium">
                          {" "}
                          / Hộp
                        </span>
                      </div>
                      <div className="" />
                    </div>
                  </div>
                </div>
                <div className="css-1og66wj">
                  <div className="product-card">
                    <div className="relative">
                      <a href="/trang-thiet-bi-y-te/omron-hem-7143-t1-may-do-huyet-ap-bap-tay-tu-dong.html">
                        <div className="img">
                          <picture>
                            <source
                              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/104x104/https://cms-prod.s3-sgn09.fptcloud.com/DSC_09885_d6bc560548.jpg"
                              type="image/webp"
                              width={104}
                              height={104}
                            />
                            <source
                              srcSet="/static/images/img-product.svg"
                              type="image/webp"
                              width={104}
                              height={104}
                            />
                            <img
                              loading="lazy"
                              decoding="async"
                              alt="Máy đo huyết áp bắp tay tự động Omron HEM 7143T1 cho kết quả chính xác, nhanh chóng"
                              src="/estore-images/fallback-images/error/img-error-1_1.svg"
                              style={{ height: 104, width: 104 }}
                            />
                          </picture>
                        </div>
                      </a>
                    </div>
                    <div className="content">
                      <a
                        className="name"
                        href="/trang-thiet-bi-y-te/omron-hem-7143-t1-may-do-huyet-ap-bap-tay-tu-dong.html"
                      >
                        <div className="text-body2 font-medium">
                          Máy đo huyết áp bắp tay tự động Omron HEM 7143T1 cho
                          kết quả chính xác, nhanh chóng
                        </div>
                      </a>
                      <div className="price">
                        <span className="new text-body2 font-semibold">
                          1.240.000đ
                        </span>
                        <span className="new text-caption font-medium">
                          {" "}
                          / Hộp
                        </span>
                      </div>
                      <div className="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
