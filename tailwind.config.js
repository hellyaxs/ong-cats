/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "wave-contato": "url('/images/wave-contato.svg')",
        "seta-contato": "url('/images/seta-contato.png')",
      },
      fontFamily: {
        'roboto': ['Roboto'], // Adicione fallbacks de fontes
        'sf-new-republic': ['SF New Republic', 'sans-serif'],
      },
      colors: {
        blue:{
          350: '#1368ae'
        },
        rose:{
          250: '#F58986',
          450: '#E7807D'
        },

      }
    },
  },
  plugins: [
    require("flowbite/plugin")
  ],
};
