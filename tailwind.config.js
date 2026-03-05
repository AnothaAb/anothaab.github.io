module.exports = {
  content: ["./app/**/*.{ts,tsx,js,jsx}", "./components/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        bg:      "#0d0d0f",
        ink:     "#e4e4f0",
        mute:    "#6b6b8a",
        card:    "#111118",
        line:    "#1e1e2e",
        accent:  "#c9a227",
        accent2: "#00ffcc",
      },
      boxShadow: {
        soft: "0 10px 20px rgba(0,0,0,0.5), 0 2px 6px rgba(0,0,0,0.3)",
        glow: "0 0 24px rgba(201,162,39,0.15), 0 0 48px rgba(201,162,39,0.06)",
      },
    },
  },
  plugins: [],
};
