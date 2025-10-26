"use client";

import Link from "next/link";

export default function ListItem(props) {
  return (
    <div>
      {props.result.map((v, i) => (
        <div>
          <Link
            prefetch={false}
            href={`detail/${v._id}`}
            className="list-item"
            key={v._id ?? i}
          >
            <h4>{v.title}</h4>
          </Link>
          <Link href={`/edit/${v._id}`}>✏️</Link>
          <span
            onClick={() => {
              fetch("/api/test");
            }}
          >
            🗑️
          </span>
        </div>
      ))}
    </div>
  );
}
