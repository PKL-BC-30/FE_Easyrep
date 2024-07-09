import { Component, createEffect, Suspense } from "solid-js";
import { useRouteData } from "@solidjs/router";
import type { AboutDataType } from "./about.data";
import { createSignal } from "solid-js";
import CryptoJS from "crypto-js";
import "./asset/css/login.css"

const Login = () => {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ambil data pengguna dari localStorage
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find((user) => user.email === email());

    if (!user) {
      alert("Email yang Anda inputkan tidak ada");
      return;
    }

    const hashedPassword = CryptoJS.SHA256(password()).toString();
    if (user.password === hashedPassword) {
      alert("Login sukses");
      // Simpan nama pengguna di localStorage
      localStorage.setItem("loggedInUser", JSON.stringify(user.username));
      // Redirect ke path setelah login
      window.location.href = "/landingpage";
    } else {
      alert("Password salah");
    }
  };

  return (
    <section>
      <div class="container">
        <div class="form-container">
          <img class="navbarr" src="src/pages/asset/img/logoweb.png" alt="logo" />
          <h2>Masuk ke akun Anda</h2>
          <p>Selamat datang kembali! Pilih metode untuk login:</p>
          <div class="social-login">
            <button class="google">
              <img src="src/pages/asset/img/google.png" alt="google logo" />
              Google
            </button>
            <button class="facebook">
              <img src="src/pages/asset/img/fb.png" alt="facebook logo" />
              Facebook
            </button>
          </div>
          <div class="separator">
            <div class="separator-line"></div>
            <div class="separator-text">ATAU</div>
            <div class="separator-line"></div>
          </div>
          <form onSubmit={handleSubmit}>
            <div>
              <p>Email</p>
              <label for="email"></label>
              <input type="email" id="email" value={email()} onInput={(e) => setEmail(e.target.value)} placeholder="Masukkan email Anda" required />
            </div>
            <div>
              <p>Password</p>
              <label for="password"></label>
              <input type="password" id="password" value={password()} onInput={(e) => setPassword(e.target.value)} placeholder="Masukkan password Anda" required />
            </div>
            <div class="forgot-password">Lupa password?</div>
            <button type="submit" class="submit-btn">
              Masuk
            </button>
          </form>
          <div class="login-link">
            Belum punya akun? <a href="http://localhost:3000/">Buat sekarang!</a>
          </div>
        </div>
        <div class="image-containerr">
          <h1>Lihat fasilitas </h1>
          <h2>infrastruktur rusak?</h2>
          <h3>Masuk untuk melaporkan sekarang!</h3>
        </div>
      </div>
    </section>
  );
};

export default Login;

