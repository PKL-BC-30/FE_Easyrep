import { Component, createEffect, Suspense } from "solid-js";
import { useRouteData } from "@solidjs/router";
import type { AboutDataType } from "./about.data";
import "./login.css";
import { createSignal } from "solid-js";

export default function Login() {
  const [email, setEmail] = createSignal("");
  const [password, setPassword] = createSignal("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log({
      email: email(),
      password: password(),
    });
  };

  return (
    <section>
      <div class="container">
        <div class="form-container">
          <img class="navbar" src="src\pages\asset\img\logo.png" alt="logo" />
          <h1>Masuk ke akun Anda</h1>
          <p>Selamat datang kembali! Pilih metode untuk login:</p>
          <div class="social-login">
            <button class="google">
              <img src="src\pages\asset\img\google-logo.png" alt="google logo" />
              Google
            </button>
            <button class="facebook">
              <img src="src\pages\asset\img\fb.png" alt="facebook logo" />
              Facebook
            </button>
          </div>
          <div class="separator">
            <div class="separator-line"></div>
            <div class="separator-text">ATAU</div>
            <div class="separator-line"></div>
          </div>
          <form onSubmit={handleRegister}>
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
            <div class="forgot-password">Lupa password??</div>
            <button type="submit" class="submit-btn">
              Masuk
            </button>
          </form>
          <div class="login-link">
            Belum punya akun? <a href="#">Buat sekarang!</a>
          </div>
        </div>
        <div class="image-container">
          <h1>Lihat fasilitas </h1>
          <h2>infrastruktur rusak??</h2>
          <h1>Masuk untuk melaporkan sekarang!!</h1>
        </div>
      </div>
    </section>
  );
}
