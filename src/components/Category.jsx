import { CategoryCard } from "./CategoryCard"

const data =[
    {
        id:0,
        name:"Frutas frescas",
        count:"20 productos",
        img:"cat1.jpeg"
    },
    {
        id:1,
        name:"Vegetales",
        count:"15 productos",
        img:"cat2.webp"
    },
    {
        id:2,
        name:"Fruta",
        count:"8 productos",
        img:"cat3.webp"
    },
    {
        id:3,
        name:"Manzana",
        count:"8 productos",
        img:"cat4.webp"
    },
    {
        id:4,
        name:"Frutas frescas",
        count:"20 productos",
        img:"cat1.jpeg"
    },
    {
        id:5,
        name:"Vegetales",
        count:"15 productos",
        img:"cat2.webp"
    },
    {
        id:6,
        name:"Fruta",
        count:"8 productos",
        img:"cat3.webp"
    },
    {
        id:7,
        name:"Manzana",
        count:"8 productos",
        img:"cat4.webp"
    },


]

export const Category = () => {
  return (
    <>
        <div className="container pt-16">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    data.map(element=>(
                        <CategoryCard key={element.id} img={element.img} name={element.name} count={element.count}/>
                    ))
                }             
            </div>
        </div>
    
    </>
  )
}
