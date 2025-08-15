// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config = {
  content: {
    files: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    // @ts-ignore  // TS warning ignore
    safelist: [
      'md:grid',
      'md:grid-cols-2',
      'order-1',
      'order-2',
      'text-center',
      'md:text-left',
      'justify-center',
      'md:justify-start',
      'space-y-4',
      'gap-8',
      'flex',
      'items-center'
    ],
  },
  theme: {
    extend: {
      colors: {
        primary1: '#d0363c',
        primary2: '#b32724',
        secondary1: '#ffffff',
        secondary2: '#f9f9f9',
      },
    },
  },
  plugins: [],
} satisfies Config

export default config
