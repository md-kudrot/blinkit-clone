import React from 'react';
import Cart3 from './Cart3';

const ProductSection3 = ({ FreshFruits }) => {
    console.log(FreshFruits)
    return (
        <div className="productSectionMain">
            <section className="productSection">
                <div class="headingRow">
                    <h2>Fresh Fruits & Vegetables</h2>
                    <a href="#">see all</a>
                </div>

                <div className="productRow">

                    {
                        FreshFruits.map(item =>
                            <Cart3
                                category={item.category}
                                delivery_time={item.delivery_time}
                                img={item.img}
                                name={item.name}
                                price={item.price}
                                quantity={item.quantity}
                            >

                            </Cart3>
                        )
                    }
                </div>
            </section>
        </div>
    );
};

export default ProductSection3;