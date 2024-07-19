import React from 'react'
import { ProductCard } from './ProductCard'

const data =[
    {id:0, img:'p1.webp', name:"Naranja", price:"s/15.00"},
    {id:1, img:'p2.jpeg', name:"Naranja", price:"s/15.00"},
    {id:2, img:'p3.webp', name:"Naranja", price:"s/15.00"},
    {id:3, img:'p4.jpeg', name:"Naranja", price:"s/15.00"},
    {id:4, img:'p1.webp', name:"Naranja", price:"s/15.00"},
    {id:5, img:'p2.jpeg', name:"Naranja", price:"s/15.00"},
    {id:6, img:'p3.webp', name:"Naranja", price:"s/15.00"},
    {id:7, img:'p4.jpeg', name:"Naranja", price:"s/15.00"},
    {id:8, img:'p1.webp', name:"Naranja", price:"s/15.00"},
    {id:9, img:'p2.jpeg', name:"Naranja", price:"s/15.00"},
    {id:10, img:'p3.webp', name:"Naranja", price:"s/15.00"},
]


export const Product = () => {
  return (
    <>
        <div className='container pt-16'>
            <div className='lg:flex justify-between items-center'>
                <div>
                    <h3 className='font-medium text-2xl'>Frutas y vegetales</h3>
                    <p className='text-gray-600 mt-2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>

                <div className='flex space-x-4 mt-8 lg:mt-0'>
                    <button className='boton_btn'>
                        Frutas
                    </button>
                    <button className='text-gray-600 hover:text-color1'>
                        Vegetales
                    </button>
                    <button className='text-gray-600 hover:text-color1'>
                        Yogures y bebidas
                    </button>
                </div>
            </div>

            {/*Productos*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-4'>
                <div>
                    <img src="/feature1.jpg" alt="" className='w-full h-full object-cover'/>
                </div>
                {
                    data.map(element=>(

                        <ProductCard key={element.id} img={element.img} name={element.name} price={element.price}/>
                    ))
                }   
            </div>
        </div>    
    </>
  )
}
