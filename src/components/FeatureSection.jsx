export default function FeatureSection() {
  const features = [
    "Dashboard Modern",
    "Manajemen Produk",
    "Laporan Penjualan",
  ];

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold mb-4">
        Features
      </h2>

      <div className="grid grid-cols-3 gap-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white p-5 rounded-2xl shadow"
          >
            {feature}
          </div>
        ))}
      </div>
    </div>
  );
}