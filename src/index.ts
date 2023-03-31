import { User } from "./User";

const user = new User({ name: "Aman", age: 22 });

console.log(user.get("name"));
console.log(user.get("age"));
