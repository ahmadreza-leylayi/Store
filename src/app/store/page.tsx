// فایل: app/products/page.tsx

import Container from "@/components/Container";
import Pagination from "@/components/Pagination";
import ProductItem, { IProductList } from "@/components/ProductItem";
import Search from "@/components/Search";
import Link from "next/link";

interface IStoreProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ page: string; per_page: string; title: string }>;
}

async function Store({ searchParams }: IStoreProps) {
  const page = (await searchParams).page ?? "1";
  const per_page = (await searchParams).per_page ?? "4";
  const title = (await searchParams).title ?? "";

  // اینجا به جای آدرس localhost:3004، آدرس Netlify Function را صدا می‌زنیم:
  const result = await fetch(
    `./src/netfly/functions/getProducts?page=${page}&per_page=${per_page}&title=${encodeURIComponent(title)}`,
    { cache: "no-store" } // مطمئن باشید که هر بار تازه خوانده شود
  );
  const data = (await result.json()) as IProductList;

  return (
    <Container>
      <h1 className="text-3xl font-bold font-serif text-center text-gray-800 mb-6 mt-5">
        Store
      </h1>
      <div className="mb-6 flex justify-center">
        <Search />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {data.data.map((item) => (
          <Link className="mx-auto" href={`/store/${item.id}`} key={item.id}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
      <div className="mt-8 flex justify-center">
        <Pagination pageCount={data.pages} />
      </div>
    </Container>
  );
}

export default Store;
