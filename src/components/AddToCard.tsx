'use client'

import { useShoppingCardContext } from "@/context/ShoppingCardContext"
interface IAddToCard {
    id: string;
}

export default function AddToCard({id}: IAddToCard) {

const {cardItems,handleIncreaseProductQty,getProductQty,handleDecreaseProductQty,handleRemoveProduct} = useShoppingCardContext()
console.log(cardItems);

  return (
<div>
            <div>
            <button onClick={()=>handleDecreaseProductQty(parseInt(id))} className='px-4 py-2 bg-blue-500 text-white rounded-lg mt-4'>-</button>
            <span className='mx-4'>{getProductQty(parseInt(id))}</span>
            <button onClick={() => handleIncreaseProductQty(parseInt(id))} className='px-4 py-2 bg-blue-500 text-white rounded-lg mt-4'>+</button>

          </div>


          <button onClick={()=>handleRemoveProduct(parseInt(id))} className="bg-red-400 text-white rounded px-7 py-2 mt-4">Remove </button>
</div>
  )
}
