import { MongoClient } from "mongodb";
const url =
  "mongodb+srv://manemin:rudgus0712@mymongocluster.lmedt4k.mongodb.net/?retryWrites=true&w=majority&appName=MyMongoCluster";
const options = { useNewUrlParser: true, useUnifiedTopology: true };
let connectDB;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}
export { connectDB };
