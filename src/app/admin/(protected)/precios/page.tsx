import { pl, editorConfig } from "@/lib/pricelist/instance";
import { PriceListEditor } from "@/components/admin/PriceListEditor";
import { LogoutButton } from "@/components/admin/LogoutButton";

export const dynamic = "force-dynamic";

export default async function PricesAdminPage() {
  const { data } = await pl.getData();
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "28px 16px 64px", fontFamily: "system-ui, sans-serif", color: "#1d1d1f" }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 16 }}>
        <div>
          <h1 style={{ margin: 0, fontSize: 24 }}>Precios</h1>
          <p style={{ margin: "4px 0 0", fontSize: 14, color: "#6e6e73" }}>
            Cambia precios, añade o quita {editorConfig.noun.many}. La web se actualiza sola.
          </p>
        </div>
        <div style={{ display: "flex", gap: 8, flex: "none" }}>
          {editorConfig.viewHref && (
            <a href={editorConfig.viewHref} target="_blank" rel="noopener noreferrer" style={{ border: "1px solid #cfcfd4", borderRadius: 999, padding: "6px 14px", font: "700 11px system-ui", letterSpacing: ".05em", textTransform: "uppercase", color: "#666", textDecoration: "none" }}>
              Ver web
            </a>
          )}
          <LogoutButton />
        </div>
      </div>
      <div style={{ marginTop: 20 }}>
        <PriceListEditor ec={editorConfig} initialData={data} />
      </div>
    </main>
  );
}
