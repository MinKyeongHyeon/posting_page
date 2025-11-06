import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://manemin:rudgus0712@mymongocluster.lmedt4k.mongodb.net/?retryWrites=true&w=majority&appName=MyMongoCluster";

let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url).connect();
}
export { connectDB };
