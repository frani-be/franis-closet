/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'frani-purple': {
          50: '#F3E8FF',
          100: '#E9D5FF',
          200: '#D8B4FE',
          300: '#C084FC',
          400: '#A855F7',
          500: '#9333EA',
          600: '#7E22CE',
          700: '#6B21A8',
          800: '#581C87',
          900: '#3B0764',
        },
        'frani-gray': {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
