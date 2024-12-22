import React from 'react'
import "./testimonial.css"
import Image1 from "../../assets/anya.png";
import Image2 from "../../assets/yuktika.png";
import Image3 from "../../assets/vanshika.png";
import { Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
const data = [
  {
    id: 1,
    image: Image1,
    title: "Anya Anand",
    subtitle: "Frontend Developer",
    comment:
      "A great peer to collaborate with,always bringing creative solutions to the table.",
  },
  {
    id: 2,
    image: Image2,
    title: "Yuktika Sood",
    subtitle: "Designer & Figma Expert",
    comment:
      "Their attention to detail and design sense make working together a seamless experience.",
  },
  {
    id: 3,
    image: Image3,
    title: "Vartika Yadav",
    subtitle: "Artisan of Letters & Frontend Developer",
    comment:
      "Breathing life into words with the art of graceful strokes and also good at frontend designing.",
  },
];

const testimonials = () => {
  return (
    <section className='testimonials container section' id='people'>
      <h2 className='section__title'>Clients & Reviews</h2>
      <Swiper className='testimonial__container grid'
      modules={[Pagination]}
      spaceBetween={30}
      slidesPerView={1}
      grabCursor={true}
      loop={true}
      pagination={{ clickable: true }}
      >
        {data.map(({id,image,title,subtitle,comment})=>{
          return (
            <SwiperSlide className='testimonial__item' key={id}>
              <div className='thumb'>
                <img src={image} alt=''/>
              </div>
              <h3 className='testimonial__title'>{title}</h3>
              <span className='subtitle'>{subtitle}</span>
              <div className='comment'>{comment}</div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default testimonials
