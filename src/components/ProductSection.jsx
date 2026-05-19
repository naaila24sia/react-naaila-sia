export default function ProductSection() {
  const products = [
    "Burger",
    "Pizza",
    "Spaghetti",
  ];

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Products
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl shadow"
          >
            {product}
          </div>
        ))}
      </div>
    </div>
  );
}