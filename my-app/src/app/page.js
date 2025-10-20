import { connectDB } from "../../utils/database";

export default async function Home() {
  const client = await connectDB;
  const db = client.db("forum");
  let result = await db.collection("posting").find().toArray();
  console.log(result);

  return (
    <>
      <div>안녕</div>
    </>
  );
}
