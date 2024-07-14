import NavBar from "@/components/shared/NavBar"
import BannerSlider from "@/components/ui/BannerSlider"
import { ProductDataType } from "@/utils/types";



const page = async () => {
  const res = await fetch("https://sikhor-server0.vercel.app/product/all")
  const products: Promise<ProductDataType[]> = await res.json();
  return (
    <div>
      <NavBar></NavBar>
      {(await products).length}
      <BannerSlider></BannerSlider>
    </div>
  )
}

export default page