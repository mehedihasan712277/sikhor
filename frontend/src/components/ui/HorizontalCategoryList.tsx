"use client"
import { fetchAllCategory } from '@/utils/getAllCategory';
import { Stack } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import QueryError from './QueryError';
import Link from 'next/link';

const HorizontalCategoryList = () => {
    const { data, isLoading, error } = useQuery({ queryKey: ["category"], queryFn: fetchAllCategory })

    if (isLoading) {
        return <p className='text-center py-3'>Loading....</p>
    }

    if (error) {
        return <QueryError err={error.message} cls='hidden'></QueryError>
    }
    return (
        <div className='bg-black text-white'>
            <Stack direction={"row"} spacing={3} justifyContent={"center"}>
                {
                    data?.map(ele => <div key={ele.id}>
                        <p>
                            {ele.name}
                        </p>

                    </div>)
                }
            </Stack>
        </div>
    )
}

export default HorizontalCategoryList