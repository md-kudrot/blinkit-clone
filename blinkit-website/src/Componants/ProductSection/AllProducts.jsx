import React, { use, useState } from 'react';
import { Suspense } from "react"
import ProductSection1 from './ProductSection-1/ProductSection1';
import ProductSection2 from './ProductSection-2/ProductSection2';
import ProductSection3 from './ProductSection-3/ProductSection3';


const AllProducts = ({ allProdustsPromise }) => {

    const [selectedItem, SetSelectedItem] = useState([])

    const allProducts = use(allProdustsPromise)
    const DairyBread = allProducts.filter(item => item.category === "Dairy, Bread & Eggs")
    const SnacksMunchies = allProducts.filter(item => item.category === "Snacks & Munchies")
    const FreshFruits = allProducts.filter(item => item.category === "Fresh Fruits & Vegetables")
    // console.log(allProducts)
    // console.log(FreshFruits)

    const handleClick = (cart) => {
        console.log(cart)
        SetSelectedItem([...selectedItem, cart] )
    }
    console.log(selectedItem)
    return (
        <div>
            <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
                <ProductSection1
                    DairyBread={DairyBread}
                    handleClick={handleClick}
                ></ProductSection1>
            </Suspense>
            <Suspense>
                <ProductSection2
                    SnacksMunchies={SnacksMunchies}
                    handleClick={handleClick}
                ></ProductSection2>
            </Suspense>

            <Suspense>
                <ProductSection3
                    FreshFruits={FreshFruits}
                    handleClick={handleClick}
                ></ProductSection3>
            </Suspense>


        </div>
    );
};

export default AllProducts;