import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

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
        slidesPerView={2}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className='swiper-container'
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
