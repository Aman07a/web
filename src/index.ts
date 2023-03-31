import { User } from "./User";

const user = new User({ name: "Aman", age: 22 });

user.on("change", () => {
  console.log("Change #1");
});

user.on("change", () => {
  console.log("Change #2");
});

user.on("change", () => {
  console.log("Save was triggered");
});

user.trigger("change");
