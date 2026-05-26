import PageHeader from "../components/PageHeader";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";

export default function FiturXyz() {
  const issues = [
    {
      no: 1,
      issue: "Kenaikan Harga Pangan",
      kategori: "Ekonomi",
      status: "Trending",
    },
    {
      no: 2,
      issue: "Perkembangan AI di Indonesia",
      kategori: "Teknologi",
      status: "Hot",
    },
    {
      no: 3,
      issue: "Cuaca Ekstrem dan Banjir",
      kategori: "Lingkungan",
      status: "Trending",
    },
    {
      no: 4,
      issue: "Kasus Korupsi Pejabat",
      kategori: "Politik",
      status: "Viral",
    },
    {
      no: 5,
      issue: "Kenaikan UKT Mahasiswa",
      kategori: "Pendidikan",
      status: "Hot",
    },
    {
      no: 6,
      issue: "Tren Belanja Live TikTok",
      kategori: "Bisnis",
      status: "Trending",
    },
    {
      no: 7,
      issue: "Cyber Security dan Kebocoran Data",
      kategori: "Teknologi",
      status: "Viral",
    },
    {
      no: 8,
      issue: "Pemilu dan Politik Nasional",
      kategori: "Politik",
      status: "Trending",
    },
    {
      no: 9,
      issue: "Harga BBM Naik",
      kategori: "Ekonomi",
      status: "Hot",
    },
    {
      no: 10,
      issue: "Tren Konten Influencer",
      kategori: "Media Sosial",
      status: "Viral",
    },
  ];

  // Styling reusable untuk th dan td agar kodenya tetap bersih
  const cellStyle = {
    border: "1px solid #ddd",
    padding: "12px",
    textAlign: "left",
  };

  return (
    <div>
      <PageHeader title="Fitur XYZ" breadcrumb={["Dashboard", "Fitur XYZ"]} />
      <h1>Ini adalah halaman untuk fitur XYZ</h1>
      <Button variant="outline">Batal</Button>
      <Button variant="ghost">Batal</Button>
      <Button variant="destructive">Batal</Button>

      <Card className="mt-4 w-[380px]">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
          <CardAction>Card Action</CardAction>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <Card className="mt-4 w-[380px]">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>Belajar shadcn/ui</CardTitle>
            <Badge variant="secondary">Baru</Badge>
          </div>
          <CardDescription>
            Contoh penggunaan komponen shadcn/ui di React
          </CardDescription>
        </CardHeader>

        <CardContent>
          <p className="text-sm text-muted-foreground">
            Komponen ini dibuat di branch <strong>setup-shadcn</strong>
            lalu di-merge ke main.
          </p>
        </CardContent>

        <CardFooter className="flex gap-2">
          <Button>Simpan</Button>
          <Button variant="outline">Batal</Button>
        </CardFooter>
      </Card>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
          backgroundColor: "#ffffff",
          color: "#000000",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={{ ...cellStyle, width: "50px" }}>No</th>
            <th style={cellStyle}>Issue</th>
            <th style={cellStyle}>Kategori</th>
            <th style={cellStyle}>Status</th>
          </tr>
        </thead>

        <tbody>
          {issues.map((item) => (
            <tr key={item.no}>
              <td style={cellStyle}>{item.no}</td>
              <td style={cellStyle}>{item.issue}</td>
              <td style={cellStyle}>{item.kategori}</td>
              <td style={cellStyle}>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
