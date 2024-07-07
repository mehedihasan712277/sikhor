import { ProductDataType } from "./types";

export const getAllProductsData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data: ProductDataType[] = await res.json();
    return data;
}