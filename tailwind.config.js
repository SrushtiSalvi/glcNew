function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`;
    }
    return `rgb(var(${variable}) / ${opacityValue})`;
  };
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'poppins-medium': ['Poppins Medium', 'sans serif'],
        'poppins-regular': ['Poppins', 'sans serif'],
        'poppins-thin': ['Poppins Thin', 'sans serif'],
        'poppins-light': ['Poppins Light', 'sans serif'],
        'poppins-semibold': ['Poppins SemiBold', 'sans serif'],
        'aref-ruqaa': ['Aref Ruqaa', 'serif'],
      },
      fontSize: {
        xxs: '0.65rem',
      },
      colors: {
        primary: {
          lighter: withOpacityValue('--primary-lighter'),
          light: withOpacityValue('--primary-light'),
          DEFAULT: withOpacityValue('--primary'),
          dark: withOpacityValue('--primary-dark'),
        },
        navText: '#0BD5D9',
      },
      backgroundImage: {
        'hero-section': 'url(assets/img/handshake.jpg)',
        'wave-bg': 'url(assets/img/bg.svg)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
