import { BsArrowRight } from "react-icons/bs"


export const Section1 = () => {
  return (
    <div className="container">
        <div className="grid xl:grid-cols-3 xl:grid-rows-2 gap-4">
            <div className="xl:col-span-2 xl:row-start-1 xl:row-span-2 relative">
                <img src="https://images.pexels.com/photos/2064359/pexels-photo-2064359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full h-full object-cover rounded-lg"/>

                <div className="absolute top-[20%] max-w-[470px] sm:ml-16 ml-8 sm:top-[25%] sm:space-y-4 xl:top-[25%]">
                    <p className="text-2xl hidden sm:block">100% Original</p>
                    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold">
                        El yogurt y las frutas con fresas
                    </h2>
                    <p className="text-gray-500 text-xl pt-4">
                        A partir de
                    </p>
                    <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-2 pb-4">
                        s/19.50
                    </div>
                    <div className="bg-color2 hover:bg-color1 text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] cursor-pointer sm:px-6 sm:py-3">
                        Compra <BsArrowRight/>
                    </div>
                </div>
            </div>
            <div className="relative xl:row-start-1 xl:col-start-3 xl:row-end-[-0]">
                <img src="https://images.pexels.com/photos/5947029/pexels-photo-5947029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full h-full object-cover rounded-lg"/>
                <div className="absolute top-[10%] max-w-[470px] md:max-w-[500px] sm:ml-7 ml-4 sm:top-[30%] sm:space-y-2 xl:top-[15%]">
                    <p className="text-2xl hidden sm:block">100% Original</p>
                    <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold">
                        El yogurt y las frutas con fresas
                    </h2>
                    <p className="text-gray-500 text-xl pt-4 md:pt-0">
                        A partir de
                    </p>
                    <div className="flex flex-col md:gap-5 sm:flex-col  md:flex-row  md:items-center ">
                        <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-1 pb-4">
                            s/19.50
                        </div>
                        <div className="bg-color2 hover:bg-color1 text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] cursor-pointer sm:px-6 sm:py-3">
                            Compra <BsArrowRight/>
                        </div>
                    </div>                   
                    
                </div>
            </div>
            <div className="relative xl:col-start-3 xl:row-start-2 xl:row-end-2">
                <img src="https://images.pexels.com/photos/5947029/pexels-photo-5947029.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="w-full h-full object-cover rounded-lg"/>
                <div className="absolute top-[10%] max-w-[470px] md:max-w-[500px] sm:ml-7 ml-4 sm:top-[30%] sm:space-y-2 xl:top-[15%]">
                    <p className="text-2xl hidden sm:block">100% Original</p>
                    <h2 className="text-2xl sm:text-2xl md:text-3xl  font-bold">
                        El yogurt y las frutas con fresas
                    </h2>
                    <p className="text-gray-500 text-xl pt-4">
                        A partir de
                    </p>
                    <div className="flex flex-col md:gap-5 sm:flex-col  md:flex-row  md:items-center">
                        <div className="font-medium text-red-600 text-2xl sm:text-4xl sm:pb-1 pb-4">
                            s/19.50
                        </div>
                        <div className="bg-color2 hover:bg-color1 text-white rounded-full w-fit flex items-center gap-4 px-4 py-2 text-[14px] cursor-pointer sm:px-6 sm:py-3">
                            Compra <BsArrowRight/>
                        </div>
                    </div>   
                </div>
            </div>
        </div>
    </div>
  )
}
