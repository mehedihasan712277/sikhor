import NavBar from "@/components/shared/NavBar"
import BannerSlider from "@/components/ui/BannerSlider"
import ProductSlider from "@/components/ui/ProductSlider";



const page = async () => {
  const responseForSlider = await fetch("https://sikhor-server0.vercel.app/carousel");
  const sliders = await responseForSlider.json();


  const responseForProduct = await fetch("https://sikhor-server0.vercel.app/product/all", {
    next: {
      revalidate: 5
    }
  })
  const products = await responseForProduct.json();
  return (
    <div className="bg-[#e9e9e9]">
      <NavBar></NavBar>
      <BannerSlider allData={sliders}></BannerSlider>
      <ProductSlider category="Men" allData={products}></ProductSlider>
      {/* <ProductSlider category="Women" allData={products}></ProductSlider> */}
      {/* <ProductSlider category="Children" allData={products}></ProductSlider> */}
    </div>
  )
}

export default page