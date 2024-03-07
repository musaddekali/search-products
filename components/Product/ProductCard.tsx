'use client';
import { ProductType, higlightText } from '@/utils';

const ProductCard = ({
  product,
  searchText,
}: {
  product: ProductType;
  searchText: string;
}) => {
  const { image, title, description, price } = product;

  const showContent = (text: string) => {
    if (!searchText) return text;
    return higlightText(text, searchText);
  };

  return (
    <>
      <article className="bg-white p-4 rounded-md shadow-md">
        <img src={image} alt={title} className="mb-4 rounded-lg" />
        <h2 className="text-lg font-semibold">{showContent(title)}</h2>
        <p className="text-gray-600 text-sm mb-4">{showContent(description)}</p>
        <p className="text-xl font-bold text-blue-500">
          ${showContent(price.toFixed(2))}
        </p>
      </article>
    </>
  );
};

export default ProductCard;
