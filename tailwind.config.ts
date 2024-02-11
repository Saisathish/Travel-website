/** @type {import('tailwindcss').Config} */

const isProd = process.env.NODE_ENV === "production";

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#30AF5B',
          90: '#292C27',
        },
        gray: {
          10: '#EEEEEE',
          20: '#A2A2A2',
          30: '#7B7B7B',
          50: '#585858',
          90: '#141414',
        },
        orange: {
          50: '#FF814C',
        },
        blue: {
          70: '#021639',
        },
        yellow: {
          50: '#FEC601',
        },
      },
      backgroundImage: {
        'bg-img-1': isProd ? "url('/Travel-website/img-1.png')" : "url('/img-1.png')",
        'bg-img-2': isProd ? "url('/Travel-website/img-2.png')" : "url('/img-2.png')",
        'feature-bg': isProd ? "url('/Travel-website/feature-bg.png')" : "url('/feature-bg.png')",
        pattern: isProd ? "url('/Travel-website/pattern.png')" : "url('/pattern.png')",
        'pattern-2': isProd ? "url('/Travel-website/pattern-bg.png')" : "url('/pattern-bg.png')",
      },
      screens: {
        xs: '400px',
        '3xl': '1680px',
        '4xl': '2200px',
      },
      maxWidth: {
        '10xl': '1512px',
      },
      borderRadius: {
        '5xl': '40px',
      },
    },
  },
  plugins: [],
};