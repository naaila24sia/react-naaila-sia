import PageHeader from "../components/PageHeader";
import Button from "../components/Button";
import Badge from "../components/Badge";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import Footer from "../components/Footer";
import Card from "../components/Card";
import ProductCard from "../components/ProductCard";
import Table from "../components/Table";
import InputField from "../components/InputField";
import TextArea from "../components/TextArea";
import SelectField from "../components/SelectField";
import Alert from "../components/Alert";
import Loading from "../components/Loading";
import Modal from "../components/Modal";
import HeroSection from "../components/HeroSection";
import FeatureSection from "../components/FeatureSection";
import ProductSection from "../components/ProductSection";

export default function Components() {
  const headers = ["No", "Nama Produk", "Kategori", "Harga", "Aksi"];

  const products = [
    {
      id: 1,
      name: "Laptop Asus",
      category: "Elektronik",
      price: "Rp 8.000.000",
    },
    {
      id: 2,
      name: "Sepatu Sport",
      category: "Fashion",
      price: "Rp 450.000",
    },
    {
      id: 3,
      name: "Jam Tangan",
      category: "Aksesoris",
      price: "Rp 799.000",
    },
  ];

  return (
    <div className="font-barlow bg-gray-50/50 min-h-screen">
      <PageHeader title="Components" breadcrumb={["Dashboard", "Components"]} />

      <div className="flex gap-2 mt-4">
        <Button type="primary">Edit</Button>
        <Button type="success">Simpan</Button>
        <Button type="danger">Hapus</Button>
      </div>

      <div className="flex gap-2 mt-4">
        <Badge type="success">Success</Badge>
        <Badge type="danger">Danger</Badge>
        <Badge type="warning">Warning</Badge>
      </div>

      <div className="flex gap-2 mt-4">
        <Avatar name="Budi" />
        <Avatar name="Siti" />
      </div>

      <div className="flex gap-2 mt-4">
        <Container className="bg-gray-100">
          <h1 className="text-3xl font-bold mb-4">Daftar Produk</h1>

          <p className="text-gray-600">Berikut adalah daftar produk terbaru.</p>
        </Container>
      </div>

      <div className="mt-4">
        <Card>
          <h2 className="text-xl font-bold">Judul Card</h2>
          <p className="text-gray-600">Ini adalah isi dari card.</p>
        </Card>
      </div>

      <div className="flex gap-2 mt-4">
        <ProductCard
          image="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
          title="Sepatu Sport"
          category="Fashion"
          price="Rp 450.000"
          description="Sepatu sport modern dengan desain nyaman dan ringan untuk aktivitas sehari-hari."
        />

        <ProductCard
          image="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
          title="Smartphone"
          category="Elektronik"
          price="Rp 4.500.000"
          description="Smartphone dengan performa cepat, kamera jernih, dan baterai tahan lama."
        />
      </div>

      <div className="mt-4">
        <Table headers={headers}>
          {products.map((product, index) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="border px-4 py-3">{index + 1}</td>

              <td className="border px-4 py-3">{product.name}</td>

              <td className="border px-4 py-3">{product.category}</td>

              <td className="border px-4 py-3">{product.price}</td>

              <td className="border px-4 py-3">
                <button className="bg-blue-600 text-white px-3 py-1 rounded">
                  Detail
                </button>
              </td>
            </tr>
          ))}
        </Table>
      </div>

      <div className="space-y-4 mt-6">
        <InputField label="Nama" placeholder="Masukkan nama" />

        <InputField label="Email" type="email" placeholder="Masukkan email" />

        <TextArea label="Alamat" placeholder="Masukkan alamat" />

        <SelectField label="Role" options={["Admin", "Staff", "Customer"]} />
      </div>

      <div className="space-y-4 mt-6">
        <Alert type="success">Data berhasil disimpan!</Alert>

        <Alert type="danger">Data gagal dihapus!</Alert>

        <Loading />

        <Modal title="Konfirmasi">
          <p>Apakah kamu yakin?</p>
        </Modal>
      </div>

      <HeroSection />

      <FeatureSection />

      <ProductSection />

      <Footer />
    </div>
  );
}
