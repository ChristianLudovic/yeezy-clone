import { Link } from "@inertiajs/react";
import { useState } from "react";

interface productType{
    productId : string,
    productName : string,
}

export default function ProductCard({productId, productName}:productType){

    const [imageError, setImageError] = useState(false);

    return(
        <Link
            key={productId}
            href={route('product', productId)}
            className="flex flex-col max-w-[146.49px] w-full block"
        >
            <img
                src={imageError
                    ? `/storage/products/0${productId}.png`
                    : `/storage/products/0${productId}.webp`
                }
                onError={() => setImageError(true)}
                alt="product 01"
                className='w-[146.49px] h-[146.49px] object-cover'
            />
            <h2 className="text-center">{productName}</h2>
        </Link>


    )
}
