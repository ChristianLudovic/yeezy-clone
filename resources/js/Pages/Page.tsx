
import { usePage, usePoll } from '@inertiajs/react';
import Layout from "@/Layouts/Layout";
import ProductCard from '@/Components/ProductCard';



export default function Page({products}) {

    const page = usePage();
    //usePoll(1000)


    return (
        <Layout>
            <div className='grid gap-y-6 grid-cols-9 justify-between'>
                {products.map((product, index) => (
                    <ProductCard productId={product.id} productName={product.name} key={index}/>
                ))
                }
            </div>
        </Layout>
    );
}
