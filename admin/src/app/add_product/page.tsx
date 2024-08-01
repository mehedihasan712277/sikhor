"use client"
import { TextField } from "@mui/material"
import category from "@/assets/category.json"

const AddProductPage = () => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const form = e.target;
        const name = form.productName.value;
    }
    return (
        <div className="p-6">
            <form onSubmit={handleSubmit}>
                <div className="bg-[#FCFCFC] p-6 rounded-lg space-y-4 w-full mv:w-[500px]">
                    <TextField label="Product Name" name="name" type="text" sx={{ width: "100%" }}></TextField>
                    <TextField label="Product Description" name="description" type="text" sx={{ width: "100%" }}></TextField>
                    <TextField label="Regular Price" name="regularPrice" type="number" sx={{ width: "100%" }}></TextField>
                    <TextField label="Discount" name="discount" type="number" sx={{ width: "100%" }}></TextField>
                    <TextField label="Reduced Price" name="reducedPrice" type="number" sx={{ width: "100%" }}></TextField>
                </div>
                <div>
                </div>
            </form>
        </div>
    )
}

export default AddProductPage