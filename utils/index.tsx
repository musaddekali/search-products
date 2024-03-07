export interface ProductType {
  title: string;
  description: string;
  image: string;
  price: number;
}

export const products: ProductType[] = [
  {
    title: 'Laptop A',
    description: 'Powerful laptop with high-performance features.',
    image: 'https://via.placeholder.com/300',
    price: 999.99,
  },
  {
    title: 'Mobile Phone X',
    description: 'Cutting-edge smartphone with advanced features.',
    image: 'https://via.placeholder.com/300',
    price: 799.99,
  },
  {
    title: 'Tablet B',
    description: 'Sleek and lightweight tablet for on-the-go productivity.',
    image: 'https://via.placeholder.com/300',
    price: 499.99,
  },
  {
    title: 'Smartwatch Z',
    description: 'Stylish smartwatch with fitness tracking capabilities.',
    image: 'https://via.placeholder.com/300',
    price: 149.99,
  },
  {
    title: 'Desktop PC Pro',
    description: 'High-performance desktop computer for professionals.',
    image: 'https://via.placeholder.com/300',
    price: 1499.99,
  },
  {
    title: 'Camera D',
    description: 'Professional-grade camera for stunning photography.',
    image: 'https://via.placeholder.com/300',
    price: 699.99,
  },
  {
    title: 'Wireless Headphones Y',
    description: 'Premium wireless headphones for immersive audio.',
    image: 'https://via.placeholder.com/300',
    price: 129.99,
  },
  {
    title: 'Gaming Console V',
    description: 'Next-gen gaming console for an immersive gaming experience.',
    image: 'https://via.placeholder.com/300',
    price: 399.99,
  },
  {
    title: 'E-book Reader E',
    description: 'Lightweight e-book reader for avid readers on the go.',
    image: 'https://via.placeholder.com/300',
    price: 79.99,
  },
  {
    title: 'Fitness Tracker F',
    description: 'Smart fitness tracker to monitor your health and workouts.',
    image: 'https://via.placeholder.com/300',
    price: 59.99,
  },
];

export function debounce<T extends (...args: any[]) => void>(
  func: T,
  timeout = 300
) {
  let timer: NodeJS.Timeout;

  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

export function higlightText(text: string, searchText: string | number) {
  if (!searchText) return;

  const regex = new RegExp(`(${searchText})`, 'gi');

  return text
    .split(regex)
    .map((part: string, index: number) =>
      regex.test(part) ? <mark key={index}>{part}</mark> : part
    );
}
