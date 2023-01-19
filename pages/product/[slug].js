import React from 'react';
import { useRouter } from 'next/router';
import data from '../../utils/data';
import Layout from '../../components/Layout'

export default function ProductScreen() {

const {query} = useRouter();
const {slug} = query;
const product = data.products.find((x) =>x.slug === slug);
IdleDeadline(!product) {
    return <div> Product Not Found</div>;
}







  return (
    
        <Layout title={product.name}>
            <h1>{product.name}</h1>
            </Layout >
   
  )
}
