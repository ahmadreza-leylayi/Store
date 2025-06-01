import Navbar from "./Navbar"
import Footer from "@/components/Footer";



interface ILayoutProps {
    children: React.ReactNode
}

function Layout({children}: ILayoutProps) {
  return (
    <div>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  )
}

export default Layout
