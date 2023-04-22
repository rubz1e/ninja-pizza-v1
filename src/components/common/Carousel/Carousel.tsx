import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './Carousel.scss';

import News from '../../../assets/banners/slider_wakeup.webp';
import Netflix from '../../../assets/banners/netflix7_slider.webp';
import NewNews from '../../../assets/banners/5new_slider.webp';
import Android from '../../../assets/banners/fixand1513ua.webp';
import Legend from '../../../assets/banners/legend.png';
import React from 'react';

export default function Carousel() {
  const data = [{ img: News }, { img: Netflix }, { img: NewNews }, { img: Android }, { img: Legend }];

  return (
    <div className='slider'>
      <Swiper
        slidesPerView={1}
        centeredSlides={true}
        freeMode
        grabCursor
        loop={true}
        centeredSlidesBounds
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='swiper-container'
        breakpoints={{
          320: { slidesPerView: 1, spaceBetween: 80 },
          480: { slidesPerView: 1, spaceBetween: 150 },
          768: { slidesPerView: 1, spaceBetween: 50 },
          1024: { slidesPerView: 1, spaceBetween: 150 },
          1350: { slidesPerView: 2, spaceBetween: 150 },
        }}
      >
        {data.map((slide, index) => (
          <SwiperSlide key={index} className='slider-slide'>
            <div className='slider-image'>
              <img src={slide.img} alt={slide.img} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
