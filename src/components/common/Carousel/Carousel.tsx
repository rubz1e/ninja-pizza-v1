import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './Carousel.scss';

import News from '../../../assets/banners/news_wakeup.webp';
import NewDel from '../../../assets/banners/1270х630_newdel.webp';
import NewNews from '../../../assets/banners/5new_news.webp';
import Android from '../../../assets/banners/android1270ua.webp';
import Legend from '../../../assets/banners/legend.jpg';

export default function Carousel() {
  return (
    <Swiper
      centeredSlides={true}
      slidesPerView={2}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className='mySwiper'
    >
      <SwiperSlide>
        <img src={News} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={NewDel} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={NewNews} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Android} alt='' />
      </SwiperSlide>
      <SwiperSlide>
        <img src={Legend} alt='' />
      </SwiperSlide>
    </Swiper>
  );
}
