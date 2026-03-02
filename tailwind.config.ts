import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgDark: "#141413",
        textMain: "#FAF9F5",
        textMuted: "#6A6963",
        brandPrimary: "#7197CF",
      },
      borderRadius: {
        btn: "0.5rem", // Tailwind's standard 'lg'
      },
      transitionProperty: {
        hover: "all",
      },
      transitionDuration: {
        smooth: "300ms",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)", // ease-in-out
      },
    },
  },
  plugins: [],
};
export default config;
