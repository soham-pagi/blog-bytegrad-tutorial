import Form from "@/components/form";
import LogoutLink from "@/components/LogoutLink";

export default function CreatePage() {
  return (
    <main className="text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create Post</h1>

      <Form />

      <LogoutLink>Log out</LogoutLink>
    </main>
  );
}
