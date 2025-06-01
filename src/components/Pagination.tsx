'use client';

import { useRouter, useSearchParams } from "next/navigation";
import ReactPaginate from "react-paginate";

export default function Pagination({pageCount}:{pageCount:number}) {
   const searchParams = useSearchParams()



  const  router = useRouter()

    const  handlePageClick= (e:{selected:number}) =>{
       const page = e.selected + 1;
    const currentSearch = new URLSearchParams(searchParams.toString())

    currentSearch.set("page",page.toString())
    currentSearch.set("per_page","4")

       router.push(`/store?${currentSearch.toString()}`)
        
    }


  return (
    <div>
          
      <ReactPaginate
      className="flex justify-center items-center gap-2 my-4 bg-gray-100 p-2 rounded-md cursor-pointer" 
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    
    </div>
  )
}
