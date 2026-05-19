export default function Modal({
  title,
  children,
}) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
      <div className="bg-white p-6 rounded-2xl w-[400px] shadow-lg">
        <h2 className="text-xl font-bold mb-4">
          {title}
        </h2>

        <div>{children}</div>
      </div>
    </div>
  );
}