import { AiFillStar, AiOutlineShopping, AiOutlineStar } from "react-icons/ai"


export const ProductCard = ({img, name, price}) => {
  return (
    <>
        <div className="border border-gray-200 hover:border-gray-300 hover:scale-105 hover:transition-transform rounded-lg relative">
            <img src={img} alt="" className="rounded-t-lg"/>
            <div className="relative space-y-2 p-4">
                <div className="text-yellow-400 flex gap-[2px] text-[20px]">
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiFillStar/>
                    <AiOutlineStar/>
                </div>
                <h3 className="text-xl font-medium">
                    {name}
                </h3>
                <h3 className="text-2xl font-medium text-red-600">
                    {price}
                </h3>
                <button className="absolute -top-4 right-2 bg-color1 text-white text-[28px] w-[50px] h-[50px] rounded-full grid place-items-center cursor-pointer">
                    <AiOutlineShopping/>
                </button>
            </div>
        </div>
    </>
  )
}
