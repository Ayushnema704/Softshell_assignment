/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Blue-800
        secondary: '#3B82F6', // Blue-500
        accent: '#3B82F6', // Blue-500 (for highlights)
        success: '#10B981', // Green-500
        warning: '#F59E0B', // Amber-500
        error: '#EF4444', // Red-500
        dark: '#1F2937', // Cool Gray-800
        light: '#F9FAFB', // Cool Gray-50
        glass: 'rgba(255,255,255,0.15)',
        glassDark: 'rgba(24,24,27,0.6)',
        textLight: '#1E293B', // Slate-800
        textDark: '#F3F4F6', // Slate-100
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.18)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}; 