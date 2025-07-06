/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      colors: {
        accent: '#64ffda',
        primary: '#0a192f',
        secondary: '#112240',
        'text-primary': '#ccd6f6',
        'text-secondary': '#8892b0',
      },
      backgroundColor: {
        'primary': '#0a192f',
        'secondary': '#112240',
        'accent': '#64ffda',
      },
      textColor: {
        'primary': '#ccd6f6',
        'secondary': '#8892b0',
        'accent': '#64ffda',
      }
    },
  },
  plugins: [],
}
