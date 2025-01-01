import Layout from "@/Layouts/Layout";
import { useState } from "react";

export default function Page(){

    const [quantity, setQuantity] = useState(1)

    const incrementQuantity = () =>{
        setQuantity(quantity+1)
    }

    const decrementQuantity = () => {
        setQuantity(quantity-1)
    }

    return (
        <Layout>
            <div className="h-[calc(100vh-64px)] flex justify-center">
                <div className="max-w-2xl w-full h-full px-8 flex flex-col justify-between">
                    <div className="flex justify-between items-center">
                        <img
                            src="/storage/products/01.webp" alt=""
                            className="max-w-[216px] w-full "
                        />
                        <div className="w-full max-w-[286px] space-y-1">
                            <div className="flex items-center justify-between w-full">
                                <span>HS-02</span>
                                <span>$20</span>
                            </div>
                            <div className="flex items-center justify-between w-full">
                                <span>SIZE</span>
                                <span>2</span>
                            </div>
                            <div className="flex justify-between items-center">
                                <span>QTY</span>
                                <div className="flex space-x-1 items-center">
                                    <button onClick={decrementQuantity} className="p-1 cursor-pointer">-</button>
                                    <span>{quantity}</span>
                                    <button onClick={incrementQuantity} className="p-1 cursor-pointer">+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full space-y-2 mt-4 mb-16">
                        <div className="flex items-center justify-between">
                            <span>TOTAL</span>
                            <span>20$</span>
                        </div>
                        <p>TAX AND SHIPPING NOT INCLUED</p>
                        <div className="flex items-center justify-between">
                          <span>CONTINUE</span>
                            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M10 6L16 12" stroke="black" stroke-width="2" stroke-linecap="round"></path>
                                <path d="M10 18L16 12" stroke="black" stroke-width="2" stroke-linecap="round"></path>
                            </svg>
                        </div>
                    </div>
                    {/*<p>NO ITEMS</p>*/}
                </div>
            </div>
        </Layout>
    )
}
