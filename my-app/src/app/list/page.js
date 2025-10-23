import { connectDB } from "../../../utils/database";
import Link from "next/link";
import DetailLink from "./DetailLink";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("posting").find().toArray();

  return (
    <div className="list-bg">
      {result.map((v, i) => (
        <div>
          <Link
            prefetch={false}
            href={`detail/${v._id}`}
            className="list-item"
            key={v._id ?? i}
          >
            <h4>{v.title}</h4>
          </Link>
        </div>
      ))}
    </div>
  );
}
