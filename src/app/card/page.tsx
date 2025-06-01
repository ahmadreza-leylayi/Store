'use client'
import CardItem from "@/components/CardItem";
import Container from "@/components/Container";
import { ProductItemProps } from "@/components/ProductItem";
import { useShoppingCardContext } from "@/context/ShoppingCardContext";
import axios from "axios";
import { useEffect, useState } from "react";


interface IDiscountData{
  id: number,
  code: string,
  percentage: number
}


export default function Card() {
  const {cardItems} = useShoppingCardContext()
  const [discountCode, setDiscountCode] = useState("")
  const [finalPrice,setFinalPrice]= useState(0)
  const [discountedPrice,setDiscountedPrice]= useState(0) 

  const [data,setData] = useState<ProductItemProps[]>([]) ;

  useEffect(()=>{
    
    axios(`http://localhost:3004/product`).then((result)=>{
     
      const {data} = result;
      setData(data)
      console.log(data);
      
    })

  },[])
          const totalPrice = cardItems.reduce((total,item)=>{
               const selectedProduct = data.find((product)=> product.id == item.id.toString());
            return total + (selectedProduct?.price||0)* item.qty },0)

  const handleSubmitDiscount = ()=>{
    axios(`http://localhost:3004/discount?code=${discountCode}`).then((result)=>{
      const data = result.data as IDiscountData[]
      const discountedPrice = totalPrice * data[0].percentage / 100
      const finalPrice = totalPrice - discountedPrice
      setFinalPrice(finalPrice)
      setDiscountedPrice(discountedPrice)
    })
  }


  return (
    <Container>
      <h1 className="my-4 font-bold">Sopping Basket</h1>

      <div>
    {cardItems.map((item) =>(
      
      <CardItem key={item.id} {...item} />
    ))}

      </div>


      <div>
        <h3>Total price: <span>
                {totalPrice}
          $</span></h3>
        <h3>Your profit from this purchase: <span>{discountedPrice}$</span></h3>
        <h3>Final price: <span>{finalPrice}$</span></h3>

        <div className="my-4">
          <input className="border-gray-700 border rounded px-4 py-1" placeholder="Enter discount code" onChange={(e)=>setDiscountCode(e.target.value)} type="text" />
          <button className="bg-sky-800 rounded  px-4 py-1 text-white" onClick={handleSubmitDiscount}>Apply discount code</button>
        </div>
      </div>
    </Container>
  )
}
