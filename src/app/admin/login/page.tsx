"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, password }) });
      if (res.ok) {
        router.push("/admin/precios");
        router.refresh();
        return;
      }
      setError(res.status === 503 ? "El panel todavía no está configurado." : res.status === 401 ? "Correo o contraseña incorrectos." : "No se pudo entrar. Inténtalo de nuevo.");
    } catch {
      setError("Sin conexión. Inténtalo de nuevo.");
    }
    setBusy(false);
  }

  const input = { width: "100%", border: "1px solid #cfcfd4", borderRadius: 10, padding: "11px 12px", font: "16px system-ui", marginTop: 6 } as const;
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", background: "#f6f6f7", padding: 16, fontFamily: "system-ui, sans-serif" }}>
      <form onSubmit={submit} style={{ width: "100%", maxWidth: 360, background: "#fff", border: "1px solid #e3e3e6", borderRadius: 18, padding: 24 }}>
        <h1 style={{ margin: 0, fontSize: 22 }}>Panel de precios</h1>
        <label style={{ display: "block", marginTop: 18, fontSize: 13, fontWeight: 600, color: "#555" }}>
          Correo
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="username" style={input} />
        </label>
        <label style={{ display: "block", marginTop: 14, fontSize: 13, fontWeight: 600, color: "#555" }}>
          Contraseña
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required autoComplete="current-password" style={input} />
        </label>
        {error && <p role="alert" style={{ margin: "12px 0 0", fontSize: 13, fontWeight: 600, color: "#dc2626" }}>{error}</p>}
        <button type="submit" disabled={busy} style={{ marginTop: 18, width: "100%", border: 0, borderRadius: 999, background: "#1d1d1f", color: "#fff", padding: "12px", font: "700 13px system-ui", letterSpacing: ".05em", textTransform: "uppercase", cursor: "pointer", opacity: busy ? 0.6 : 1 }}>
          Entrar
        </button>
      </form>
    </main>
  );
}
