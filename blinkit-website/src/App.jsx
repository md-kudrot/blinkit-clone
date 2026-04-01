import Banner from "./Componants/BannerSection/Banner"
import CategorySection from "./Componants/CategorySection/CategotySection"
import Footer from "./Componants/Footer/Footer"
import Nav from "./Componants/Navbar/Nav"
import OrderBanner from "./Componants/OrderBanner/OrderBanner"
import AllProducts from "./Componants/ProductSection/AllProducts"

const allProdustsPromise = fetch("allProducts.json").then(res => res.json())

function App() {

  return (
    <>
      <Nav></Nav>
      <Banner></Banner>
      <OrderBanner></OrderBanner>
      <CategorySection></CategorySection>

      <AllProducts allProdustsPromise = {allProdustsPromise}></AllProducts>
      <Footer></Footer>
    </>
  )
}

export default App
