
import { usePage } from '@inertiajs/react';
import Layout from "@/Layouts/Layout";
import ProductCard from '@/Components/ProductCard';



export default function Page({products}) {

    const page = usePage();



    return (
        <Layout>
            <div className='flex flex-wrap justify-between'>
                {products.map((product, index) => (
                    <ProductCard productId={product.id} productName={product.name} key={index}/>
                ))
                }
            </div>
        </Layout>
    );
}
