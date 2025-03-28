import Link from "next/link";
import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => (
    <Link 
      key={snippet.id} 
      className="font-mono bg-gray-100 rounded underline m-2"
      href={`/snippets/${snippet.id}`}
    >
      <h2>{snippet.title}({snippet.id})</h2>
    </Link>
  ));

  return (
    <div>
      {renderedSnippets}
    </div>
  );
}
