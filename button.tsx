export function Button({ children, ...props }) {
  return (
    <button className="px-4 py-2 rounded-xl text-white bg-blue-600 hover:bg-blue-700 transition" {...props}>
      {children}
    </button>
  );
}