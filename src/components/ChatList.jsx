export default function ChatList({ chats, selectChat }) {
  return (
    <div style={{ width: "30%", borderRight: "1px solid #ccc" }}>
      <h3>Chats</h3>

      {chats.length === 0 && <p>No chats yet</p>}

      {chats.map((chat, index) => (
        <div
          key={index}
          onClick={() => selectChat(chat.id)}
          style={{
            padding: "10px",
            cursor: "pointer",
            borderBottom: "1px solid #eee"
          }}
        >
          {chat.name}
        </div>
      ))}
    </div>
  );
}
