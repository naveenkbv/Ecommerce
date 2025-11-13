const initialUsers = [
  {
    id: 1,
    name: "Alice Johnson",
    email: "alice@example.com",
    role: "customer",
  },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "customer" },
  { id: 3, name: "Carol White", email: "carol@example.com", role: "customer" },
];

const USERS_KEY = "admin_users_v1";

export function loadUsers() {
  const raw = localStorage.getItem(USERS_KEY);
  if (!raw) {
    localStorage.setItem(USERS_KEY, JSON.stringify(initialUsers));
    return initialUsers;
  }
  try {
    return JSON.parse(raw);
  } catch (e) {
    return initialUsers;
  }
}

export function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export default initialUsers;
