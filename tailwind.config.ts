import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'site-auth': 'url("/images/hero.jpg")'
      },
      backgroundColor: {
        accent: '#e50914'
      },
      textColor: {
        accent: '#e50914'
      }
    },
  },
  plugins: [],
}
export default config
