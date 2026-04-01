import React, { use } from 'react';
import { Suspense } from "react"
import ProductSection1 from './ProductSection-1/ProductSection1';


const AllProducts = ({ allProdustsPromise }) => {
    const allProducts = use(allProdustsPromise)
    const DairyBread = allProducts.filter(item => item.category === "Dairy, Bread & Eggs")
    // console.log(allProducts)
    // console.log(DairyBread)
    return (
        <div>
            <Suspense fallback={<span className="loading loading-infinity loading-xl"></span>}>
                <ProductSection1 DairyBread={DairyBread} ></ProductSection1>
            </Suspense>

        </div>
    );
};

export default AllProducts;