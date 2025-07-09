'use client'
import Container from "@/components/Container";
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
        alert("افزودن محصول جدید فقط به صورت دستی در فایل داده امکان‌پذیر است.");
    }

    return (
        <Container>
            <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
            <div className="mb-4">
                <input name="title" value={newProduct.title} onChange={handleChangeProduct} placeholder="Title" className="border p-2 mr-2" />
                <input name="price" value={newProduct.price} onChange={handleChangeProduct} placeholder="Price" className="border p-2 mr-2" />
                <input name="image" value={newProduct.image} onChange={handleChangeProduct} placeholder="Image URL" className="border p-2 mr-2" />
                <textarea name="description" value={newProduct.description} onChange={handleChangeProduct} placeholder="Description" className="border p-2 mr-2" />
                <button onClick={handleCreateProduct} className="bg-blue-500 text-white px-4 py-2 rounded">Add Product</button>
            </div>
            <p className="text-red-500">برای افزودن محصول جدید، لطفاً داده را به صورت دستی به فایل productDatabase.ts اضافه کنید.</p>
        </Container>
    )
}