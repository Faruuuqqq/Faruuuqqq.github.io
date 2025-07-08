/** @type {import('tailwindcss').Config} */
import tailwindcssAnimate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true, // Membuat class .container menjadi di tengah
    },
    extend: {
      // Kustomisasi lain bisa ditambahkan di sini
    },
  },
  plugins: [tailwindcssAnimate],
};

export default config;