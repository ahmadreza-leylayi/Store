'use client'
import { useRouter, useSearchParams } from 'next/navigation'
import React, { useState } from 'react'

export default function Search() {
    const router = useRouter()
    const searchParams = useSearchParams()
const [search,setSearch]=useState("")
const handleSearch=()=>{

    const currentSearch = new URLSearchParams(searchParams.toString())

    currentSearch.set("title",search.trim())

   router.push(`/store?${currentSearch.toString()}`)}
  return (
    <div className='flex gap-2 mb-4'> 
      <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Search by title' className='bg-orange-100 text-black px-4 py-2 rounded-md' />
      <button onClick={handleSearch} className='bg-orange-500 text-white px-4 py-2 rounded-md'>Search</button>
    </div>
  )
}
