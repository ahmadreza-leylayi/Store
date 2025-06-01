'use client'
import Container from "@/components/Container";
import axios from "axios";
import { ChangeEvent, useState } from "react";

export default function Dashboard() {
    const [newProduct, setNewProduct] = useState({
        title: "",
        price: "",
        image: "",
        description: ""
    })

    const handleChangeProduct = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setNewProduct({
            ...newProduct,
            [name]: value
        })
    }

    const handleCreateProduct = () => {
        axios({
            method: "post",
            url: "http://localhost:3004/product",
            data: {
                id: Math.floor(Math.random() * 1000).toString(),
                title: newProduct.title,
                price: newProduct.price,
                image: newProduct.image,
                description: newProduct.description
            }
        })
    }

    return (
        <div className="bg-orange-50 min-h-screen py-8 px-4 flex">
            <Container>
                <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Add New Product</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            required
                            onChange={handleChangeProduct}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors"
                            type="text"
                            name="title"
                            placeholder="Product Title"
                        />
                        <input
                            required
                            onChange={handleChangeProduct}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors"
                            type="text"
                            name="price"
                            placeholder="Product Price"
                        />
                        <input
                            required
                            onChange={handleChangeProduct}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors"
                            type="text"
                            name="image"
                            placeholder="Image URL"
                        />
                        <textarea
                            onChange={handleChangeProduct}
                            className="w-full md:col-span-2 h-24 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 transition-colors"
                            name="description"
                            placeholder="Product Description"
                        ></textarea>
                    </div>
                    <button
                        onClick={handleCreateProduct}
                        className="w-full mt-4 bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors duration-200"
                    >
                        Add New Product
                    </button>
                </div>
            </Container>
        </div>
    )
}