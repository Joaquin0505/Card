import { BsSearch } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Conteo } from "./moleculas/Conteo";



export const Bar = () => {
  return (
    <>
        <div className="sticky top-0 bg-white z-10">
            <div className="container hidden lg:block">
                <div className="flex justify-between items-center p-8">
                    {/*Logotipo*/}
                    <h1 className="text-4xl font-medium">Logotipo</h1>
                    {/*busqueda*/}
                    <div className="relative w-full max-w-[500px]">
                        <input type="text" placeholder='Buscar productos' className="bg-[#f2f3f5] border-none outline-none px-6 py-3 rounded-[30px] w-full"/>
                        <BsSearch className="absolute top-0 right-0 mt-4 mr-5 text-gray-500" size={20}/>                    
                    </div>
                    {/*iconos*/}
                    <div className="flex gap-4">
                        <div className="icon_">
                            <AiOutlineUser/>                        
                        </div>
                        <div className="icon_ relative">
                            <AiOutlineShoppingCart/>
                            <Conteo size="w-[25px] h-[25px]"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
