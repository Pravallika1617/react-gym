import React from 'react';
import './Testimonial.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from 'swiper/modules';

import avatar01 from '../../assets/images/avatar01.png';
import avatar02 from '../../assets/images/avatar02.png'

function Testimonial() {
    return (
        <>
            <section>
                <div className="container sliders">

                    <h2 className="section__title">Testimonials</h2>
                    <Swiper
                        effect={'cards'}
                        grabCursor={true}
                        modules={[EffectCards]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <div className="slide__item">
                                <div className="slide__img-01">
                                    <img src={avatar01} alt="" />
                                </div>

                                <h4>Jesica Fernandes</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fuga distinctio provident necessitatibus quas earum libero nesciunt nobis officiis dolores maxime, sunt sequi vel facilis incidunt itaque id delectus ratione.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="slide__item">
                                <div className="slide__img-02">
                                    <img src={avatar02} alt="" />
                                </div>

                                <h4>Jesica Fernandes</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fuga distinctio provident necessitatibus quas earum libero nesciunt nobis officiis dolores maxime, sunt sequi vel facilis incidunt itaque id delectus ratione.</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="slide__item">
                                <div className="slide__img-03">
                                    <img src={avatar01} alt="" />
                                </div>

                                <h4>Jesica Fernandes</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, fuga distinctio provident necessitatibus quas earum libero nesciunt nobis officiis dolores maxime, sunt sequi vel facilis incidunt itaque id delectus ratione.</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
}
export default Testimonial