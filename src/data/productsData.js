const initialProducts = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 99.99,
    inventory: 25,
    image: "/public/images/product-1.jpg",
  },
  {
    id: 2,
    title: "Smart Speaker",
    price: 49.99,
    inventory: 40,
    image: "/public/images/product-2.jpg",
  },
  {
    id: 3,
    title: "Fitness Band",
    price: 29.99,
    inventory: 60,
    image: "/public/images/product-3.jpg",
  },
];

const PRODUCTS_KEY = "admin_products_v1";

export function loadProducts() {
  const raw = localStorage.getItem(PRODUCTS_KEY);
  if (!raw) {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(initialProducts));
    return initialProducts;
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    return initialProducts;
  }
}

export function saveProducts(products) {
  localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
}

export default initialProducts;
