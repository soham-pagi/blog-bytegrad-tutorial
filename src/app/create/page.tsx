import { createPost } from "@/actions/actions";
import LogoutLink from "@/components/LogoutLink";
import React from "react";

export default function CreatePage() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>

      <form
        action={createPost}
        className="flex flex-col max-w-[400px] mx-auto gap-2 my-10"
      >
        <input
          type="text"
          name="title"
          placeholder="Title for new post"
          className="border rounded px-3 h-10"
          required
        />

        <textarea
          name="body"
          placeholder="Body content for new post"
          className="border rounded px-3 py-2"
          rows={6}
          required
        />

        <button className="h-10 bg-blue-500 px-5 rounded text-white">
          Submit
        </button>
      </form>

      <LogoutLink>Log out</LogoutLink>
    </main>
  );
}
