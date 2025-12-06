export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
       keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
          '100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        marquee: "marquee 18s linear infinite",
        floaty: "floaty 4s ease-in-out infinite",
      },
    },
    },
  
  plugins: [],
};
