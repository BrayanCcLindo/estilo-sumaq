// app/page.tsx
"use client";

import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState<
    { role: "user" | "assistant"; content: string }[]
  >([]);
  const [input, setInput] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Agrega el mensaje del usuario al estado
    setMessages((prev) => [...prev, { role: "user", content: input }]);

    // Envía la solicitud al endpoint /api/chat
    const response = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        messages: [...messages, { role: "user", content: input }],
      }),
    });

    // Lee la respuesta
    const data = await response.json();
    const assistantMessage = data.response;

    // Agrega la respuesta del asistente al estado
    setMessages((prev) => [
      ...prev,
      { role: "assistant", content: assistantMessage },
    ]);

    // Limpia el input
    setInput("");
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index}>
            <strong>{msg.role === "user" ? "You" : "Assistant"}:</strong>{" "}
            {msg.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
