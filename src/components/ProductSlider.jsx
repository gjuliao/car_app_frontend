import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/swiper.min.css';
import CarCard from './CarCard';
import styles from '../styles/Main.module.css';
import { fetchCars } from '../redux/carlistSlice';

function ProductSlider() {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.list.payload);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  console.log(cars);

  const handleSwiper = (swiper) => {
    // Do something with the swiper instance
  };

  return (
    <div className={styles.productSlider}>
      <button className={styles.btnPrev} type="button" onClick={() => swiper.slidePrev()}>Slide to the Prev slide</button>

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
        onSwiper={handleSwiper} // Assign the function to onSwiper
      >
        {cars.length > 0 ? (
          cars.map((car) => (
            <SwiperSlide key={car.id}>
              <CarCard
                key={car.id}
                brand={car.brand}
                image={car.image}
                model={car.model}
                price={car.price}
                electric={car.electric}
                description={car.description}
              />
            </SwiperSlide>
          ))
        ) : (
          <h2>Cars not found</h2>
        )}
      </Swiper>
      <button className={styles.btnNext} type="button" onClick={() => swiper.slideNext()}>Slide to the next slide</button>
    </div>
  );
}

export default ProductSlider;
