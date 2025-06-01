import React from 'react'


export interface ProductItemProps {
    id: string;
    image: string;
    title: string;
    description: string;
    price: number;
}

export interface IProductList{
  first: number|null,
prev: number|null,
next: number|null,
last: number|null,
pages: number,
items: number|null,
data:ProductItemProps[]
}


export default function ProductItem({ image, title, price}: ProductItemProps) {
  return (
 <div className="shadow-md cursor-pointer w-70">
      <img className="w-full h-70" src={image} alt="" />
      <div className="p-2">
        <h3>{title}</h3>
        <p>
          Price : <span>{price}$</span>
        </p>

      </div>


    </div>
  )
}
