const initialOrders = [
  { id: 1, userId: 1, total: 199.98, status: "Pending", date: "2025-09-01" },
  { id: 2, userId: 2, total: 49.99, status: "Shipped", date: "2025-09-10" },
  { id: 3, userId: 3, total: 29.99, status: "Delivered", date: "2025-09-20" },
];

const ORDERS_KEY = "admin_orders_v1";

export function loadOrders() {
  const raw = localStorage.getItem(ORDERS_KEY);
  if (!raw) {
    localStorage.setItem(ORDERS_KEY, JSON.stringify(initialOrders));
    return initialOrders;
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    return initialOrders;
  }
}

export function saveOrders(orders) {
  localStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
}

export default initialOrders;
