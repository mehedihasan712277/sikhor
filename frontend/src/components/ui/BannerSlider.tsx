"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { BannerSliderDataType } from '@/utils/types';
import Image from 'next/image';

const BannerSlider = ({ allData }: BannerSliderDataType) => {
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
                    allData.map(ele => {
                        return <SwiperSlide key={ele.id} style={{ backgroundPosition: "center", backgroundSize: "cover" }} className='h-[500px]'>
                            {/* <img src={ele.imgUrl} alt={ele.alt} className='block w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px]' /> */}
                            <div className='w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[450px]'>
                                <Image src={ele.imgUrl} fill alt='image' placeholder='blur' blurDataURL='LlKBzOWAx]fk_Nj[Rjj[-;WVRPae'></Image>
                            </div>
                        </SwiperSlide>


                    })
                }

            </Swiper>
        </>
    );
}
export default BannerSlider;