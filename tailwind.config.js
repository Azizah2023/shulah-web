/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [  
    "./src/**/*.{js,jsx,ts,tsx}",
   ],
  theme: {
    extend: { 
      fontFamily: {
        Tajawal :[ 'Tajawal', 'sans-serif'],
      },
      keyframes: {
        slideRightToLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        slideRightToLeft: 'slideRightToLeft 6s linear infinite',
      },
      
    },
  },
  plugins: [],
}
