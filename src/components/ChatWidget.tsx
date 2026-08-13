"use client";

import { useEffect, useRef, useState } from "react";
import {
  askName,
  askPeople,
  askTime,
  closeLabel,
  confirmReply,
  dateOptions,
  greeting,
  greetingReply,
  headerStatus,
  headerTitle,
  hoursReply,
  inputPlaceholder,
  locationReply,
  mainQuickReplies,
  matchIntent,
  menuReply,
  normalizeDatePhrase,
  openLabel,
  peopleOptions,
  peopleText,
  quickReplies,
  reserveStart,
  sendLabel,
  timeOptions,
  unknownReply,
  waHref,
  waMessage,
} from "@/lib/chatAssistant";

type Message = {
  id: number;
  sender: "bot" | "user";
  text: string;
  quickReplies?: string[];
  link?: string;
};

type ReservationStep = null | "date" | "time" | "people" | "name" | "confirm";

let nextId = 1;
function makeMessage(sender: Message["sender"], text: string, quickReplies?: string[], link?: string): Message {
  return { id: nextId++, sender, text, quickReplies, link };
}

function ChatBubbleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        d="M4 5h16a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H9l-4.4 3.3A.6.6 0 0 1 3.6 19V6a1 1 0 0 1 1-1Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M5 5 L19 19 M19 5 L5 19" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path d="M4 12 L20 4 L14 20 L11 13 L4 12 Z" fill="currentColor" />
    </svg>
  );
}

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const [step, setStep] = useState<ReservationStep>(null);
  const [draft, setDraft] = useState({ date: "", time: "", people: "", name: "" });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && messages.length === 0) {
      setMessages([makeMessage("bot", greeting, mainQuickReplies)]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function reply(text: string, quickReplies?: string[], link?: string, delay = 550) {
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMessages((prev) => [...prev, makeMessage("bot", text, quickReplies, link)]);
    }, delay);
  }

  function respondToIntent(intent: ReturnType<typeof matchIntent>) {
    if (intent === "greeting") {
      reply(greetingReply, mainQuickReplies);
      return;
    }
    if (intent === "hours") {
      reply(hoursReply, [quickReplies.reserve, quickReplies.location]);
      return;
    }
    if (intent === "menu") {
      reply(menuReply, [quickReplies.reserve, quickReplies.hours]);
      return;
    }
    if (intent === "location") {
      reply(locationReply, [quickReplies.reserve, quickReplies.hours]);
      return;
    }
    if (intent === "reserve") {
      setStep("date");
      reply(reserveStart, dateOptions);
      return;
    }
    reply(unknownReply, mainQuickReplies);
  }

  function handleReservationStep(text: string) {
    if (step === "date") {
      setDraft((d) => ({ ...d, date: normalizeDatePhrase(text) }));
      setStep("time");
      reply(askTime, timeOptions);
      return;
    }
    if (step === "time") {
      setDraft((d) => ({ ...d, time: text }));
      setStep("people");
      reply(askPeople, peopleOptions);
      return;
    }
    if (step === "people") {
      setDraft((d) => ({ ...d, people: peopleText(text) }));
      setStep("name");
      reply(askName);
      return;
    }
    if (step === "name") {
      const finalDraft = { ...draft, name: text };
      setStep("confirm");
      const link = waHref(waMessage(finalDraft.name, finalDraft.people, finalDraft.date, finalDraft.time));
      setTyping(true);
      setTimeout(() => {
        setTyping(false);
        setMessages((prev) => [
          ...prev,
          makeMessage(
            "bot",
            confirmReply(finalDraft.name, finalDraft.people, finalDraft.date, finalDraft.time),
            undefined,
            link,
          ),
        ]);
      }, 550);
      return;
    }
  }

  function handleSend(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((prev) => [...prev, makeMessage("user", trimmed)]);
    setInput("");

    if (step && step !== "confirm") {
      handleReservationStep(trimmed);
      return;
    }

    respondToIntent(matchIntent(trimmed));
  }

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-8 sm:right-8">
      {open && (
        <div className="mb-4 flex h-[32rem] w-[22rem] max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-3xl border border-terracotta/25 bg-char-deep shadow-2xl shadow-black/50">
          <div className="flex items-center justify-between border-b border-terracotta/25 bg-char px-4 py-3.5">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-terracotta text-cream-card">
                <ChatBubbleIcon className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.15em] text-cream-card">{headerTitle}</p>
                <p className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.25em] text-cream-card/55">
                  <span className="h-1.5 w-1.5 rounded-full bg-olive" />
                  {headerStatus}
                </p>
              </div>
            </div>
            <button
              aria-label={closeLabel}
              onClick={() => setOpen(false)}
              className="rounded-full p-1.5 text-cream-card/70 transition-colors hover:bg-cream-card/10 hover:text-cream-card"
            >
              <CloseIcon className="h-4 w-4" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            {messages.map((m) => (
              <div key={m.id} className={`flex flex-col ${m.sender === "user" ? "items-end" : "items-start"}`}>
                <div
                  className={
                    "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-snug " +
                    (m.sender === "user"
                      ? "rounded-br-sm bg-terracotta text-cream-card"
                      : "rounded-bl-sm bg-cream-card text-char-deep shadow-md shadow-black/20")
                  }
                >
                  {m.text}
                </div>
                {m.link && (
                  <a
                    href={m.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block rounded-full bg-terracotta px-4 py-2 text-xs font-semibold text-cream-card shadow-md shadow-black/30 transition-colors hover:bg-terracotta-bright"
                  >
                    Confirmar por WhatsApp ↗
                  </a>
                )}
                {m.quickReplies && (
                  <div className="mt-2 flex flex-wrap justify-start gap-1.5">
                    {m.quickReplies.map((qr) => (
                      <button
                        key={qr}
                        onClick={() => handleSend(qr)}
                        className="rounded-full border border-olive/60 px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-olive transition-colors hover:bg-olive hover:text-char-deep"
                      >
                        {qr}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {typing && (
              <div className="flex items-center gap-1 rounded-2xl rounded-bl-sm bg-cream-card px-3.5 py-2.5 shadow-md shadow-black/20">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-char-deep/40" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-char-deep/40 [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-char-deep/40 [animation-delay:300ms]" />
              </div>
            )}
          </div>

          <div className="flex items-center gap-2 border-t border-terracotta/25 bg-char p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend(input)}
              placeholder={inputPlaceholder}
              className="min-w-0 flex-1 rounded-full border border-terracotta/25 bg-char-deep/60 px-4 py-2 text-sm text-cream-card placeholder:text-cream-card/40 outline-none focus:border-olive"
            />
            <button
              aria-label={sendLabel}
              onClick={() => handleSend(input)}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-terracotta text-cream-card transition-colors hover:bg-terracotta-bright"
            >
              <SendIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}

      <button
        aria-label={open ? closeLabel : openLabel}
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-terracotta text-cream-card shadow-xl shadow-black/40 transition-colors hover:bg-terracotta-bright"
      >
        {open ? <CloseIcon className="h-6 w-6" /> : <ChatBubbleIcon className="h-6 w-6" />}
      </button>
    </div>
  );
}
