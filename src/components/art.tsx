/* ------------------------------------------------------------------ */
/* Hand-built SVG art for Light Green Bar & Grill — no stock images.   */
/* ------------------------------------------------------------------ */

/* two warm music notes with a soft glow — evening ambience, instrument-agnostic */
export function MusicNotes({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" className={className} aria-hidden="true">
      <circle cx="80" cy="80" r="58" fill="#d9491f" opacity="0.08" />
      <g fill="none" stroke="#1c5c33" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M62 100 V44 L108 34 V90" />
        <circle cx="54" cy="106" r="12" fill="#1c5c33" stroke="none" />
        <circle cx="100" cy="96" r="12" fill="#1c5c33" stroke="none" />
      </g>
      <path d="M62 50 L108 40" stroke="#c2932f" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

export function GrillGrate({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 60" preserveAspectRatio="none" className={className} aria-hidden="true">
      <g stroke="#3a2f26" strokeWidth="2">
        {Array.from({ length: 14 }).map((_, i) => (
          <line key={i} x1={i * 30 + 10} y1="0" x2={i * 30 + 10} y2="60" />
        ))}
      </g>
      <line x1="0" y1="14" x2="400" y2="14" stroke="#1c5c33" strokeWidth="1.4" opacity="0.5" />
      <line x1="0" y1="46" x2="400" y2="46" stroke="#1c5c33" strokeWidth="1.4" opacity="0.5" />
    </svg>
  );
}

