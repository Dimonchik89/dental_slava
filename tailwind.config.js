/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        "black": "#000000",
        "gray": "#161616",
        "yellow": "#F0DE36",
        "gray-light": "#d3d3d3"
      },
      fontSize: {
        "sm": "10px",
        "base": '14px',
        "xl": '16px',
        '2xl': '20px',
        '3xl': '24px',
        '4xl': '30px',
        '5xl': '38px',
      },
      container: {
        padding: "20px",
      },
    },
  },
  plugins: [],
}
