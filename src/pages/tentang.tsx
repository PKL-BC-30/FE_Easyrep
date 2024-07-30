import { createSignal, onMount } from "solid-js";
import "./tentang.css";

export default function LandingPage() {
  const [loggedInUser, setLoggedInUser] = createSignal("");


  onMount(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setLoggedInUser(user.username);
    }
  });

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setLoggedInUser("");
  };

  return (
    <section class="landing-page">
      <nav class="navbar">
        <div class="logo">
          <img src="public\img\logoweb.png" alt="Logoweb" />
        </div>
        <ul class="nav-links">
          <li>
            <a href="/">Beranda</a>
          </li>
          <li>
            <a href="/#tatacara">Tata Cara</a>
          </li>
          <li>
            <a href="/#contact">Kontak</a>
          </li>
          <li>
            <a href="/tentang">Tentang</a>
          </li>
          <li>
            <a href="/history">Laporan</a>
          </li>
        </ul>
        <div class="auth-buttons">
          {loggedInUser() ? (
            <>
              <span>Halo, {loggedInUser()}</span>
              <button onClick={handleLogout} class="logout">
                Logout
              </button>
            </>
          ) : (
            <>
              <a href="/login" class="login">
                Login
              </a>
              <a href="/" class="register">
                Register
              </a>
            </>
          )}
        </div>
      </nav>

      <div class="content-containeer">
        <div class="title">
          <div class="title-text">Apa itu Easyrep?</div>
          <div class="title-line"></div>
        </div>
        <div class="text">
          Easyrep adalah platform online yang memudahkan warga untuk melaporkan masalah infrastruktur di lingkungan mereka, seperti jalan rusak, lampu jalan mati, atau fasilitas umum lainnya yang perlu diperbaiki. Dengan antarmuka yang
          mudah digunakan dan proses pelaporan yang cepat, EZRep memastikan setiap laporan langsung diteruskan ke pihak berwenang untuk tindakan segera.
        </div>
      </div>

      <div class="tentang-container">
        <div class="tentang">
          <div class="tentang-content">
            <h1>Visi</h1>
            <p> Visi kami adalah menciptakan lingkungan yang lebih baik dan berkelanjutan dengan memanfaatkan teknologi untuk memberdayakan masyarakat dalam pelaporan dan penanganan kerusakan.</p>
          </div>
        </div>
        <div class="tentang">
          <div class="tentang-content">
            <h1>Misi</h1>
            <p>
              Misi kami adalah menyediakan platform yang dapat diandalkan dan mudah digunakan untuk melaporkan setiap kerusakan dengan detail yang jelas dan dokumentasi yang akurat. Kami berkomitmen untuk bekerja sama dengan pemerintah,
              lembaga, dan masyarakat umum untuk mencapai lingkungan yang lebih baik.
            </p>
          </div>
        </div>
      </div>
      <div class="containeer">
        <div class="text-wrapper">
          <div class="text-content">
            <span>Setiap laporan yang Anda buat merupakan langkah kecil </span>
            <span>yang berarti untuk menciptakan perubahan baru.</span>
          </div>
        </div>
        <div class="button-wrapper">
          <div class="button">Laporkan kerusakan</div>
        </div>
      </div>

      <footer class="footer">
        <div class="footer-top">
          <div class="footer-logo">
            <img src="public\img\logoweb.png" alt="Logoweb" />
          </div>
          <div class="footer-content">
            <div class="footer-links">
              <h3>Tautan</h3>
              <ul>
                <li>
                  <a href="./landingpage.tsx">Beranda</a>
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
                    <img src="public\img\facebook-icon.png" alt="Facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="public\img\twitter-icon.png" alt="Twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="public\img\instagram-icon.png" alt="Instagram" />
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
