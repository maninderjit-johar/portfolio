/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        customTeal: "#167f78",
        custonGray: "#3F3D56",
      },
    },
  },
  plugins: [],
};
