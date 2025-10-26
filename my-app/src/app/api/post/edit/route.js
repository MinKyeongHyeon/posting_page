import { ObjectId } from "mongodb";
import { connectDB } from "../../../../../utils/database";
import { redirect } from "next/navigation";

export async function POST(request) {
  const formData = await request.formData();
  const updateData = {
    title: formData.get("title"),
    content: formData.get("content"),
  };

  const db = (await connectDB).db("forum");
  let result = await db
    .collection("posting")
    .updateOne(
      { _id: new ObjectId(formData.get("_id")) },
      { $set: updateData }
    );

  redirect("/list");
}
