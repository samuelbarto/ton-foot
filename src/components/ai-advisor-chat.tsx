"use client";

import { FormEvent, useMemo, useRef, useState } from "react";
import { knowledgeBase, quickPrompts } from "@/data/assistant-knowledge";

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

function normalize(text: string) {
  return text.toLowerCase().trim();
}

function scoreQuestion(input: string, keywords: string[]) {
  const query = normalize(input);
  let score = 0;

  for (const keyword of keywords) {
    if (query.includes(normalize(keyword))) {
      score += 2;
    }
  }

  const terms = query.split(/\s+/).filter(Boolean);
  for (const term of terms) {
    if (keywords.some((keyword) => normalize(keyword) === term)) {
      score += 1;
    }
  }

  return score;
}

function generateReply(input: string) {
  const ranked = knowledgeBase
    .map((item) => ({
      item,
      score: scoreQuestion(input, item.keywords),
    }))
    .sort((a, b) => b.score - a.score);

  const best = ranked[0];

  if (!best || best.score <= 0) {
    return "Je peux surtout aider sur: coachs, reservation, tarifs, creneaux, annulation, securite et fonctionnement de la plateforme. Si besoin urgent, appelle le conseiller humain.";
  }

  return best.item.answer;
}

export default function AiAdvisorChat() {
  const nextIdRef = useRef(1);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "Bonjour, je suis le Conseiller IA TON FOOT. Pose ta question sur la plateforme et je te reponds tout de suite.",
    },
  ]);

  const canSend = useMemo(() => input.trim().length > 0, [input]);

  function nextId(prefix: "u" | "a") {
    const id = `${prefix}-${nextIdRef.current}`;
    nextIdRef.current += 1;
    return id;
  }

  function sendMessage(text: string) {
    const userText = text.trim();
    if (!userText) {
      return;
    }

    const userMessage: Message = {
      id: nextId("u"),
      role: "user",
      content: userText,
    };

    const assistantMessage: Message = {
      id: nextId("a"),
      role: "assistant",
      content: generateReply(userText),
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput("");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    sendMessage(input);
  }

  return (
    <section className="card aiSection">
      <div className="aiHeader">
        <p className="cardTitle">Conseiller IA</p>
        <p className="cardMeta">Reponse immediate sur le fonctionnement de TON FOOT.</p>
      </div>

      <div className="aiPrompts">
        {quickPrompts.map((prompt) => (
          <button
            className="chip chipButton"
            key={prompt}
            type="button"
            onClick={() => sendMessage(prompt)}
          >
            {prompt}
          </button>
        ))}
      </div>

      <div className="aiMessages">
        {messages.map((message) => (
          <article
            className={message.role === "assistant" ? "aiBubble aiAssistant" : "aiBubble aiUser"}
            key={message.id}
          >
            <p className="aiRole">{message.role === "assistant" ? "Conseiller IA" : "Vous"}</p>
            <p className="aiText">{message.content}</p>
          </article>
        ))}
      </div>

      <form className="aiForm" onSubmit={handleSubmit}>
        <input
          className="aiInput"
          placeholder="Ex: Comment annuler une reservation ?"
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <button className="btn btnPrimary" disabled={!canSend} type="submit">
          Envoyer
        </button>
      </form>
    </section>
  );
}
