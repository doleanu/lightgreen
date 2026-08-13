"use client";

import { useState } from "react";
import { waHref } from "@/lib/chatAssistant";
import type { Dict } from "@/lib/dict";

const PEOPLE_OPTIONS = ["1", "2", "3", "4", "5", "6", "7", "8", "9+"];

function todayISO() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function formatDateEs(iso: string) {
  if (!iso) return "";
  const [y, m, d] = iso.split("-");
  return `${d}/${m}/${y}`;
}

export function ReservationForm({ d }: { d: Dict["reserva"] }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [people, setPeople] = useState("2");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const peopleText = people === "9+" ? "un grupo de 9 o más personas" : `${people} persona${people === "1" ? "" : "s"}`;

    const lines = [
      `¡Hola Light Green! Soy ${name || "—"}.`,
      `Me gustaría reservar mesa para ${peopleText}${date ? ` el ${formatDateEs(date)}` : ""}${time ? ` a las ${time}` : ""}.`,
    ];
    if (message.trim()) lines.push(message.trim());

    window.open(waHref(lines.join(" ")), "_blank", "noopener,noreferrer");
  }

  const inputClass =
    "w-full rounded-xl border border-terracotta/20 bg-cream px-4 py-2.5 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-terracotta";

  return (
    <form onSubmit={handleSubmit} className="warm-card mx-auto max-w-xl rounded-[1.75rem] border border-terracotta/15 bg-cream-card p-6 text-left shadow-lg shadow-ink/5 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 sm:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">{d.nameLabel}</span>
          <input
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={d.namePlaceholder}
            className={inputClass}
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">{d.dateLabel}</span>
          <input
            type="date"
            required
            min={todayISO()}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className={inputClass}
          />
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">{d.timeLabel}</span>
          <input
            type="time"
            required
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className={inputClass}
          />
        </label>

        <label className="flex flex-col gap-1.5 sm:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">{d.peopleLabel}</span>
          <select value={people} onChange={(e) => setPeople(e.target.value)} className={inputClass}>
            {PEOPLE_OPTIONS.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>

        <label className="flex flex-col gap-1.5 sm:col-span-2">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-soft">{d.messageLabel}</span>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder={d.messagePlaceholder}
            rows={3}
            className={`${inputClass} resize-none`}
          />
        </label>
      </div>

      <button
        type="submit"
        className="mt-6 w-full rounded-full bg-olive px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-cream transition-transform hover:scale-[1.02]"
      >
        {d.submitLabel}
      </button>
      <p className="mt-3 text-center text-[0.7rem] text-ink-faint">{d.note}</p>
    </form>
  );
}
