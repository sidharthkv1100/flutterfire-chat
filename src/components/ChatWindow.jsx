import { useEffect, useState } from "react";
import { sendMessage, getMessages } from "../services/chatService";

export default function ChatWindow({ chatId }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    return getMessages(chatId, setMessages);
  }, [chatId]);

  const send = async () => {
    if (!text) return;
    await sendMessage(chatId, "User", text);
    setText("");
  };

  return (
    <div>
      <h3>Chat</h3>
      {messages.map((msg, i) => (
        <p key={i}><b>{msg.sender}:</b> {msg.text}</p>
      ))}

      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={send}>Send</button>
    </div>
  );
}
