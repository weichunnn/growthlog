export default function Card({ className, children }) {
  return (
    <div
      className={`flex items-center justify-center p-4 border border-gray-200 rounded-lg shadow break-words ${className}`}
    >
      {children}
    </div>
  );
}
