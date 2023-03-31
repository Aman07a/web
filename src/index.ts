import { User } from "./User";

const user = new User({ name: "Aman", age: 22 });

user.on("change", () => {});

console.log(user);
