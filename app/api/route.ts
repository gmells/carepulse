// app/api/create-user/route.ts
import { createUser } from "@/lib/actions/patient.actions";

export async function POST(req: Request) {
  const body = await req.json();
  const user = await createUser(body);
  return new Response(JSON.stringify(user), { status: 200 });
}
