import "./asset/css/tentang.css";

export default function LandingPage() {
  return (
    <section class="landing-page">
      <nav class="navbar">
        <div class="logo">
          <img src="src/pages/asset/img/logoweb.png" alt="Logoweb" />
        </div>
        <ul class="nav-links">
          <li>
            <a href="#home">Beranda</a>
          </li>
          <li>
            <a href="#about">Tentang</a>
          </li>
          <li>
            <a href="#tatacara">Tata Cara</a>
          </li>
          <li>
            <a href="#contact">Kontak</a>
          </li>
        </ul>
      </nav>

      <h1 class="display-4"></h1>
      <p class="lead"></p>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#4F428D"
          fill-opacity="1"
          d="M0,128L26.7,144C53.3,160,107,192,160,197.3C213.3,203,267,181,320,197.3C373.3,213,427,267,480,272C533.3,277,587,235,640,202.7C693.3,171,747,149,800,165.3C853.3,181,907,235,960,245.3C1013.3,256,1067,224,1120,208C1173.3,192,1227,192,1280,208C1333.3,224,1387,256,1413,272L1440,288L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
        ></path>
      </svg>

      <div class="card-container">
        <div class="card">
          <div class="card-content">
            <h1>Visi</h1>
            <p> Visi kami adalah menciptakan lingkungan yang lebih baik dan berkelanjutan dengan memanfaatkan teknologi untuk memberdayakan masyarakat dalam pelaporan dan penanganan kerusakan.</p>
          </div>
        </div>
        <div class="card">
          <div class="card-content">
            <h1>Misi</h1>
            <p>
              Misi kami adalah menyediakan platform yang dapat diandalkan dan mudah digunakan untuk melaporkan setiap kerusakan dengan detail yang jelas dan dokumentasi yang akurat. Kami berkomitmen untuk bekerja sama dengan pemerintah,
              lembaga, dan masyarakat umum untuk mencapai lingkungan yang lebih baik.
            </p>
          </div>
        </div>
      </div>

      <footer class="footer">
        <div class="footer-top">
          <div class="footer-logo">
            <img src="src/pages/asset/img/logoweb.png" alt="Logoweb" />
          </div>
          <div class="footer-content">
            <div class="footer-links">
              <h3>Tautan</h3>
              <ul>
                <li>
                  <a href="#home">Beranda</a>
                </li>
                <li>
                  <a href="#about">Tentang</a>
                </li>
                <li>
                  <a href="#howto">Tata Cara</a>
                </li>
                <li>
                  <a href="#contact">Kontak</a>
                </li>
              </ul>
            </div>
            <div class="footer-contact">
              <h3>Kontak Kami</h3>
              <ul>
                <li>📍 Lokasi: Jl. Proklamasi No.123, Jakarta Pusat, Indonesia</li>
                <li>📞 Telepon: +62 889 9556 7879 atau +62 858 3637 9987</li>
                <li>📧 Email: helloeasyrep@gmail.com</li>
              </ul>
            </div>
            <div class="footer-socials">
              <h3>Ikuti Kami</h3>
              <ul>
                <li>
                  <a href="#">
                    <img src="src/pages/asset/img/facebook-icon.png" alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="src/pages/asset/img/twitter-icon.png" alt="Twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="src/pages/asset/img/instagram-icon.png" alt="Instagram" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; 2024 Easyrep. All rights reserved.</p>
        </div>
      </footer>
    </section>
  );
}
