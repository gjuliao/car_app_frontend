import React from 'react';
import { useSelector } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/css';
import CarCard from './CarCard';
import styles from '../styles/Main.module.css';

function ProductSlider() {

  const cars = useSelector((state) => state.cars);
  console.log(cars);

  return (
    <div className={styles.productSlider}>
      <Swiper
        freeMode
        grabCursor
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 150,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 150,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 150,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 250,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 300,
          },
        }}
      >
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
        <SwiperSlide>
          <CarCard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ProductSlider;
