/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik"],
        techmono: ["TechMono"],
        jetbrainsmono: ["JetbrainsMono"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-150px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
          "100%": { transform: "translateY(0px)" },
        },
        waveMove: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        radioWave1: "waveMove 28s linear infinite",
        radioWave2: "waveMove 20s linear infinite",
        radioWave3: "waveMove 12s linear infinite",
        blink: "blink 2s ease-in-out infinite",
        fadeIn: "fadeIn 1s ease-in-out forwards",
        float: "float 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
