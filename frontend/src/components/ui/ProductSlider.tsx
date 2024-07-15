"use client"
import { ProductSliderDataType } from "@/utils/types"
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Paper } from "@mui/material";

const ProductSlider = ({ category, allData }: ProductSliderDataType) => {
    return (
        <div>
            {/* --------------------------------for large device --------------------------------------------------*/}
            <div className='p-12 hidden lg:block'>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    centeredSlides={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="w-full"
                >

                    {
                        allData.filter(ele => ele.category.includes(category)).map(e => {
                            return <SwiperSlide key={e.id} className='text-center pb-10' >
                                <Paper elevation={1} sx={{ backgroundColor: "#FCFCFC" }}>
                                    <p className="font-bold">{e.name}</p>
                                    <p>{e.regularPrice}</p>
                                    <p>{e.description}</p>
                                </Paper>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>


            {/* -------------------------------------for medium device -------------------------------------*/}
            <div className='p-12 hidden md:block lg:hidden'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    centeredSlides={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="w-full"
                >

                    {
                        allData.filter(ele => ele.category.includes(category)).map(e => {
                            return <SwiperSlide key={e.id} className='text-center pb-10' >
                                <Paper elevation={1} sx={{ backgroundColor: "#FCFCFC" }}>
                                    <p className="font-bold">{e.name}</p>
                                    <p>{e.regularPrice}</p>
                                    <p>{e.description}</p>
                                </Paper>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>


            {/* -------------------------------------for small device------------------------------------- */}
            <div className='p-12 hidden sm:block md:hidden'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={30}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    centeredSlides={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="w-full"
                >

                    {
                        allData.filter(ele => ele.category.includes(category)).map(e => {
                            return <SwiperSlide key={e.id} className='text-center pb-10' >
                                <Paper elevation={1} sx={{ backgroundColor: "#FCFCFC" }}>
                                    <p className="font-bold">{e.name}</p>
                                    <p>{e.regularPrice}</p>
                                    <p>{e.description}</p>
                                </Paper>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>


            {/* ----------------------for very small device-------------------- */}
            <div className='py-12 px-4 sm:hidden'>
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    centeredSlides={false}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay]}
                    className="w-full"
                >

                    {
                        allData.filter(ele => ele.category.includes(category)).map(e => {
                            return <SwiperSlide key={e.id} className='text-center' >
                                <Paper elevation={1} sx={{ backgroundColor: "#FCFCFC" }}>
                                    <img src={e.imageUrl} alt="img" className="w-full h-44 block" />
                                    <p className="font-bold">{e.name}</p>
                                    <p>{e.regularPrice}</p>
                                    <p>{e.description}</p>
                                </Paper>
                            </SwiperSlide>
                        })
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default ProductSlider