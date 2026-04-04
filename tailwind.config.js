/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brandRed: "#7C3AED",       // Rebranded: Violet-700 (main brand)
        brandPurple: "#8B5CF6",    // Violet-500
        brandBlue: "#6366F1",      // Indigo-500
        brandGlow: "#A78BFA",      // Violet-400 (for glow effects)
        darkBg: "#050508",         // Slightly blue-tinted dark
      },
      fontFamily: {
        heading: ['Outfit', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #6366F1, #8B5CF6, #7C3AED)',
      },
    },
  },
  plugins: [],
}
