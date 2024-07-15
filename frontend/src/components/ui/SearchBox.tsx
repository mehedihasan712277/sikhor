"use client";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/utils/getAllProducts";
import no_match from "@/assets/no_match.png";
import { ProductDataType } from "@/utils/types";

const SearchBox = () => {
    const [value, setValue] = useState<string>("");

    const { data, isLoading, error } = useQuery({
        queryKey: ["all-product"],
        queryFn: fetchProducts,
    });

    if (isLoading) return <p>loading...........</p>;

    if (error) return <p>{error.message}</p>;

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        value ? setValue(e.target.value) : setValue(e.target.value.trim());
    };

    const highlightText = (text: string, highlights: string[]) => {
        const regex = new RegExp(`(${highlights.join("|")})`, "gi");
        return text.split(regex).map((part, i) =>
            highlights.some((highlight) => part.toLowerCase() === highlight.toLowerCase()) ? (
                <span key={i} className="bg-yellow-300">
                    {part}
                </span>
            ) : (
                part
            )
        );
    };

    const filteredProducts = Array.from(
        new Set(
            value
                .split(" ")
                .filter(ele => !!ele)
                .flatMap((term) => data?.filter((product) => product.name.toLowerCase().includes(term.toLowerCase())))
        )
    );
    const fdata = value
        .split(" ").filter(ele => !!ele)
        .map(e => filteredProducts.sort((a, b) => (a as ProductDataType).name.toLowerCase().indexOf(e.toLowerCase()) - (b as ProductDataType).name.toLowerCase().indexOf(e.toLowerCase())))
    return (
        <div className="relative">
            <Paper component="form" sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: { md: 400 } }}>
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="search product by name"
                    inputProps={{ "aria-label": "search product by name" }}
                    onChange={handleSearch}
                    value={value}
                />
                <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                    <SearchIcon />
                </IconButton>
            </Paper>

            <div className={value ? "fixed top-[124px] md:top-[92px] z-10 left-0 right-0 overflow-y-auto bg-white" : "hidden"} style={{ height: "calc(100vh - 100px)" }}>
                {value && (
                    fdata.length ? (
                        <div>
                            <p className="text-xl font-bold text-gray-700 pt-4 pl-8">Total Search Results: {filteredProducts.length}</p>
                            <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                                {filteredProducts.map((product) => (
                                    <div key={product?.id} className="bg-slate-100 p-4">
                                        <Link href="/men">
                                            <p className="font-bold" onClick={() => setValue("")}>
                                                {highlightText((product as ProductDataType).name, value.split(" "))}
                                            </p>
                                            <p>{product?.description}</p>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col justify-center items-center gap-4" style={{ height: "calc(100vh - 100px)" }}>
                            <Image src={no_match} alt="no data" width={200} />
                            <p className="text-xl font-bold text-gray-700">No data found</p>
                            <Button variant="outlined" onClick={() => setValue("")}>Go back</Button>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default SearchBox;
