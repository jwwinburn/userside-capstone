/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pool': "url('https://c4.wallpaperflare.com/wallpaper/647/382/467/billiards-room-interior-design-pool-table-wallpaper-preview.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}

