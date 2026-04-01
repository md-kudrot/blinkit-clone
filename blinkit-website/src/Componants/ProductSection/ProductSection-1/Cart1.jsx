import React from 'react';

const Cart1 = ({ name, price, img, quantity, category, delivery_time }) => {

    return (
        <div>
            <div class="productItem">
                <div class="">
                    <div className="productImg">
                        <img width="123px"
                            src={img}
                            alt="DairyBread" />
                    </div>
                    <div className="time">
                        <img width="20%"
                            src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/eta-icons/15-mins.png"
                            alt="" />{delivery_time}
                    </div>

                </div>
                <div class="productContant">
                    <h3>{name}</h3>
                    <p>{quantity}</p>
                    <div class="btnpr-ice-outer">
                        <b>{price}</b>
                        <button>ADD</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart1;