/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Our-Taste-Map 커스텀 컬러
        'primary': '#222831',      // color-first
        'secondary': '#393E46',    // color-second
        'accent': '#00ADB5',       // color-third
        'background': '#EEEEEE',   // color-fourth
        
        // 카테고리 컬러
        'restaurant': '#FF6B6B',
        'cafe': '#A0522D',
        'spot': '#9B59B6',
      },
      fontFamily: {
        'pretendard': ['Pretendard', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}