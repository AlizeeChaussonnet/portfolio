module.exports = {
  mode: "jit",
  // These paths are just examples, customize them to match your project structure
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
