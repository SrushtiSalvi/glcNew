function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}) / ${opacityValue})`
  }
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  important: true,
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
        'herosection-lg': 'url(web/assets/herosection-lg.svg)',
      },
      spacing: {
        144: '36rem',
        120: '30rem',
      },
    },
    screens: {
      xs: '360px',
      // => @media (min-width: 360px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1366px',
      // => @media (min-width: 1366px) { ... }

      '3xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: [require('@tailwindcss/line-clamp'), require('@tailwindcss/forms')],
}
