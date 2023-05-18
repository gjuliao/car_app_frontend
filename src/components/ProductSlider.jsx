/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';
import 'swiper/swiper.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faForward, faBackward } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Link } from 'react-router-dom';
import CarCard from './CarCard';
import styles from '../styles/Main.module.css';
import { fetchCars } from '../redux/carlistSlice';

const ProductSlider = () => {
  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.list.payload);

  useEffect(() => {
    dispatch(fetchCars());
  }, []);

  const swiperRef = useRef(null); // Create a ref for the swiper instance

  const handleSwiper = (swiper) => {
    swiperRef.current = swiper; // Assign the swiper instance to the ref
  };

  const slideToPrev = () => {
    swiperRef.current.slidePrev(); // Access the swiper instance from the ref and call slidePrev()
  };

  const slideToNext = () => {
    swiperRef.current.slideNext(); // Access the swiper instance from the ref and call slideNext()
  };

  return (
    <div className={styles.productSlider}>
      <button className={styles.btnPrev} type="button" onClick={slideToPrev}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <Swiper
        freeMode
        grabCursor
        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 80,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 80,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
          1200: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
        }}
        onSwiper={handleSwiper}
      >
        {cars?.length > 0 ? (
          cars.map((car) => (
            <SwiperSlide key={car.id}>
              <Link to={`/cars/${car.id}`}>
                <CarCard
                  key={car.id}
                  brand={car.brand}
                  image={car.image}
                  model={car.model}
                  price={car.price}
                  electric={car.electric}
                  description={car.description}
                />
              </Link>
            </SwiperSlide>
          ))
        ) : (
          <h2>Cars not found</h2>
        )}
      </Swiper>
      <button className={styles.btnNext} type="button" onClick={slideToNext}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
};

export default ProductSlider;
