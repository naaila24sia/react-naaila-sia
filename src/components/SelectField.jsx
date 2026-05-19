export default function SelectField({
  label,
  options = [],
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-gray-700">
        {label}
      </label>

      <select className="border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-hijau">
        {options.map((option, index) => (
          <option key={index}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}