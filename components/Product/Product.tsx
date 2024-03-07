'use client';
import ProductList from '../Product/ProductList';
import SearchBar from '../SearchBar/SearchBar';
import useProduct from '../Product/useProduct';
import NotFound from '../NotFound/NotFound';

const Product = () => {
  const { handleSearch, searchText, allProducts } = useProduct();

  return (
    <div>
      <SearchBar
        onChange={(value) => handleSearch(value)}
        placeholder="Search product..."
      />
      <p>
        {searchText && (
          <span>
            Result of{' '}
            <i className="font-semibold text-blue-500">{searchText}</i>{' '}
          </span>
        )}
      </p>
      {allProducts.length !== 0 ? (
        <ProductList allProducts={allProducts} searchText={searchText} />
      ) : (
        <NotFound title="Product Not found" />
      )}
    </div>
  );
};

export default Product;
