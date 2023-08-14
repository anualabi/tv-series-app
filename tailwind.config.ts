import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
            fontFamily: {
        sans: ['var(--font-helveticaNeue)']
      },
      fontSize: {
        sm: '0.8125rem',
        base: '0.9375rem',
        lg: '1.125rem',
        xl: '1.1875rem',
        '2xl': '1.4375rem',
        '3xl': '1.6875rem',
        '7xl': '4.625rem'
      },
      lineHeight: {
        sm: '0.9375rem',
        base: '1.125rem',
        lg: '1.375rem',
        xl: '1.4375rem',
        '2xl': '1.75rem',
        '3xl': '2.0625rem',
        '7xl': '5.625rem'
      }
    },
  },
  plugins: [],
}
export default config
