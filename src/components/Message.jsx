export default function Message({ sender, text, isOwn }) {
  return (
    <div
      style={{
        textAlign: isOwn ? "right" : "left",
        margin: "5px 0"
      }}
    >
      <span
        style={{
          display: "inline-block",
          padding: "8px 12px",
          borderRadius: "12px",
          background: isOwn ? "#4f46e5" : "#e5e7eb",
          color: isOwn ? "#fff" : "#000"
        }}
      >
        <b>{sender}: </b>{text}
      </span>
    </div>
  );
}
