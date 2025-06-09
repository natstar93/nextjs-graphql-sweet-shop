/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { fontFamily } = require('tailwindcss/defaultTheme');

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'neutral-layer': '#202546',
      'neutral-detail-bolder': '#f0ffff',
      'secondary-main': '#f2b4c0',
      'neutral-detail-bold': '#b1cdb7',
      'neutral-layer-dark': '#0e1033',
      'primary-main': '#d96e87',
    },
    fontFamily: {
      sans: [
        'Montserrat',
        'helvetica',
        'arial',
        'sans-serif',
      ],
    },
    extend: {
      fontFamily: {
        monserrat: ['Montserrat', 'helvetica', 'arial', 'sans-serif', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
