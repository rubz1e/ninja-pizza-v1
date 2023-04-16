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
  const data = [{ img: News }, { img: NewDel }, { img: NewNews }, { img: Android }, { img: Legend }];

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
      {data.map((slide, index) => (
        <SwiperSlide key={index}>
          <img src={slide.img} alt={slide.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
