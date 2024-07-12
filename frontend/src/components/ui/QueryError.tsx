import errorImg from "@/assets/error.png"
import Image from 'next/image';

const QueryError = ({ err }: { err: string }) => {
    return (
        <div className='w-full flex flex-col justify-center items-center gap-2 py-6 text-red-400 font-bold'>
            <Image src={errorImg} alt="error" width={250}></Image>
            <p>{err}</p>
            <p>Content cannot be loaded</p>
        </div>
    )
}

export default QueryError