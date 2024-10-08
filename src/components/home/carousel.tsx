import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function CarouselDemo({ products }: any) {
  console.log("AAAA", products);

  return (
    <div className="relative bg-slate-50 pb-[21px] md:pb-0 ">
      <div className="md:container-lite relative md:flex md:flex-row md:gap-3 md:py-4 ">
        <Carousel className="h-auto shrink-0 md:max-w-[805px] md:basis-[805px]">
          <CarouselContent>
            {products.map((product: any) => (
              <CarouselItem key={product._id}>
                <div className="p-1">
                  <CardContent className="flex aspect-[16/5] items-center justify-center rounded-xl p-0">
                    <img
                      src={product.image}
                      alt={product.name}
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
        <div className="flex w-full flex-col gap-3 md:px-0">
          <a
            className="hidden max-w-[399px] md:block"
            href="/bai-viet/thu-cu-doi-moi-binh-hen-suyen-va-but-tiem-tieu-duong-da-qua-su-dung-tai-nha-thuoc-fpt-long-chau.html"
          >
            <img
              alt=""
              fetchPriority="high"
              loading="lazy"
              width={399}
              height={117}
              decoding="async"
              data-nimg={1}
              className="rounded-xl h-[117px] w-[399px] object-cover"
              style={{ color: "transparent" }}
              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/399x117_49d70d4809.png 1x, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/399x117_49d70d4809.png 2x"
              src="https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/399x117_49d70d4809.png"
            />
          </a>
          <a
            className="hidden max-w-[399px] md:block"
            href="/chuyen-trang-suc-khoe"
          >
            <img
              alt=""
              fetchPriority="high"
              loading="lazy"
              width={399}
              height={117}
              decoding="async"
              data-nimg={1}
              className="rounded-xl h-[117px] w-[399px] object-cover"
              style={{ color: "transparent" }}
              srcSet="https://cdn.nhathuoclongchau.com.vn/unsafe/425x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/2_bde57743c1.png 1x, https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/2_bde57743c1.png 2x"
              src="https://cdn.nhathuoclongchau.com.vn/unsafe/828x0/filters:quality(90)/https://cms-prod.s3-sgn09.fptcloud.com/2_bde57743c1.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
