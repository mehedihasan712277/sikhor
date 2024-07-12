import axios from "axios"
import { BannerImageType } from "./types"

export const fetchData = (): Promise<BannerImageType[]> => {
    return axios.get("https://sikhor-server0.vercel.app/carousel").then(res => res.data)
}