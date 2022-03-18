function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: ['./src/**/*.{html,js}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        'aref-ruqaa': ['Aref Ruqaa', 'serif'],
      },
      colors: {
        primary: {
          lighter: withOpacityValue('--primary-lighter'),
          light: withOpacityValue('--primary-light'),
          DEFAULT: withOpacityValue('--primary'),
          dark: withOpacityValue('--primary-dark'),
        },
        navText: {
          blue: '#0BD5D9',
        },
      },
      backgroundImage: {
        'hero-section': 'url(assets/Herosection_bg.svg)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
  ],
};
