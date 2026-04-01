import React from 'react';
import Cart2 from './Cart2';

const ProductSection2 = ({ SnacksMunchies }) => {
    // console.log(SnacksMunchies)
    return (
        <div className="productSectionMain">
            <section className="productSection">
                <div class="headingRow">
                    <h2>Snacks & Munchies</h2>
                    <a href="#">see all</a>
                </div>

                <div className="productRow">

                    {
                        SnacksMunchies.map(item =>
                            <Cart2
                                category={item.category}
                                delivery_time={item.delivery_time}
                                img={item.img}
                                name={item.name}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        )
                    }
                </div>
            </section>
        </div>
    );
};

export default ProductSection2;