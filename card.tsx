export function Card({ children, ...props }) {
  return (
    <div className="rounded-2xl border p-4 shadow-md" {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="p-2">{children}</div>;
}