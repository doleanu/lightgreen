import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { ADMIN_COOKIE, isValidSession } from "@/lib/pricelist/auth";

export const dynamic = "force-dynamic";

export default async function Protected({ children }: { children: React.ReactNode }) {
  const jar = await cookies();
  if (!isValidSession(jar.get(ADMIN_COOKIE)?.value)) redirect("/admin/login");
  return <>{children}</>;
}
