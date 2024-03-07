'use client';
import { ProductType } from '@/utils';
import ProductCard from '../Product/ProductCard';

const ProductList = ({
  allProducts,
  searchText,
}: {
  allProducts: ProductType[];
  searchText: string;
}) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 p-3">
      {allProducts.map((product: ProductType) => (
        <ProductCard
          key={product.title}
          product={product}
          searchText={searchText}
        />
      ))}
    </div>
  );
};

export default ProductList;
