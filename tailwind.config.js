module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
    },
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#FFD580",
          danger: "#FF0000",
          secondary: "rgb(251 191 36)",
          accent: "#3A4256",
          neutral: "#3d4451",
          yellow: "#FFD580",
          "base-100": "#ffffff",
        }
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
