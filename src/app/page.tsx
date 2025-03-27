import { db } from "@/db";

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => (
    <div key={snippet.id} className="font-mono bg-gray-100 p-4 rounded">
      <h2>title: {snippet.title}</h2>
      <pre>code: {snippet.code}</pre>
    </div>
  ));

  return (
    <div>
      {renderedSnippets}
    </div>
  );
}
