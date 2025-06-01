import Link from "next/link"
import Container from "./Container"

export default function Footer() {
  return (
            <footer className="bg-gray-800 text-white py-8">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Our Store</h3>
                            <p className="text-gray-400">Your one-stop shop for quality products.</p>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><Link href="/store" className="hover:text-orange-400">Store</Link></li>
                                <li><Link href="/dashboard" className="hover:text-orange-400">Dashboard</Link></li>
                                <li><Link href="/login" className="hover:text-orange-400">Login</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                            <p className="text-gray-400">Email: support@ourstore.com</p>
                            <p className="text-gray-400">Phone: (123) 456-7890</p>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-gray-400">
                        &copy; 2025 Our Store. All rights reserved.
                    </div>
                </Container>
            </footer>
  )
}
