import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#111',
      },
      boxShadow: {
        primary:
          '0 85px 24px hsla(0, 0, 100, 0), 0 54px 22px hsla(0, 0, 100, 0.01), 0 30px 18px hsla(0, 0, 100, 0.05), 0 14px 14px hsla(0, 0, 100, 0.09), 0 3px 7px hsla(0, 0, 100, 0.1)',
        secondary:
          '0 0 0 0.5px hsla(0, 0, 100, .05), 0 1px 2px hsla(0, 0, 100, 0.1)',
      },
    },
    fontFamily: {
      sans: ['var(--font-inter)'],
    },
    fontSize: {
      sm: ['1.4rem', '1.4'],
      md: ['1.6rem', '1.4'],
      lg: ['1.8rem', '1.4'],
      xl: ['2rem', '1.2'],
      '2xl': ['2.4rem', '1.2'],
      '3xl': ['2.8rem', '1.2'],
      '4xl': ['3.2rem', '1.2'],
      '5xl': ['4rem', '1.1'],
      '6xl': ['4.8rem', '1.1'],
      '7xl': ['5.6rem', '1.1'],
      '8xl': ['6.4rem', '1.1'],
      '9xl': ['7.2rem', '1.1'],
    },
    backgroundImage: {
      primary:
        'linear-gradient(hsla(0, 0%, 100%, 0.7) 0%, hsla(0, 0%, 100%, 1) 70%)',
    },
  },
  plugins: [],
}
export default config
