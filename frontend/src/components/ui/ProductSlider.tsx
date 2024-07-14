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
        <div className='p-12'>
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
    );
}

export default ProductSlider