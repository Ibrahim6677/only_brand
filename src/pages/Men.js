import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Men = () => {
  const data = useLoaderData();
  const ProductsData = data.data;

  // فلترة المنتجات للنوع "رجالي" فقط
  const menProducts = ProductsData.filter(product => product.kind === 'men');

  return (
    <>
      {/* عرض المنتجات فقط إذا كان هناك منتجات رجالية */}
      {menProducts.length > 0 && (
        <>
          {menProducts.map(product => (
            <div key={product.id} product={product} >
              <h2>{product.name}</h2>
              <p>{product.price}</p>
                <img src={product.imageCover} width={150} alt={product.name} />
            </div>
          ))}
        </>
      )}
    </>
  )
}

export default Men;
