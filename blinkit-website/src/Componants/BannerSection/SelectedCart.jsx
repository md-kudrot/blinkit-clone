import React from 'react';
import { ShoppingCart } from 'lucide-react';

const SelectedCart = ({ selectedItem, removeCart }) => {
    console.log(selectedItem)
    const total = selectedItem.reduce((initi, curr) => {
        const newePrice = Number(curr.price.replace('₹', ""))
        return initi + newePrice
    }, 0)
    return (
        <div>

            <div className="fixed  z-50 w-[92vw] max-w-lg rounded-2xl  shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)] ring-1 ring-emerald-200 left-1/2 -translate-x-1/2 top-20 bottom-auto md:top-auto md:bottom-6 md:right-6 md:left-auto md:translate-x-0 p-4 md:p-6">
                <div className="pad max-h-[55vh] overflow-auto rounded-2xl p-3 space-y-4">

                    {selectedItem.length > 0 && selectedItem.map((item) => (
                        <div key={item.id ?? item.name} className="pad2 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border border-emerald-200 rounded-xl p-4">

                            <div className="flex items-center gap-3 sm:gap-4">
                                <div className="h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-xl p-2">
                                    <img className="h-full w-full object-contain rounded-2xl" src={item.img} alt="" />
                                </div>
                                <div>
                                    <h1 className="md:text-lg text-sm text-white font-semibold leading-snug">{item.name}</h1>
                                    <p className="text-white font-medium">$ {item.price}</p>
                                </div>
                            </div>

                            <button className="text-rose-600 hover:text-rose-700 text-sm font-semibold self-start sm:self-center sm:ml-2" onClick={() => removeCart(item)}>
                                Remove
                            </button>
                        </div>
                    ))
                    }

                    {
                        selectedItem.length === 0 && <div className="flex flex-col items-center justify-center py-20 gap-4 bg-gray-500 pad2 rounded-2xl">
                        
                            <ShoppingCart className="w-16 h-16 text-gray-300" />
                            <h2 className="text-2xl font-semibold text-gray-400">Your cart is empty</h2>
                            <p className="text-gray-400">Looks like you haven't added anything yet.</p>
                        </div>
                    }

                    
                </div>

                <h1 className='font-bold text-center bg-gray-400 rounded-xl text-2xl  total'>Total: ₹{total}</h1>
            </div>

        </div>
    );
};

export default SelectedCart;