import React from 'react';
import Cart1 from './Cart1';

const ProductSection1 = ({ DairyBread }) => {
    console.log(DairyBread)
    return (
        <>
            <div className='productSectionMain'>
                <section className="productSection">
                    <div class="headingRow">
                        <h2>Dairy, Bread & Eggs</h2>
                        <a href="#">see all</a>
                    </div>
                    <div className="productRow">

                        {
                            DairyBread.map(item =>
                                <Cart1
                                    category={item.category}
                                    delivery_time={item.delivery_time}
                                    img={item.img}
                                    name={item.name}
                                    price={item.price}
                                    quantity={item.quantity}
                                ></Cart1>)
                        }
                    </div>
                </section>
            </div>
        </>
    );
};

export default ProductSection1;