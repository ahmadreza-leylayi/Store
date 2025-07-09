'use client'
import { useEffect, useState } from "react";
import { productDatabase } from "@/database/productDatabase";
import AddToCard from "./AddToCard";
import { ProductItemProps } from "./ProductItem";
interface ICardItemProps{
  id: number;
  qty: number;
}

export default function CardItem({id,qty}:ICardItemProps) {

  const [data,setData] = useState({} as ProductItemProps) ;

  useEffect(()=>{
    const found = productDatabase.product.find(p => p.id == id.toString());
    if (found) setData(found);
  },[id])

  return (
<div className="grid grid-cols-12 bg-gray-200 mt-4 items-center">

        <img className="col-span-2" src={data.image} alt="" />


        <div className="col-span-10 p-4">
          <h2 className="text-2xl font-bold">{data.title}</h2>
          <p className="text-gray-600">Product number : <span>{qty}</span></p>
          <p>Price : <span>{data.price}$</span></p>

    <AddToCard id={id.toString()} />
        </div>
      </div>
  )
}
