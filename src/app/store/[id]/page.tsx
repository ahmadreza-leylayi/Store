import Container from '@/components/Container'
import React from 'react'
import { ProductItemProps } from '@/components/ProductItem'
import AddToCard from '@/components/AddToCard'

interface ProductProps {
    params: { id: string }
}

export default async function Product({ params }: ProductProps) {
    const { id } = params
    const result = await fetch(`http://localhost:3004/product/${id}`)
    const data = await result.json() as ProductItemProps

    return (
        <Container>
            <div className="grid grid-cols-1 md:grid-cols-12 mt-8 shadow-md p-4 md:p-0 bg-white rounded-lg">
                <div className="md:col-span-3">
                    <img
                        className="w-full h-auto object-cover rounded-lg"
                        src={data.image}
                        alt={data.title}
                    />
                </div>
                <div className="md:col-span-9 p-4 flex flex-col justify-center items-start">
                    <h2 className="font-bold text-3xl text-gray-800">{data.title}</h2>
                    <p className="mt-2 text-gray-600">{data.description}</p>
                    <p className="mt-4 text-lg font-semibold text-green-600">
                        Price: <span>{data.price} $</span>
                    </p>
                    <AddToCard id={id} />
                </div>
            </div>
        </Container>
    )
}