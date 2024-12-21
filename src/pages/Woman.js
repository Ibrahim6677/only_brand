import React from 'react'
import { useLoaderData } from 'react-router-dom';


const Woman = () => {
  const data = useLoaderData();
    const ProductsData = data.data;
  
    // فلترة المنتجات للنوع "نسائي" فقط
    const womenProducts = ProductsData.filter(product => product.kind === 'women');
  
    return (
      <>
        {/* عرض المنتجات فقط إذا كان هناك منتجات نسائيه */}
        {womenProducts.length > 0 && (
          <>
            {womenProducts.map(product => (
              <div key={product.id} product={product} >
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <img src={product.imageCover} width={150} alt={product.name} />
                <h3>{ product.title }</h3>
              </div>
            ))}
          </>
        )}
      </>
    )
  }

export default Woman