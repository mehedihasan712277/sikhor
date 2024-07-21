"use client"
import { Close, List } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import Sidebar from "./Sidebar"

const showSideBar = () => {
    document.getElementById("sidebar")?.classList.remove("w-0")
    document.getElementById("sidebar")?.classList.add("w-[100vw]")
}
const hideSideBar = () => {
    document.getElementById("sidebar")?.classList.remove("w-[100vw]")
    document.getElementById("sidebar")?.classList.add("w-0")
}
const Navbar = () => {
    return (
        <div className="">
            <nav className="bg-[#1d2736] text-[#94a3b8] h-[100px] flex items-center">
                <IconButton className="lg:hidden" sx={{ color: "white", marginLeft: "16px" }} onClick={showSideBar}><List></List></IconButton>
            </nav>
            <div id="sidebar" className="w-0 overflow-x-hidden fixed top-0 right-0 left-0 bottom-0 z-30 transition-width duration-300 flex">
                <Sidebar></Sidebar>
                <div style={{ width: "calc(100vw - 250px)" }} className="bg-black bg-opacity-60" onClick={hideSideBar}>
                    <div className="text-white text-end p-4">
                        <Close></Close>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar