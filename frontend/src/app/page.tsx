import NavBar from "@/components/shared/NavBar"
import BannerSlider from "@/components/ui/BannerSlider"
import ProductSlider from "@/components/ui/ProductSlider";



const page = async () => {
  const res = await fetch("https://sikhor-server0.vercel.app/product/all")
  const products = await res.json();
  return (
    <div>
      <NavBar></NavBar>
      <BannerSlider></BannerSlider>
      <ProductSlider category="Men" allData={products}></ProductSlider>
    </div>
  )
}

export default page