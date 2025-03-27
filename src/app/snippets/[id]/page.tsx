import { notFound } from "next/navigation";
import { db } from "@/db";

interface SnippetShowPageProps {
  readonly params: Promise<{
    id: string;
  }>;  
}

export default async function SnippetShowPage(props: SnippetShowPageProps) {
  const { id } = await props.params;

  const snippet = await db.snippet.findFirst({
    where: {
      id: parseInt(id),
    },
  })

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <h1 className="mb-10">Snippet Show Page</h1>
      <code>{snippet?.title}</code>
    </div>
  ); 
}