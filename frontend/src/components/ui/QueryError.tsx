import errorImg from "@/assets/error.png"
import Image from 'next/image';

const QueryError = ({ err, cls, msg = "" }: { err: string, cls: string, msg?: string }) => {
    return (
        <div className='w-full flex flex-col justify-center items-center gap-2 py-6 text-red-400 font-bold'>
            <div className={`${cls}`}>
                <Image src={errorImg} alt="error" width={250}></Image>
            </div>
            <p>{err}</p>
            <p>{msg}</p>
        </div>
    )
}

export default QueryError