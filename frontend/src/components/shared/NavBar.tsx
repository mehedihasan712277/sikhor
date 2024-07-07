import Image from "next/image"
import SearchBox from "../ui/SearchBox"
import logo from "@/assets/logo.jpg"
import Link from "next/link"
const NavBar = () => {
    return (
        <main>
            <div className="flex justify-between items-center bg-white">
                <div>
                    <Image src={logo} alt="sikhor" width={100}></Image>
                </div>
                <SearchBox></SearchBox>
            </div>
            <div className="flex justify-center gap-4 text-white bg-black py-4">
                <Link href="/">Home</Link>
                <Link href="/">Home</Link>
                <Link href="/">Home</Link>
                <Link href="/">Home</Link>
            </div>
        </main>
    )
}

export default NavBar