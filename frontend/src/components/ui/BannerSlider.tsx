"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './banner.css';

// import required modules
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BannerImageType } from '@/utils/types';

const BannerSlider = () => {
    const [data, setData] = useState<BannerImageType[] | []>([])
    useEffect(() => {
        axios.get("https://sikhor-server0.vercel.app/carousel")
            .then(res => setData(res.data))
    }, [])
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
                    data.map(ele => <SwiperSlide key={ele.id} style={{ backgroundPosition: "center", backgroundSize: "cover" }} className='h-[500px]'>
                        <img src={ele.imgUrl} alt={ele.alt} className='block w-full h-[450px]' />
                    </SwiperSlide>)
                }
                {/* <SwiperSlide style={{ backgroundPosition: "center", backgroundSize: "cover" }} className='h-[500px]'>
                    <img src="https://swiperjs.com/demos/images/nature-2.jpg" className='block w-full h-[500px]' />
                </SwiperSlide>
                <SwiperSlide style={{ backgroundPosition: "center", backgroundSize: "cover" }} className='h-[500px]'>
                    <img src="https://swiperjs.com/demos/images/nature-3.jpg" className='block w-full h-[500px]' />
                </SwiperSlide>
                <SwiperSlide style={{ backgroundPosition: "center", backgroundSize: "cover" }} className='h-[500px]'>
                    <img src="https://swiperjs.com/demos/images/nature-4.jpg" className='block w-full h-[500px]' />
                </SwiperSlide> */}
            </Swiper>
        </>
    );
}
export default BannerSlider;