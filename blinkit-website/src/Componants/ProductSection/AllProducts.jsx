import React, { use } from 'react';
import { Suspense } from "react"
import ProductSection1 from './ProductSection-1/ProductSection1';
import ProductSection2 from './ProductSection-2/ProductSection2';
import ProductSection3 from './ProductSection-3/ProductSection3';


const AllProducts = ({ allProdustsPromise }) => {
    const allProducts = use(allProdustsPromise)
    const DairyBread = allProducts.filter(item => item.category === "Dairy, Bread & Eggs")
    const SnacksMunchies = allProducts.filter(item => item.category === "Snacks & Munchies")
    const FreshFruits = allProducts.filter(item => item.category === "Fresh Fruits & Vegetables")
    // console.log(allProducts)
    // console.log(FreshFruits)
    return (
        <div>
            <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
                <ProductSection1 DairyBread={DairyBread} ></ProductSection1>
            </Suspense>

            <ProductSection2 SnacksMunchies={SnacksMunchies}></ProductSection2>

            <ProductSection3 FreshFruits={FreshFruits}></ProductSection3>
        </div>
    );
};

export default AllProducts;