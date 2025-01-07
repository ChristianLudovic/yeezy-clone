import Layout from "@/Layouts/Layout";
import { useState } from "react";
import { router } from '@inertiajs/react';

interface ProductType {
    product: {
        name: string;
        id: number;
        size1: number;
        size2: number;
        size3: number;
    };
}

export default function Page({product} : ProductType ) {

    const [pickSize, setPickSize] = useState(false);
    const [sizeType, setSizeType] = useState(false);
    const [selectedSize, setSelectedSize] = useState<number | null>(null); // Ajouter un état pour la taille choisie

    // Mettre à jour la fonction pour envoyer la taille choisie
    const chooseSizeAndAddToCart = (size: number) => {
        if (size) {
            router.post(route('cart.store'), {
                product_id: product.id,
                quantity: 1,
                size: size  // Envoyer la taille sélectionnée
            });
        }
    }

    const handlePickSize = () => {
        setPickSize(true);
    }

    const closeSize = () => {
        setPickSize(false);
    }

    const changeSizeType = () => {
        setSizeType(!sizeType);
    }

    return (
        <Layout>
            <div className="h-[calc(100vh-64px)] w-full mx-auto flex flex-col justify-end">
                <div className="flex items-center justify-center ">
                    <img
                        src={`/storage/products/${product.id}.png`}
                        className='w-[454px] h-[454px] object-cover'
                    />
                </div>
                {pickSize === false ? (
                    <p className="text-center w-full">{product.name}</p>
                ) : (
                    <div className="flex items-center justify-center w-full">
                        <div className="max-w-[454px] w-full flex items-center justify-between">
                            <span onClick={changeSizeType} className="w-16 text-center cursor-pointer">size</span>
                            <p>SELECT SIZE</p>
                            <span onClick={closeSize} className="w-16 text-center cursor-pointer">close</span>
                        </div>
                    </div>
                )}
                <div className="w-full flex items-center justify-center py-11">
                    <div className="max-w-[454px] w-full flex flex-col items-center">
                        {pickSize === false ? (
                            <button onClick={handlePickSize}>
                                <svg className="icon transition-opacity duration-300 h-[24px] w-[24px]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M12 18L12 6" stroke="black" strokeWidth="2" strokeLinecap="round"></path>
                                    <path d="M6 12H18" stroke="black" strokeWidth="2" strokeLinecap="round"></path>
                                </svg>
                            </button>
                        ) : sizeType === false ? (
                            <div className="w-full flex items-center justify-between">
                                <span className="w-16 text-center cursor-pointer" onClick={() => chooseSizeAndAddToCart(product.size1)}>{product.size1}</span>
                                <span className="w-16 text-center cursor-pointer" onClick={() => chooseSizeAndAddToCart(product.size2)}>{product.size2}</span>
                                <span className="w-16 text-center cursor-pointer" onClick={() => chooseSizeAndAddToCart(product.size3)}>{product.size3}</span>
                            </div>
                        ) : (
                            <div className="w-full flex items-center justify-between">
                                <span className="w-16 text-center cursor-pointer" onClick={() => chooseSizeAndAddToCart(1)}>S-M</span>
                                <span className="w-16 text-center cursor-pointer" onClick={() => chooseSizeAndAddToCart(2)}>M-L</span>
                                <span className="w-16 text-center cursor-pointer" onClick={() => chooseSizeAndAddToCart(3)}>XL-XXL</span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
