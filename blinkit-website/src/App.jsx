import { useState } from "react"
import Banner from "./Componants/BannerSection/Banner"
import CategorySection from "./Componants/CategorySection/CategotySection"
import Footer from "./Componants/Footer/Footer"
import Nav from "./Componants/Navbar/Nav"
import OrderBanner from "./Componants/OrderBanner/OrderBanner"
import AllProducts from "./Componants/ProductSection/AllProducts"

const allProdustsPromise = fetch("allProducts.json").then(res => res.json())

function App() {
  const [selectedItem, SetSelectedItem] = useState([])
  const [showCart, setShowcart] = useState(false)
  const handleClick = (cart) => {
    console.log(cart)
    SetSelectedItem([...selectedItem.filter(item => item.name !== cart.name), cart])
  }
  
  const removeCart = (cart) => {
    SetSelectedItem([...selectedItem.filter(item => item.name !== cart.name)])
    console.log("this cart will be removed",cart)
  }

  const showMyCart = ()=> {
    console.log("show my cart")
    setShowcart(!showCart)
  }
  console.log(showCart)
  
  console.log(selectedItem)
  return (
    <>
      <Nav 
        showMyCart={showMyCart}
      ></Nav>

      <Banner
        showCart={showCart}
        selectedItem={selectedItem}
        removeCart={removeCart}
      ></Banner>
      <OrderBanner></OrderBanner>
      <CategorySection></CategorySection>

      <AllProducts
        allProdustsPromise={allProdustsPromise}
        handleClick={handleClick}
      ></AllProducts>
      <Footer></Footer>
    </>
  )
}

export default App
