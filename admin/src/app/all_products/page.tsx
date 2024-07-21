import data from "@/assets/data.json"
import pik from "@/assets/bg2.png"
import Image from "next/image"
import { Delete, Edit, Star } from "@mui/icons-material"
import { IconButton } from "@mui/material"

const AllProductsPage = () => {
    return (
        <div>
            <p>{data.length}</p>
            <div className="grid grid-cols-1 mm:grid-cols-2 mv:grid-cols-3 gap-4 14i:gap-6 w-fit mx-auto px-4 sm:px-0">
                {
                    data.map(ele => {
                        return <div key={ele.id} className="bg-[#FCFCFC] w-full mv:w-[150px] sm:w-[180px] md:w-[230px] xl:w-[300px] rounded shadow-sm">
                            <Image src={pik} alt="img" className="rounded-t"></Image>


                            <div className="p-2">
                                <p className="text-gray-700 font-bold text-xl">{ele.name}</p>
                                <p className="text-xs">{ele.category.join(" > ")}</p>
                                <div className="h-14 overflow-y-hidden relative mt-3">
                                    <p className="text-[14px] leading-[16px] text-gray-700">{ele.description}</p>
                                    <div className="h-14 bg-gradient-to-b from-[transparent] to-white absolute bottom-0 left-0 right-0"></div>
                                </div>
                                <div className="flex justify-between items-baseline">
                                    <div>
                                        <span className="text-2xl sm:text-3xl">{ele.reducedPrice}</span>
                                        {ele.discount && <del className="text-red-500 text-xs sm:text-[16px]"><span>{ele.regularPrice}</span></del>}
                                    </div>
                                    <div>
                                        <span className="text-green-700 font-semibold sm:text-xl">{ele.discount}% Off</span>
                                    </div>
                                </div>
                                <div className="flex text-yellow-500">
                                    <p><Star></Star></p>
                                    <p><Star></Star></p>
                                    <p><Star></Star></p>
                                    <p><Star></Star></p>
                                    <p><Star></Star></p>
                                </div>
                                <div className="flex justify-between">
                                    <IconButton sx={{ color: "black" }}>
                                        <Edit></Edit>
                                    </IconButton>
                                    <IconButton sx={{ color: "black" }}>
                                        <Delete></Delete>
                                    </IconButton>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default AllProductsPage