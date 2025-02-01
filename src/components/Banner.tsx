"use client";
// import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { memo, useState } from "react";
import axios from "axios";
import Image from "next/image";
import useSWR from "swr";
const Banner = memo(() => {
  const [banners, setBanners] = useState([]);
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, isLoading } = useSWR(
    "https://677033222ffbd37a63cc6044.mockapi.io/api/v2/banner",
    fetcher
  );
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        className="overflow-y-hidden h-full"
        loop={true}
        grabCursor={true}
      >
        {data?.map((item: { id: string; banner: string }) => (
          <SwiperSlide key={item.id}>
            <Image
              src={item.banner}
              width={2500}
              height={2500}
              alt={item.banner}
              priority
              quality={100}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
});

Banner.displayName = "Banner";
export default Banner;
