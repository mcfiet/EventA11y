export default interface User {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
  role: "admin" | "user" | "guest";
}
