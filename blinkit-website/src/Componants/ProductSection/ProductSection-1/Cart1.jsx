import React from 'react';

const Cart1 = ({ name, price, img, quantity, delivery_time, handleClick, item }) => {

    return (
        <div>
            <div className="productItem">
                <div className="">
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
                <div className="productContant">
                    <h3>{name}</h3>
                    <p>{quantity}</p>
                    <div className="btnpr-ice-outer">
                        <b>{price}</b>
                        <button onClick={() => handleClick(item)}>ADD</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart1;