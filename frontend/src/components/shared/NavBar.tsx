import Image from "next/image"
import SearchBox from "../ui/SearchBox"
import logo from "@/assets/logo.jpg"
import Link from "next/link"
import { Badge, Stack } from "@mui/material"
import { AccountCircle, ShoppingCart } from "@mui/icons-material"
import MenuDrawer from "../ui/Drawer"
import HorizontalCategoryList from "../ui/HorizontalCategoryList"


const NavBar = () => {
    return (
        <main>
            {/* ------------------medium device to upper----------------- */}
            <div className="hidden md:block">

                <div className="flex justify-between items-center bg-white">
                    {/* --------logo------- */}
                    <div>
                        <Image src={logo} alt="sikhor" width={100}></Image>
                    </div>
                    {/* --------search box------- */}
                    <SearchBox></SearchBox>
                </div>

                {/* -----------icons------------- */}
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

                {/* ----------links-------------- */}
                <HorizontalCategoryList></HorizontalCategoryList>

            </div>




            {/* ------------------small device----------------- */}
            <div className="md:hidden px-4 pb-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div>
                            <Image src={logo} alt="sikhor" width={72}></Image>
                        </div>
                        <MenuDrawer></MenuDrawer>
                    </div>

                    <Stack direction="row" spacing={2} justifyContent="end">
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <Badge color="primary" badgeContent={1} sx={{ zIndex: "1" }}>
                                <ShoppingCart />
                            </Badge>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                            <AccountCircle></AccountCircle>
                        </div>
                    </Stack>
                </div>
                <SearchBox></SearchBox>
            </div>
        </main>
    )
}

export default NavBar