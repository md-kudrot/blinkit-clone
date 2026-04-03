import React from 'react';
import SelectedCart from '../BannerSection/SelectedCart';

const Banner = ({ selectedItem, removeCart, showCart }) => {
    return (
        <>
            <div className="p-8">
                {
                   showCart && <SelectedCart
                        selectedItem={selectedItem}
                        removeCart={removeCart}
                    ></SelectedCart>
                }
            </div>
            <section className="bannerSection">
                <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=2700/layout-engine/2022-05/Group-33704.jpg"
                    alt="" />
            </section>
        </>
    );
};

export default Banner;