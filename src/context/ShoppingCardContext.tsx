'use client'

import { createContext, useState , useContext, useEffect} from "react";
import Cookies from "js-cookie"




type ShoppingCardContextProviderProps = {
    children: React.ReactNode
}

type CardItems = {
    id: number,
    qty: number,
}

type ShoppingCardContext={
    cardItems : CardItems[],
    handleIncreaseProductQty: (id:number) => void
    getProductQty: (id:number) => number | undefined
    cardTotalQty:number
    handleDecreaseProductQty: (id:number) => void
    handleRemoveProduct: (id:number) => void
    checkCookie: boolean
}


const shoppingCardContext = createContext({} as ShoppingCardContext)

export const useShoppingCardContext = () => {
    return useContext(shoppingCardContext)
}
const checkCookie = Cookies.get('token') ? true : false


export default function ShoppingCardContextProvider({children}:ShoppingCardContextProviderProps){

    const [cardItems,setCardItems] = useState<CardItems[]>([])

    const cardTotalQty = cardItems.reduce((totalQty,item)=>{
        return totalQty + item.qty
    },0)

    const getProductQty = (id :number)=>{
       return cardItems.find(item => item.id ==id )?.qty || 0
    }

const handleIncreaseProductQty=(id:number)=>{
    setCardItems(currentItem   =>{
        const isNotProductExist = currentItem.find(item=> item.id == id) == null;
        if(isNotProductExist){
            return [...currentItem,{id: id,qty: 1}]
        }

        else{
            return currentItem.map(item => {
                if (item.id == id){
                    return {...item,qty: item.qty + 1}
                }
                else{
                    return item
                }
            })
        }

    })
}


const handleDecreaseProductQty = (id:number)=>{
    setCardItems(currentItem =>{
     const  isLastOne = currentItem.find(item=>item.id == id)?.qty == 1 ;
     if (isLastOne){
       return currentItem.filter(item=>item.id != id)
     }
     else{
        return currentItem.map(item=>{
            if (item.id == id){
                return {...item,qty:item.qty-1}
            }else{
                return item;
            }
        })
     }
        

    }
    )
}



const handleRemoveProduct = (id:number)=>{
setCardItems(currentItem =>{
    return currentItem.filter(item => item.id != id)

}
)}

useEffect(()=>{
    const stored = localStorage.getItem('cardItems');
    if (stored){
        setCardItems(JSON.parse(stored))
    }
},[])

useEffect(() => {

localStorage.setItem('cardItems',JSON.stringify(cardItems))
}, [cardItems])

return (
    <shoppingCardContext.Provider value={{cardItems,handleIncreaseProductQty,getProductQty,cardTotalQty,handleDecreaseProductQty,handleRemoveProduct,checkCookie}}>
        {children}
    </shoppingCardContext.Provider>
)

    
}