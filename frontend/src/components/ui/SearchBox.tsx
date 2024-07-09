"use client"
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { ProductDataType } from '@/utils/types';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import no_match from "@/assets/no_match.png"
import { Button } from '@mui/material';




const SearchBox = () => {

    const [value, setValue] = useState("");
    const [data, setData] = useState<ProductDataType[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(res => setData(res))
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value.trim());
    }
    // console.log(value);
    // console.log(Array.from(new Set(value.split(" ").flatMap(e => data.filter(ele => ele.title.includes(e))))));


    const highlightText = (text: string, highlights: string[]) => {
        const regex = new RegExp(`(${highlights.join('|')})`, 'gi');
        const parts = text.split(regex);
        return <>{parts.map((part, i) =>
            highlights.some(highlight => part.toLowerCase() === highlight.toLowerCase()) ? <span key={i} className="bg-yellow-300">{part}</span> : part
        )}</>;
    }

    return (
        <div className='relative'>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="search product by name"
                    inputProps={{ 'aria-label': 'search product by name' }}
                    onChange={handleSearch}
                />
                <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>



            <div className={Boolean(value) ? 'fixed top-[100px] left-0 right-0 overflow-y-auto bg-white' : 'hidden'} style={{ height: 'calc(100vh - 100px)' }}>
                {value && (
                    Array.from(new Set(value.split(" ").flatMap(e => data.filter(ele => ele.title.includes(e))))).length ? (
                        <div>
                            <p className='text-xl font-bold text-gray-700 pt-4 pl-8'>
                                Totoal Search Results: {Array.from(new Set(value.split(" ").flatMap(e => data.filter(ele => ele.title.includes(e))))).length}
                            </p>
                            <div className='p-8 grid grid-cols-4 gap-8 '>
                                {
                                    Array.from(new Set(value.split(" ").flatMap(e => data.filter(ele => ele.title.includes(e)))))
                                        .map(ele => (
                                            <div key={ele.id} className="bg-slate-100 p-4">
                                                <p>{ele.id}</p>
                                                <p className='font-bold'>
                                                    {/* {ele.title} */}
                                                    {highlightText(ele.title, value.split(" "))}
                                                </p>
                                                <p>{ele.body}</p>
                                            </div>
                                        ))}
                            </div>
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
