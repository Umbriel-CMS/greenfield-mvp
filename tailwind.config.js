/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      margin: {
        'right-3rem': '3rem',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blueDark: '#142634',
        white: '#FFFFFF',
        background1: '#F1EDE2',
        background2: '#F2EBDA',
        background3: '#F1F2F2',
        background4: '#FFF7FF',
        background5: '#E1EDF2',
        transparent: 'transparent',
      },
      fontFamily: {
        primary: ['Montserrat', 'sans-serif'],
        secondary: ['Roboto', 'serif'],
        tertiary: ['GeistMono-Medium', 'sans-serif'],
        heading: ['Rubik Variable']
      },
    },
  },
  plugins: [],
}

