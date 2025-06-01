'use client'
import Container from "@/components/Container"
import Link from "next/link"

export default function Home() {

    return (
        <div className="bg-gray-50 min-h-screen">
            {/* هدر خوش‌آمدگویی */}
            <section className="relative bg-orange-500 text-white py-16">
                <div className="absolute inset-0">
                    <img
                        src="https://img.freepik.com/premium-vector/professional-responsive-online-store-web-design-internet-shop_1326094-14058.jpg"
                        alt="Store Background"
                        className="cover opacity-30 w-full h-full"
                    />
                </div>
                <Container>
                    <div className="relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold font-serif mb-4">
                            Welcome to Our Store
                        </h1>
                        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-6">
                            Discover the best products with unbeatable prices. Shop now and experience quality like never before!
                        </p>
                        <Link
                            href="/store"
                            className="inline-block bg-white text-orange-500 px-6 py-3 rounded-md font-semibold hover:bg-orange-100 transition-colors duration-200"
                        >
                            Shop Now
                        </Link>
                    </div>
                </Container>
            </section>

            {/* بخش محصولات ویژه */}
            <section className="py-12">
                <Container>
                    <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
                        Featured Products
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">

                    </div>
                    <div className="text-center mt-8">
                        <Link
                            href="/store"
                            className="inline-block bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-600 transition-colors duration-200"
                        >
                            View All Products
                        </Link>
                    </div>
                </Container>
            </section>

            {/* بخش درباره ما */}
            <section className="bg-orange-100 py-12">
                <Container>
                    <div className="max-w-3xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Our Store</h2>
                        <p className="text-gray-600 text-lg">
                            We are passionate about bringing you the best products with exceptional quality and customer service. Our mission is to make your shopping experience seamless and enjoyable. Join us today and explore our wide range of offerings!
                        </p>
                    </div>
                </Container>
            </section>
        </div>
    )
}