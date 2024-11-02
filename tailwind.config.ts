import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        red_main:"#E63946",
        red_sec: "#FFB1B1",
        
      },
      letterSpacing: {
        widest: ".4rem"
      }
    },
  },
  plugins: [],
};
export default config;
