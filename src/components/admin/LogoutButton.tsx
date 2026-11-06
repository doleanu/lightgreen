"use client";

import { useRouter } from "next/navigation";

export function LogoutButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={async () => {
        await fetch("/api/admin/logout", { method: "POST" });
        router.push("/admin/login");
        router.refresh();
      }}
      style={{ border: "1px solid #cfcfd4", borderRadius: 999, background: "#fff", padding: "6px 14px", font: "700 11px system-ui", letterSpacing: ".05em", textTransform: "uppercase", color: "#666", cursor: "pointer" }}
    >
      Salir
    </button>
  );
}
