import { User } from "./User";

const user = new User({ name: "Aman", age: 22 });

user.set({ age: 23 });

console.log(user.get("name"));
console.log(user.get("age"));
