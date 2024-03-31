/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        customTeal: "#167f78",
        customGray: "#3F3D56",
      },
    },
  },
  plugins: [],
};
