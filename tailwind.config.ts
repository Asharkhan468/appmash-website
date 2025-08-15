import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary1: '#d0363c', // apna actual color code dalna
        primary2: '#b32724',
        secondary1: '#ffffff',
        secondary2: '#f9f9f9',
      },
    },
  },
  safelist: [
    'bg-primary1',
    'bg-primary2',
    'bg-secondary1',
    'bg-secondary2',
    'text-primary1',
    'text-primary2',
    'text-secondary1',
    'text-secondary2',
    'text-gray-300',
    'bg-black',
    'bg-gradient-to-r',
    'from-primary2/40',
    'via-black',
    'to-primary2/20',
    'md:grid',
    'md:grid-cols-2',
    'order-1',
    'order-2',
    'flex',
    'items-center',
    'justify-center',
    'min-h-screen',
  ],
  plugins: [],
}

export default config
