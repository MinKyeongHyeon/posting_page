import { ObjectId } from "mongodb";
import { connectDB } from "../../../../utils/database";

export default async function Edit(props) {
  const db = (await connectDB).db("forum");
  let result = await db
    .collection("posting")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="p-20">
      <h4>글 수정 페이지</h4>
      <form action="/api/post/edit" method="POST">
        <input name="title" placeholder="글제목" defaultValue={result.title} />
        <input
          name="content"
          placeholder="글내용"
          defaultValue={result.content}
        />
        <button type="submit">버튼</button>
      </form>
    </div>
  );
}
