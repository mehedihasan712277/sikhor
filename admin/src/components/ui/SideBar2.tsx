"use client"

import { ArrowRight, Home, Settings } from "@mui/icons-material"
import Link from "next/link"
import { useRef } from "react"

const SideBar2 = () => {
    // const list = useRef<HTMLDivElement>(null!);
    // const arrow = useRef<HTMLDivElement>(null!);

    const showOptions = () => {
        // arrow.current.classList.toggle("rotate-90");
        // list.current.classList.toggle("h-fit");
        document.getElementById("list")?.classList.toggle("h-fit")
        document.getElementById("arrow")?.classList.toggle("rotate-90")
    }
    const data = [
        {
            label: "Home",
            icon: <Home></Home>,
            link: "/",
            subMenu: []
        },
        {
            label: "Product",
            icon: <Settings></Settings>,
            link: "/product",
            subMenu: [
                {
                    label: "Product1",
                    icon: <Settings></Settings>,
                    link: "/product",
                    // subMenu: []
                },
                {
                    label: "Product2",
                    icon: <Settings></Settings>,
                    link: "/product",
                    // subMenu: []
                }
            ]
        },
        {
            label: "Home2",
            icon: <Home></Home>,
            link: "/",
            subMenu: []
        },
    ]
    return (
        <div className="flex flex-col gap-4 bg-blue-950 w-[300px] p-6 h-[80vh]">
            {
                data.map(ele => {
                    return <div key={ele.label}>
                        {
                            Boolean(ele.subMenu.length) ?
                                <div className="bg-blue-800 rounded relative">
                                    <div className="flex justify-between items-center text-gray-300 font-semibold p-4 rounded transition-all ease-in-out duration-300 hover:bg-blue-600 hover:text-gray-100" onClick={showOptions}>
                                        <div className="space-x-4">
                                            <span>{ele.icon}</span>
                                            <span>{ele.label}</span>
                                        </div>
                                        {/* <div className="" ref={arrow}><ArrowRight></ArrowRight></div> */}
                                        <div className="" id="arrow"><ArrowRight></ArrowRight></div>
                                    </div>

                                    {/* <div className="h-0 overflow-y-hidden transition-all ease-in-out duration-300" ref={list}> */}
                                    <div className="h-0 overflow-y-hidden transition-all ease-in-out duration-300" id="list">
                                        <div className="flex flex-col gap-2 pl-6 py-2 pr-2">
                                            {
                                                ele.subMenu.map(e => {
                                                    return <Link href={e.link} key={e.label}>
                                                        <div className="flex gap-4 items-center bg-blue-700 text-gray-300 font-semibold p-4 rounded transition-all ease-in-out duration-300 hover:bg-blue-600 hover:text-gray-100">
                                                            <span>{e.icon}</span>
                                                            <span>{e.label}</span>
                                                        </div>
                                                    </Link>
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                :
                                <Link href={ele.link}>
                                    <div className="flex gap-4 items-center bg-blue-800 text-gray-300 font-semibold p-4 rounded transition-all ease-in-out duration-300 hover:bg-blue-600 hover:text-gray-100">
                                        <span>{ele.icon}</span>
                                        <span>{ele.label}</span>
                                    </div>
                                </Link>
                        }
                    </div>
                })
            }
        </div>
    )
}

export default SideBar2