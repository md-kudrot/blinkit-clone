import Banner from "./Componants/BannerSection/Banner"
import CategorySection from "./Componants/CategorySection/CategotySection"
import Footer from "./Componants/Footer/Footer"
import Nav from "./Componants/Navbar/Nav"
import OrderBanner from "./Componants/OrderBanner/OrderBanner"
import ProductSection1 from "./Componants/ProductSection/ProductSection-1/ProductSection1"
import ProductSection2 from "./Componants/ProductSection/ProductSection-2/ProductSection2"
import ProductSection3 from "./Componants/ProductSection/ProductSection-3/ProductSection3"

function App() {

  return (
  <>
    <Nav></Nav>
    <Banner></Banner>
    <OrderBanner></OrderBanner>
    <CategorySection></CategorySection>
    <ProductSection1></ProductSection1>
    <ProductSection2></ProductSection2>
    <ProductSection3></ProductSection3>
    <Footer></Footer>
  </>
  )
}

export default App
