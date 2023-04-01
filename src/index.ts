import { Collection } from "./Models/Collection";

const collection = new Collection("http://localhost:3000/users");

collection.on("change", () => {
  console.log(collection);
});

collection.fetch();
