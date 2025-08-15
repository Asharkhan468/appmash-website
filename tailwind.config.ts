// tailwind.config.ts
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary1: "#d0363c",
        primary2: "#b32724",
        secondary1: "#ffffff",
        secondary2: "#f9f9f9",
      },
    },
  },
  plugins: [],
  safelist: [
    { pattern: /grid-cols-.*/ },
    { pattern: /order-.*/ },
    { pattern: /flex/ },
    { pattern: /items-center/ },
    { pattern: /justify-center/ },
    { pattern: /min-h-.*/ },
    { pattern: /bg-.*/ },
    { pattern: /text-.*/ },
     "md:grid",
    "md:grid-cols-2",
    "order-1",
    "order-2",
    "text-center",
    "md:text-left",
    "justify-center",
    "md:justify-start",
    "space-y-4",
    "gap-8",
    "flex",
    "items-center"
  ],
};

export default config;
