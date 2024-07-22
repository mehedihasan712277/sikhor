"use client"
import data from "@/assets/data.json"
import pik from "@/assets/bg2.png"
import Image from "next/image"
import { Delete, Edit, Sort, Star } from "@mui/icons-material"
import { Button, IconButton } from "@mui/material"
import Link from "next/link"
import category from "@/assets/category.json"
import { useState } from "react"

const AllProductsPage = () => {
    // to filter products---------------------------
    const [mainCategory, setMainCategory] = useState("All")
    const [subCategory, setSubCategory] = useState("All")
    const [subSubCategory, setSubSubCategory] = useState("All")

    const reset = () => {
        setMainCategory("All");
        setSubCategory('All');
        setSubSubCategory('All');
    }

    const handleCategory = (e: string) => {
        setMainCategory(e);
        Boolean(subCategory) && subCategory !== "All" && setSubCategory('All');
    }
    const handleSubCategory = (e: string) => {
        setSubCategory(e);
        Boolean(subSubCategory) && subSubCategory !== "All" && setSubSubCategory('All');
    }
    const handleSubSubCategory = (e: string) => {
        setSubSubCategory(e)
    }

    let subCategories = category.filter(ele => ele.name === mainCategory)
    let subSubCategories = subCategories[0]?.subCategory?.filter(ele => ele.name === subCategory)

    const new_data = data.filter(ele => {
        if (mainCategory === "All") {
            return true
        }
        else {
            if (subCategory === "All") {
                return ele.category.includes(mainCategory)
            }
            else {
                if (subSubCategory === "All") {
                    return ele.category.includes(mainCategory) && ele.category.includes(subCategory)
                }
                else {
                    return ele.category.includes(mainCategory) && ele.category.includes(subCategory) && ele.category.includes(subSubCategory)
                }
                return ele.category.includes(mainCategory) && ele.category.includes(subCategory)
            }
            return ele.category.includes(mainCategory)
        }
    })
    return (
        <div>
            <div className="py-4 px-2 md:px-4 flex flex-wrap justify-between items-start gap-2 sticky top-0 z-10 bg-[#e9e9e9]">
                <div className="flex flex-col sm:flex-row items-start gap-1 md:gap-4 text-xs sm:text-[16px]">
                    <div>
                        <div className="flex item-center">
                            <span className="text-black"><Sort></Sort></span>
                            <p className="text-gray-700 font-semibold text-xl">Filter</p>
                        </div>
                        <p>Total: {new_data.length}</p>
                    </div>

                    {/* _________________________main category drop-down box________________________________ */}
                    <select name="category" onChange={(e) => handleCategory(e.target.value)} value={mainCategory} className="bg-[#FCFCFC] p-1 rounded outline-none">
                        <option value="All">All</option>
                        {
                            category.map(ele => <option key={ele.name} value={ele.name}>{ele.name}</option>)
                        }
                    </select>

                    {/* _________________________ subcategory drop-down box________________________________ */}
                    {
                        (mainCategory !== "All" && subCategories[0].subCategory?.length) && <>
                            <select name="subCategories" onChange={(e) => handleSubCategory(e.target.value)} value={subCategory} className="bg-[#FCFCFC] p-1 rounded outline-none">
                                <option value="All">All</option>
                                {
                                    subCategories[0].subCategory.map(ele => <option key={ele.name} value={ele.name}>{ele.name}</option>)
                                }
                            </select>
                        </>
                    }

                    {/* _________________________subSubcategory drop-down box________________________________ */}
                    {
                        (subCategory !== "All" && (subSubCategories && subSubCategories[0]?.subSubCategory?.length)) && <>
                            <select name="subSubCategories" onChange={e => handleSubSubCategory(e.target.value)} value={subSubCategory} className="bg-[#FCFCFC] p-1 rounded outline-none">
                                <option value="All">All</option>
                                {
                                    subSubCategories[0].subSubCategory.map(ele => <option key={ele}>{ele}</option>)
                                }
                            </select>
                        </>
                    }
                </div>
                {
                    data.length === new_data.length || <Button variant="contained" onClick={reset}>reset</Button>
                }
            </div>



            {/* ------------------------product cards--------------------------- */}
            <div className="grid grid-cols-1 mm:grid-cols-2 mv:grid-cols-3 gap-4 14i:gap-6 w-fit mx-auto py-6 px-4 sm:px-0">

                {
                    new_data.length ?
                        new_data.map(ele => {
                            return <div key={ele.id} className="bg-[#FCFCFC] w-full mv:w-[150px] sm:w-[180px] md:w-[230px] xl:w-[300px] rounded shadow-sm">
                                <Link href={`/all_products/${ele.id}`}>
                                    <Image src={pik} alt="img" className="rounded-t scale-175"></Image>

                                    <div className="p-2">
                                        <p className="text-gray-700 font-bold text-xl">{ele.name}</p>
                                        <p className="text-xs text-gray-500">{ele.category.join(" > ")}</p>
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
                                    </div>
                                </Link>

                                {/* ----------buttons-------------- */}
                                <div className="flex justify-between px-2 pb-2">
                                    <IconButton sx={{ color: "black" }}>
                                        <Edit></Edit>
                                    </IconButton>
                                    <IconButton sx={{ color: "black" }}>
                                        <Delete></Delete>
                                    </IconButton>
                                </div>
                            </div>
                        })
                        :
                        <div>reset</div>
                }
            </div>
        </div>
    )
}

export default AllProductsPage