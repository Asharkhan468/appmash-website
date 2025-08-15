module.exports = {
  content: {
    files: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}'
    ],
    // Safelist patterns that work in Tailwind v4
    safelist: [
      // Layout structure
      'container',
      { pattern: /^mx-/ },
      { pattern: /^px-/ },
      { pattern: /^py-/ },
      
      // Grid system
      { pattern: /^grid-cols-/ },
      { pattern: /^gap-/ },
      
      // Flexbox
      { pattern: /^flex-/ },
      'flex-row',
      'flex-col',
      
      // Add any other problematic classes here
      // For dynamic classes like `bg-${color}-500`
      { pattern: /^bg-/, variants: ['hover', 'focus'] },
      { pattern: /^text-/, variants: ['hover'] }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [],
}