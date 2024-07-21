import { Add } from "@mui/icons-material"

const page = () => {
  return (
    <div>
      <div className="bg-red-200 14i:bg-red-400 15i:bg-red-900">
        indicator
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 p-4">
        <div className="text-[#697AD2] bg-[#FCFCFC] p-2 xl:p-4 rounded-lg shadow-sm flex gap-2">
          <div className="h-6 w-6 xl:h-8 xl:w-8 bg-[#697AD2] text-white flex justify-center items-center"><Add></Add></div>
          <div>
            <p className="text-sm xl:text-xl font-bold">Total Products</p>
            <p className="xl:text-2xl font-extrabold">120</p>
          </div>
        </div>

        <div className="text-[#9F76DD] bg-[#FCFCFC] p-2 xl:p-4 rounded-lg shadow-sm flex gap-2">
          <div className="h-6 w-6 xl:h-8 xl:w-8 bg-[#9F76DD] text-white flex justify-center items-center"><Add></Add></div>
          <div>
            <p className="text-sm xl:text-xl font-bold">Total Orders</p>
            <p className="xl:text-2xl font-extrabold">20</p>
          </div>
        </div>

        <div className="text-[#61B566] bg-[#FCFCFC] p-2 xl:p-4 rounded-lg shadow-sm flex gap-2">
          <div className="h-6 w-6 xl:h-8 xl:w-8 bg-[#61B566] text-white flex justify-center items-center"><Add></Add></div>
          <div>
            <p className="text-sm xl:text-xl font-bold">Total Sold</p>
            <p className="xl:text-2xl font-extrabold">10</p>
          </div>
        </div>

        <div className="text-[#E95D5D] bg-[#FCFCFC] p-2 xl:p-4 rounded-lg shadow-sm flex gap-2">
          <div className="h-6 w-6 xl:h-8 xl:w-8 bg-[#E95D5D] text-white flex justify-center items-center"><Add></Add></div>
          <div>
            <p className="text-sm xl:text-xl font-bold">Total Users</p>
            <p className="xl:text-2xl font-extrabold">100</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page