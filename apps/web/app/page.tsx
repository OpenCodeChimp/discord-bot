import { trpc } from "@web/app/trpc";

export default async function Home() {
  const { greeting } = await trpc.hello.query({ name: `Testouille` });
  return <div>{greeting}</div>;
}
