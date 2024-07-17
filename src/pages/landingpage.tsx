import { createSignal, onMount } from "solid-js";
import { render } from "solid-js/web";
import "./asset/css/landingpage.css";

export default function LandingPage() {
  const [loggedInUser, setLoggedInUser] = createSignal<string | null>(null);
  const [fileName, setFileName] = createSignal("Upload Lampiran (Max 10 MB)");
  const [showPopup, setShowPopup] = createSignal(false);
  const [showLoginPopup, setShowLoginPopup] = createSignal(false);

  onMount(() => {
    const user = JSON.parse(localStorage.getItem("currentUser") || "null");
    if (user) {
      setLoggedInUser(user.username);
    }
  });

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    setLoggedInUser(null);
  };

  const handleFileChange = (event: Event) => {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      setFileName(input.files[0].name);
    } else {
      setFileName("Upload Lampiran (Max 10 MB)");
    }
  };

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    if (!loggedInUser()) {
      setShowLoginPopup(true);
      setTimeout(() => {
        setShowLoginPopup(false);
      }, 3000);
    } else {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
        (event.target as HTMLFormElement).reset();
        setFileName("Upload Lampiran (Max 10 MB)");
      }, 3000);
    }
  };

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
            <a href="http://localhost:3000/tentang">Tentang</a>
          </li>
          <li>
            <a href="#tatacara">Tata Cara</a>
          </li>
          <li>
            <a href="#contact">Kontak</a>
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
              <a href="http://localhost:3000/about" class="login">
                Login
              </a>
              <a href="http://localhost:3000/" class="register">
                Register
              </a>
            </>
          )}
        </div>
      </nav>
      <header class="header">
        <div class="header-content" id="home">
          <h1>
            Laporan Anda, <span>Aksi Kami</span>
          </h1>
          <p>Easyrep adalah solusi cepat dan mudah untuk melaporkan masalah infrastruktur di lingkungan Anda.</p>
          <a href="#" class="btn">
            Get Started
          </a>
        </div>
        <img src="src/pages/asset/img/ilustrasi2.png" alt="Illustration" class="header-image" />
      </header>
      <div class="form-page">
        <div class="form-container">
          <div class="form-header">
            <h2>Sampaikan Laporan Anda</h2>
            <p>
              Perhatikan cara penyampaian laporan dengan benar{" "}
              <a href="#" class="tooltip">
                ?
              </a>
            </p>
          </div>
          <form action="#" method="post" enctype="multipart/form-data" onSubmit={handleSubmit}>
            <input type="text" placeholder="Ketikkan judul laporanmu disini!" required />
            <textarea placeholder="Ketikkan isi laporan Anda" rows="5" required></textarea>
            <input type="date" placeholder="Pilih tanggal kejadian" required />
            <input type="text" placeholder="Ketik lokasi kejadian" required />
            <div class="file-upload">
              <input type="file" id="file" class="file-input" accept=".jpg,.jpeg,.png,.pdf" required onChange={handleFileChange} />
              <label for="file">{fileName()}</label>
            </div>
            <button type="submit">Lapor Sekarang!</button>
          </form>
          {showPopup() && (
            <div class="popup">
              <img src="src/pages/asset/img/centangg.png" alt="Check" class="check-icon" />
              <p>Laporan Anda akan segera diproses</p>
            </div>
          )}
          {showLoginPopup() && (
            <div class="popup warning">
              <p>Silahkan login terlebih dahulu untuk dapat melaporkan.</p>
            </div>
          )}
        </div>
      </div>
      <div class="section_container feature_container" id="tatacara">
        <h3 class="section__subheader">Langkah-langkah pelaporan</h3>
        <h2 class="section__header">
          Berikut ini merupakan tata cara melapor melalui <span class="break">website ini</span>
        </h2>
      </div>
      <div class="feature__grid">
        <div class="feature__card">
          <div>.01</div>
          <h4>Tulis Laporan</h4>
          <p>Sampaikan keluhan atau aspirasi Anda dengan jelas, sertakan detail seperti waktu, lokasi, dan bukti pendukung.</p>
        </div>
        <div class="feature__card">
          <div>.02</div>
          <h4>Sampaikan</h4>
          <p>Setelah laporan Anda lengkap, klik tombol 'Lapor Sekarang' untuk mengirimkan laporan Anda kepada kami.</p>
        </div>
        <div class="feature__card">
          <div>.03</div>
          <h4>Tunggu Tanggapan</h4>
          <p>Tunggu tim kami untuk memproses laporan Anda. Anda akan menerima pemberitahuan mengenai status laporan Anda.</p>
        </div>
        <div class="feature__card">
          <div>.04</div>
          <h4>Follow Up</h4>
          <p>Anda dapat mengikuti perkembangan laporan Anda melalui situs ini atau menghubungi kami langsung.</p>
        </div>
      </div>
      <div class="contact-container" id="contact">
        <div class="contact-info">
          <div class="info-item">
            <div class="icon">📍</div>
            <div class="details">
              <h3>Alamat</h3>
              <p>
                Jl. Proklamasi, No 132
                <br />
                Jakarta Pusat
              </p>
            </div>
          </div>
          <div class="info-item">
            <div class="icon">📞</div>
            <div class="details">
              <h3>Phone</h3>
              <p>
                +62 889 9556 7879
                <br />
                +62 858 3637 9987
              </p>
            </div>
          </div>
          <div class="info-item">
            <div class="icon">📧</div>
            <div class="details">
              <h3>Email</h3>
              <p>helloeasyrep@gmail.com</p>
            </div>
          </div>
        </div>
        <div class="contact-form">
          <h2>Kontak Kami</h2>
          <p>Silahkan isi form di bawah ini untuk menghubungi kami</p>
          <form>
            <input type="text" placeholder="Masukan nama anda" required />
            <input type="email" placeholder="Masukan email anda" required />
            <textarea placeholder="Masukan pesan anda" required></textarea>
            <button type="submit">Kirim</button>
          </form>
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
