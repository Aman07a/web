import { User, UserProps } from "./Models/User";
import { Collection } from "./Models/Collection";

const collection = new Collection<User, UserProps>(
  "http://localhost:3000/users",
  (json: UserProps) => User.buildUser(json)
);

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
