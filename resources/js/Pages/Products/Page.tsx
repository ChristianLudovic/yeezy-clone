import Layout from "@/Layouts/Layout";
import { useState } from "react";

interface ProductType {
    product: {
        name: string;
        id: number;
    };
}

export default function Page({product} : ProductType ){

    const [imageError, setImageError] = useState(false)

    return (
        <Layout>
            <div className="h-[calc(100vh-64px)] w-full mx-auto flex flex-col justify-end">
                <div className="flex items-center justify-center ">
                    <img
                        src={imageError
                            ? `/storage/products/0${product.id}.png`
                            : `/storage/products/0${product.id}.webp`
                        }
                        onError={() => setImageError(true)}
                        alt="product 01"
                        className='w-[454px] h-[454px] object-cover'
                    />
                </div>

                <p className="text-center w-full">{product.name}</p>
                <div className="w-full flex items-center justify-center py-11">
                    <svg className="icon transition-opacity duration-300 h-[24px] w-[24px] " viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M12 18L12 6" stroke="black" stroke-width="2" stroke-linecap="round"></path>
                        <path d="M6 12H18" stroke="black" stroke-width="2" stroke-linecap="round"></path>
                    </svg>
                </div>

            </div>
        </Layout>
    )
}
