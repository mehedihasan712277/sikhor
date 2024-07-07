import notfound from "@/assets/notfound.png"
import Image from "next/image"
import Link from "next/link"

const notFound = () => {
    return (
        <div>
            <Image src={notfound} alt="not-found" className="mx-auto"></Image>
            <div className="flex flex-col items-center gap-4">
                {/* <p className="text-5xl font-bold text-red-600">Opps</p> */}
                <p className="text-5xl font-bold text-red-600">Page Not Found</p>
                <Link href="/">
                    <button className="bg-red-600 rounded px-4 py-2 text-white"> Back to home</button>
                </Link>
            </div>
        </div>
    )
}

export default notFound