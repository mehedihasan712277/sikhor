import Image from "next/image"
import SearchBox from "../ui/SearchBox"
import logo from "@/assets/logo.jpg"
import Link from "next/link"
import { Badge, Box, Stack } from "@mui/material"
import { AccountCircle, ShoppingCart } from "@mui/icons-material"
const NavBar = () => {
    return (
        <main>
            <div className="flex justify-between items-center bg-white">
                <div>
                    <Image src={logo} alt="sikhor" width={100}></Image>
                </div>
                <SearchBox></SearchBox>
            </div>
            <div className="bg-white w-full py-3">
                <Stack direction="row" spacing={4} justifyContent="end">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <Badge color="primary" badgeContent={1} sx={{ zIndex: "1" }}>
                            <ShoppingCart />
                        </Badge>
                        <span>Cart</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <AccountCircle></AccountCircle>
                        <span>Create Account</span>
                    </div>
                </Stack>
            </div>
            <div className="flex justify-center gap-4 text-white bg-black py-4">
                <Link href="/">Home</Link>
                <Link href="/men">Men</Link>
                <Link href="/women">Women</Link>
                <Link href="/">Home</Link>
            </div>
        </main>
    )
}

export default NavBar