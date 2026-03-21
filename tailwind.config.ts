import type { Config } from "tailwindcss";

// In Tailwind v4, most config is done in globals.css via @theme.
// This file is kept minimal for compatibility.
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
} satisfies Config;
