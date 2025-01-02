import Layout from "@/Layouts/Layout";
import { useState } from "react";

export default function Page({ cartItems }) {
    const [imageError, setImageError] = useState(false);

    const incrementQuantity = (cartItem) => {
        cartItem.quantity += 1; // Exemple simplifié, ajustez selon votre gestion d'état réel
    };

    const decrementQuantity = (cartItem) => {
        if (cartItem.quantity > 1) {
            cartItem.quantity -= 1;
        }
    };

    return (
        <Layout>
            <div className="h-[calc(100vh-64px)] flex justify-center">
                <div className="max-w-2xl w-full h-full px-8 flex flex-col justify-between">
                    {cartItems && cartItems.length > 0 ? (
                        <>
                            {cartItems.map((cartItem) => (
                                <div
                                    className="flex justify-between items-center"
                                    key={cartItem.id}
                                >
                                    <img
                                        src={
                                            imageError
                                                ? `/storage/products/0${cartItem.product_id}.png`
                                                : `/storage/products/0${cartItem.product_id}.webp`
                                        }
                                        onError={() => setImageError(true)}
                                        alt={`product ${cartItem.product_id}`}
                                        className="max-w-[216px] w-full object-cover"
                                    />
                                    <div className="w-full max-w-[286px] space-y-1">
                                        <div className="flex items-center justify-between w-full">
                                            <span>{cartItem.product.name}</span>
                                            <span>${cartItem.product.price}</span>
                                        </div>
                                        <div className="flex items-center justify-between w-full">
                                            <span>SIZE</span>
                                            <span>{cartItem.size || "N/A"}</span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span>QTY</span>
                                            <div className="flex space-x-1 items-center">
                                                <button
                                                    onClick={() => decrementQuantity(cartItem)}
                                                    className="p-1 cursor-pointer"
                                                >
                                                    -
                                                </button>
                                                <span>{cartItem.quantity}</span>
                                                <button
                                                    onClick={() => incrementQuantity(cartItem)}
                                                    className="p-1 cursor-pointer"
                                                >
                                                    +
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <div className="w-full space-y-2 mt-4 mb-16">
                                <div className="flex items-center justify-between">
                                    <span>TOTAL</span>
                                    <span>
                                        ${cartItems.reduce((total, item) => total + item.quantity * item.product.price, 0)}
                                    </span>
                                </div>
                                <p>TAX AND SHIPPING NOT INCLUDED</p>
                                <div className="flex items-center justify-between">
                                    <span>CONTINUE</span>
                                    <svg
                                        className="w-6 h-6"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path
                                            d="M10 6L16 12"
                                            stroke="black"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        ></path>
                                        <path
                                            d="M10 18L16 12"
                                            stroke="black"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="h-full flex items-center w-full">
                            <p className="text-center  w-full">NO ITEMS</p>
                        </div>

                    )}
                </div>
            </div>
        </Layout>
    );
}
