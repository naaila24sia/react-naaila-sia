export default function Alert({
  children,
  type = "success",
}) {
  const types = {
    success: "bg-green-100 text-green-700 border-green-400",
    danger: "bg-red-100 text-red-700 border-red-400",
    warning: "bg-yellow-100 text-yellow-700 border-yellow-400",
  };

  return (
    <div
      className={`${types[type]} border px-4 py-3 rounded-xl`}
    >
      {children}
    </div>
  );
}