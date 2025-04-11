/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./node_modules/flowbite.{js,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#007AFF', // Merah
        secondary: '#FF2323', // Biru
        accent: 'FFC700', // Kuning
        neutral: '#111111', // Hitam
        base: '#FFFFFF', // Putih
        hijau: '#05ABBA', // Kuning
      },
      fontFamily: {
        heading: ['"Barlow Condensed"', 'sans-serif'],
        body: ['"Open Sans"', 'sans-serif'],
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#007AFF',
          secondary: '#FF2323',
          accent: 'FFC700',
          neutral: '#111111',
          hijau: '#05ABBA',
          'base-100': '#FFFFFF',
        },
      },
    ],
  },
  plugins: [
    '@tailwindcss/forms',
    '@tailwindcss/container-queries',
    require('@tailwindcss/typography'),
    require('daisyui'),
  ],
};
