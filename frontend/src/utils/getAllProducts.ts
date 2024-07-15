import axios from "axios"
import { ProductDataType } from "./types"

export const fetchProducts = (): Promise<ProductDataType[]> => {
    return axios.get("https://sikhor-server0.vercel.app/product/all").then(res => res.data)
}