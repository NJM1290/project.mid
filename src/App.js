

function App() {
    return (
      <div>
  <title>
    Julio Malinso - CV
  </title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
  <div className="container mx-auto p-6 bg-white shadow-lg rounded-lg">
    <div className="flex items-center mb-6">
      <img alt="Foto Julio Malinso, seorang pria muda dengan rambut hitam pendek, mengenakan kemeja putih dan tersenyum" className="w-32 h-32 rounded-full mr-6" height={150} src="https://storage.googleapis.com/a1aa/image/fD3e3We8sZJZkIkf8iMixteOadiIEeLCPyzB8y4ustTFLXZ8E.jpg" width={150} />
      <div>
        <h1 className="text-4xl font-bold text-blue-600 mb-2">
          Julio Malinso
        </h1>
        <p className="text-lg mb-1">
          <i className="fas fa-map-marker-alt">
          </i>
          Tempat Tinggal: Beengdarat, Indonesia
        </p>
        <p className="text-lg mb-1">
          <i className="fas fa-birthday-cake">
          </i>
          Tanggal Lahir: 15 Maret 2002
        </p>
        <p className="text-lg">
          <i className="fas fa-user-graduate">
          </i>
          Status: Mahasiswa
        </p>
      </div>
    </div>
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
        Pendidikan
      </h2>
      <ul>
        <li className="mb-4">
          <h3 className="text-xl font-semibold">
            Sarjana Informatika (2021–Sekarang)
          </h3>
          <p className="text-lg">
            Universitas Klabat
          </p>
          <p className="text-lg">
            IPK: 3.85 (Sementara)
          </p>
          <p className="text-lg">
            Fokus: Pengembangan Sistem Informasi, Kecerdasan Buatan
          </p>
        </li>
        <li>
          <h3 className="text-xl font-semibold">
            SMA Negeri 1 Beengdarat (2018–2021)
          </h3>
          <p className="text-lg">
            Jurusan: IPA
          </p>
          <p className="text-lg">
            Prestasi: Juara 1 Olimpiade Komputer Tingkat Provinsi
          </p>
        </li>
      </ul>
    </div>
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
        Kontak
      </h2>
      <ul className="list-none">
        <li className="text-lg mb-2">
          <i className="fas fa-envelope">
          </i>
          Email: julio.malinso@example.com
        </li>
        <li className="text-lg mb-2">
          <i className="fas fa-phone">
          </i>
          Nomor Telepon: +62 812 3456 7890
        </li>
        <li className="text-lg mb-2">
          <i className="fab fa-linkedin">
          </i>
          LinkedIn:
          <a className="text-blue-600" href="https://linkedin.com/in/juliomalinso">
            linkedin.com/in/juliomalinso
          </a>
        </li>
        <li className="text-lg">
          <i className="fab fa-github">
          </i>
          GitHub:
          <a className="text-blue-600" href="https://github.com/juliomalinso">
            github.com/juliomalinso
          </a>
        </li>
      </ul>
    </div>
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
        Keahlian
      </h2>
      <ul className="list-none">
        <li className="text-lg mb-2">
          <i className="fas fa-code">
          </i>
          Bahasa Pemrograman: JavaScript (React, Node.js), Python (Django, Flask), C++
        </li>
        <li className="text-lg mb-2">
          <i className="fas fa-database">
          </i>
          Database: Firebase, MySQL, PostgreSQL
        </li>
        <li className="text-lg mb-2">
          <i className="fas fa-tools">
          </i>
          Framework &amp; Teknologi: React, Tailwind CSS, Docker, REST API
        </li>
        <li className="text-lg">
          <i className="fas fa-chart-line">
          </i>
          Lainnya: Analisis Data, Desain Sistem (UML, ERD)
        </li>
      </ul>
    </div>
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
        Pengalaman
      </h2>
      <ul className="list-none ml-4">
        <li className="mb-4">
          <h3 className="text-xl font-semibold">
            Frontend Developer Intern (Juli 2023 – September 2023)
          </h3>
          <p className="text-lg">
            PT TechNova, Manado
          </p>
          <p className="text-lg">
            Mengembangkan antarmuka web interaktif menggunakan React dan Tailwind CSS
          </p>
          <p className="text-lg">
            Berhasil meningkatkan performa aplikasi hingga 30% melalui optimasi kode
          </p>
        </li>
        <li>
          <h3 className="text-xl font-semibold">
            Asisten Laboratorium Pemrograman (2022 – Sekarang)
          </h3>
          <p className="text-lg">
            Universitas Klabat
          </p>
          <p className="text-lg">
            Membimbing mahasiswa dalam penguasaan dasar pemrograman dan debugging
          </p>
        </li>
      </ul>
    </div>
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
        Proyek Pribadi
      </h2>
      <ul className="list-none ml-4">
        <li className="mb-4">
          <h3 className="text-xl font-semibold">
            Sistem Perpustakaan SD Tumaluntung
          </h3>
          <p className="text-lg">
            Menggunakan: Node.js, Firebase, Bootstrap
          </p>
          <p className="text-lg">
            Deskripsi: Membuat sistem manajemen perpustakaan berbasis web untuk memudahkan pengelolaan data buku, anggota, dan peminjaman
          </p>
        </li>
        <li className="mb-4">
          <h3 className="text-xl font-semibold">
            Simulasi Hitung Kartu Blackjack
          </h3>
          <p className="text-lg">
            Menggunakan: JavaScript
          </p>
          <p className="text-lg">
            Deskripsi: Membuat simulasi untuk membantu pemain memahami strategi dalam permainan kartu Blackjack
          </p>
        </li>
        <li>
          <h3 className="text-xl font-semibold">
            Website CV Pribadi
          </h3>
          <p className="text-lg">
            Menggunakan: React, Tailwind CSS
          </p>
          <p className="text-lg">
            Deskripsi: Website dinamis untuk menampilkan profil dan portofolio
          </p>
        </li>
      </ul>
    </div>
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
        Sertifikasi
      </h2>
      <ul className="list-none">
        <li className="text-lg mb-2">
          Google IT Support Professional Certificate (2023)
        </li>
        <li className="text-lg mb-2">
          Fundamental Cloud Computing – AWS Academy (2022)
        </li>
        <li className="text-lg">
          React Developer Certification – FreeCodeCamp (2022)
        </li>
      </ul>
    </div>
    <div className="mb-8">
      <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
        Prestasi
      </h2>
      <ul className="list-none">
        <li className="text-lg mb-2">
          Juara 1 Lomba Pemrograman Nasional (2023)
        </li>
        <li className="text-lg mb-2">
          Juara 2 Hackathon Mahasiswa ASEAN (2022)
        </li>
        <li className="text-lg">
          Beasiswa Penuh Universitas Klabat untuk Prestasi Akademik (2021 – Sekarang)
        </li>
      </ul>
    </div>
    <div>
      <h2 className="text-2xl font-semibold text-blue-600 border-b-2 border-blue-600 pb-2 mb-4">
        Minat
      </h2>
      <ul className="list-none">
        <li className="text-lg mb-2">
          Pengembangan Web
        </li>
        <li className="text-lg mb-2">
          Kecerdasan Buatan dan Pembelajaran Mesin
        </li>
        <li className="text-lg">
          Teknologi Open Source
        </li>
      </ul>
    </div>
  </div>
</div>

 
  );
};
  
export default App;
