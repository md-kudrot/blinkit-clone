import React from 'react';

const SelectedCart = ({ selectedItem, removeCart }) => {
    return (
        <div>

            <div className="fixed  z-50 w-[92vw] max-w-lg rounded-2xl  shadow-[0_20px_60px_-15px_rgba(0,0,0,0.35)] ring-1 ring-emerald-200 left-1/2 -translate-x-1/2 top-20 bottom-auto md:top-auto md:bottom-6 md:right-6 md:left-auto md:translate-x-0 p-4 md:p-6">
                <div className="pad max-h-[55vh] overflow-auto rounded-2xl p-3 space-y-4">
                    {selectedItem.map((item) => (
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
                    ))}
                </div>
            </div>

        </div>
    );
};

export default SelectedCart;