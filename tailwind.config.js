/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner': "url('/img/back-img.jpg')", // Update the URL to the correct path
        // 'footer-texture': "url('../img/back-img.jpg')",
      }
    }
  }
}