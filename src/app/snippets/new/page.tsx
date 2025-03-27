import { notFound, redirect } from "next/navigation";
import { db } from "@/db";
export default function SnippetCreatePage() {

  async function createSnippet(formData: FormData) {
    // This needs to be server action
    'use server';
    // check the user inputs and make sure they're valid
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;
    // create a new snippet in the database
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log("Snippet created", snippet);
    // redirect user to home page
    redirect("/");
  }

  notFound();

  return (
    <div>
      <form action={createSnippet}>
        <h3 className="font-bold m-3">Create a snippet</h3>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <label htmlFor="title" className="w-12">Title</label>
            <input 
              type="text"
              id="title"
              name="title"
              className="border rounded p-2 w-full"
            />
          </div>

          <div className="flex gap-4">
            <label htmlFor="code" className="w-12">Code</label>
            <textarea
              id="code"
              name="code"
              className="border rounded p-2 w-full"
            />
          </div>
          <button type="submit" className="rounded p-2 bg-blue-200">Create</button>
        </div>
      </form>
    </div>
  );
}