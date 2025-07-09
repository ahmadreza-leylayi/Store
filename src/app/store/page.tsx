import Container from "@/components/Container"
import Pagination from "@/components/Pagination";
import ProductItem from "@/components/ProductItem"
import Search from "@/components/Search";
import Link from "next/link"
import { productDatabase } from "@/database/productDatabase";

interface IStoreProps {
    params: Promise<{ id: string }>;
    searchParams: Promise<{ page: string; per_page: string; title: string }>;
}

async function Store({ searchParams }: IStoreProps) {
    const page = parseInt((await searchParams).page ?? "1");
    const per_page = parseInt((await searchParams).per_page ?? "4");
    const title = (await searchParams).title ?? "";

    // فیلتر و paginate روی داده‌های استاتیک
    let filtered = productDatabase.product;
    if (title) {
        filtered = filtered.filter(p => p.title.toLowerCase().includes(title.toLowerCase()));
    }
    const total = filtered.length;
    const pages = Math.ceil(total / per_page);
    const start = (page - 1) * per_page;
    const end = start + per_page;
    const data = filtered.slice(start, end);

    return (
        <Container>
            <h1 className="text-3xl font-bold font-serif text-center text-gray-800 mb-6 mt-5">Store</h1>
            <div className="mb-6 flex justify-center">
                <Search />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {data.map((item) => (
                    <Link className="mx-auto" href={`/store/${item.id}`} key={item.id}>
                        <ProductItem {...item} />
                    </Link>
                ))}
            </div>
            <div className="mt-8 flex justify-center">
                <Pagination pageCount={pages} />
            </div>
        </Container>
    )
}

export default Store;