"use client"
// import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { ProductDataType } from '@/utils/types';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import no_match from "@/assets/no_match.png"
import { Button } from '@mui/material';
// import { useRouter } from 'next/navigation';




const SearchBox = () => {
    // const router = useRouter();
    // const [isMounted, setIsMounted] = useState(false);
    const [value, setValue] = useState("");
    const [data, setData] = useState<ProductDataType[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(res => setData(res))

    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    }

    // if (value.length) {
    //     router.push('/search')
    // }
    // else {
    //     router.push('/');
    // }

    const highlightText = (text: string, highlight: string) => {
        const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
        return (
            <span>
                {parts.map((part, index) =>
                    part.toLowerCase() === highlight.toLowerCase() ?
                        <span key={index} style={{ backgroundColor: "rgb(255, 255, 128)" }}>{part}</span> :
                        part
                )}
            </span>
        );
    }



    // const handleFocus = () => {
    //     if (isMounted) {

    //     }
    // };

    // const handleBlur = () => {
    //     if (isMounted) {
    //         router.push('/');
    //     }
    // };


    return (
        <div className='relative'>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Google Maps"
                    inputProps={{ 'aria-label': 'search google maps' }}
                    onChange={handleSearch}
                // onFocus={handleFocus}
                // onBlur={handleBlur}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>



            <div className={value.length ? 'fixed top-[100px] left-0 right-0 overflow-y-auto bg-white' : 'hidden'} style={{ height: 'calc(100vh - 100px)' }}>
                {value && (
                    data.filter(ele => ele.title.includes(value)).length ? (
                        <div className='p-8 grid grid-cols-4 gap-8 '>
                            {data.filter(ele => ele.title.includes(value))
                                .map(ele => (
                                    <div key={ele.id} className="bg-slate-100 p-4">
                                        <p>{ele.id}</p>
                                        <p className='font-bold'>
                                            {highlightText(ele.title, value)}
                                        </p>
                                        <p>{ele.body}</p>
                                    </div>
                                ))}
                        </div>
                    ) : (
                        <div className='flex flex-col justify-center items-center gap-4' style={{ height: 'calc(100vh - 100px)' }}>
                            <Image src={no_match} alt="no data" width={200}></Image>
                            <p className='text-xl font-bold text-gray-700'>No data found</p>
                            <Button variant='outlined' onClick={() => setValue("")}>Go back</Button>
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default SearchBox;
