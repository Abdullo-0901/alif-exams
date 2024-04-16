import { FC, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductType } from "../interfaces";
import { Navigation } from "swiper/modules";
import "../App.css";
import "swiper/css";
import "swiper/css/navigation";

const Slickdots: FC<{ product?: ProductType }> = ({ product }) => {
  const [tab, setTab] = useState(0);
  const [swiper, setSwiper] = useState<any>(null);

  useEffect(() => {
    if (swiper) {
      swiper.on("slideChange", () => {
        setTab(swiper.realIndex);
      });
    }
  }, [swiper]);

  const handleTabClick = (index: number) => {
    setTab(index);
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  return (
    <div className="w-[570px] flex gap-5 items-start">
      <div className="w-[100px] flex flex-col gap-4">
        {product?.images?.map((img, i) => (
          <div
            key={i}
            className={`${
              i === tab && "outline-colLight outline outline-2"
            } w-[100px] h-[100px] bg-colDull`}
            onClick={() => handleTabClick(i)}
          >
            <img className="w-full h-[100%]" src={img} alt="" />
          </div>
        ))}
      </div>
      <div className="h-[450px] w-[450px] bg-colDull">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          navigation={false}
          modules={[Navigation]}
          initialSlide={tab}
          className="mySwiper"
          onSwiper={setSwiper}
        >
          {product?.images.map((image, i) => (
            <SwiperSlide key={i} className="bg-transparent flex">
              <img className="h-[90%] object-center" src={image} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slickdots;
