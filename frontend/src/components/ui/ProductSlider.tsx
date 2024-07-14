import { ProductSliderDataType } from "@/utils/types"

const ProductSlider = ({ category, allData }: ProductSliderDataType) => {
    return (
        <div>
            <p>{category}</p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {
                    allData.filter(ele => ele.category.includes(category)).map(e => {
                        return <div key={e.id} className="bg-slate-100 p-4">
                            <p>{e.name}</p>
                            <p>
                                {
                                    e.category.map((item, index) => <span key={index}>{`${item} `}</span>)
                                }
                            </p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default ProductSlider