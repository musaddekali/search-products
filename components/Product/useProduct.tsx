import { useState } from 'react';
import { ProductType, debounce, products } from '@/utils';

const useProduct = () => {
  const [allProducts, setAllProducts] = useState<ProductType[]>(products);
  const [searchText, setSearchText] = useState('');

  const handleSearch = debounce((value: string) => {
    setSearchText(value.toLowerCase());
    const filteredProducts = products.filter((product: ProductType) => {
      return (
        product.title.toLowerCase().includes(value.toLowerCase()) ||
        product.description.toLowerCase().includes(value.toLowerCase()) ||
        product.price.toString().includes(value)
      );
    });
    setAllProducts(filteredProducts);
  });

  return {
    handleSearch,
    allProducts,
    searchText,
  };
};

export default useProduct;
