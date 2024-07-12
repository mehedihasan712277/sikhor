import axios from "axios"
import { CategoryType } from "./types"

export const fetchAllCategory = (): Promise<CategoryType[]> => {
    return axios.get("https://sikhor-server0.vercel.app/category/all").then(res => res.data)
}