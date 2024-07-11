"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import axios from 'axios';
import { BannerImageType } from '@/utils/types';
import { useQuery } from '@tanstack/react-query';
import { Box, CircularProgress } from '@mui/material';

const fetchData = (): Promise<BannerImageType[]> => {
    return axios.get("https://sikhor-server0.vercel.app/carousel").then(res => res.data)
}

const BannerSlider = () => {
    const { data, isLoading } = useQuery({ queryKey: ["slider-image"], queryFn: fetchData })

    // -----------loadig spinner--------------
    if (isLoading) {
        return <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "450px" }}>
            <CircularProgress />
        </Box>
    }


    return (
        <>
            <Swiper
                spaceBetween={30}
                effect={'fade'}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, EffectFade, Navigation, Pagination]}
                className="mySwiper w-full h-full"
            >

                {
                    (data as BannerImageType[]).map(ele => {

                        return <>

                            <SwiperSlide key={ele.id} style={{ backgroundPosition: "center", backgroundSize: "cover" }} className='h-[500px]'>
                                <img src={ele.imgUrl} alt={ele.alt} className='block w-full h-[450px]' />
                            </SwiperSlide>

                        </>
                    })
                }

            </Swiper>
        </>
    );
}
export default BannerSlider;