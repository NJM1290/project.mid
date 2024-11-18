

function App() {
    return (
      <div>
  <meta charSet="utf-8" />
  <meta content="width=device-width, initial-scale=1.0" name="viewport" />
  <title>
    CV Julio
  </title>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
  <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
  <style dangerouslySetInnerHTML={{__html: "\n   body {\n            font-family: 'Roboto', sans-serif;\n            margin: 0;\n            padding: 0;\n            background-color: #f4f4f4;\n        }\n        .container {\n            width: 80%;\n            margin: 0 auto;\n            background: #fff;\n            padding: 20px;\n            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n        }\n        .header {\n            text-align: center;\n            padding: 20px 0;\n        }\n        .header img {\n            border-radius: 50%;\n            width: 150px;\n            height: 150px;\n        }\n        .header h1 {\n            margin: 10px 0;\n            font-size: 2.5em;\n        }\n        .header p {\n            font-size: 1.2em;\n            color: #666;\n        }\n        .content {\n            margin: 20px 0;\n        }\n        .content h2 {\n            font-size: 2em;\n            margin-bottom: 10px;\n            color: #333;\n        }\n        .content p {\n            font-size: 1.1em;\n            line-height: 1.6;\n            color: #666;\n        }\n        .content ul {\n            list-style: none;\n            padding: 0;\n        }\n        .content ul li {\n            background: #f9f9f9;\n            margin: 10px 0;\n            padding: 10px;\n            border-left: 5px solid #007BFF;\n        }\n        .content ul li h3 {\n            margin: 0;\n            font-size: 1.5em;\n        }\n        .content ul li p {\n            margin: 5px 0 0;\n            font-size: 1em;\n        }\n        .footer {\n            text-align: center;\n            padding: 20px 0;\n            color: #666;\n        }\n  " }} />
  <div className="container">
    <div className="header">
      <img alt="Gambar anime Naruto dengan latar belakang putih" height={150} src="https://storage.googleapis.com/a1aa/image/HCVFY1OUXcZkJVs9YZ8TKsb4hWnH5EWeOWaV4SRTDCsPnI5JA.jpg" width={150} />
      <h1>
        Julio
      </h1>
      <p>
        Mahasiswa Universitas Klabat
      </p>
    </div>
    <div className="content">
      <h2>
        Profil
      </h2>
      <p>
        Saya Julio, seorang mahasiswa di Universitas Klabat (UNKLAB). Saya memiliki minat yang besar dalam bidang teknologi informasi dan selalu berusaha untuk mengembangkan keterampilan saya di bidang ini.
      </p>
      <h2>
        Pendidikan
      </h2>
      <ul>
        <li>
          <h3>
            Universitas Klabat
          </h3>
          <p>
            Jurusan: Teknologi Informasi
          </p>
          <p>
            Tahun: 2020 - Sekarang
          </p>
        </li>
      </ul>
      <h2>
        Pengalaman
      </h2>
      <ul>
        <li>
          <h3>
            Asisten Laboratorium Komputer
          </h3>
          <p>
            Universitas Klabat
          </p>
          <p>
            Tahun: 2021 - Sekarang
          </p>
          <p>
            Deskripsi: Membantu mahasiswa dalam praktikum dan pemeliharaan perangkat keras dan lunak laboratorium.
          </p>
        </li>
      </ul>
      <h2>
        Keterampilan
      </h2>
      <ul>
        <li>
          <h3>
            Bahasa Pemrograman
          </h3>
          <p>
            Python, Java, JavaScript
          </p>
        </li>
        <li>
          <h3>
            Web Development
          </h3>
          <p>
            HTML, CSS, JavaScript, React
          </p>
        </li>
        <li>
          <h3>
            Database
          </h3>
          <p>
            MySQL, PostgreSQL
          </p>
        </li>
      </ul>
    </div>
    <div className="footer">
      <p>
        © 2023 Julio. Semua hak dilindungi.
      </p>
    </div>
  </div>
</div>


  );
};
  
export default App;
