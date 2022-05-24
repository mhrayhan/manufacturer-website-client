module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/background.jpg')"
      },
      backgroundOpacity: {
        '10': '0.1',
        '20': '0.2',
        '95': '0.95',
      }

    },
  },
  daisyui: {
    themes: [
      {
        doctortheme: {
          primary: "#FFD580",
          secondary: "rgb(251 191 36)",
          accent: "#3A4256",
          neutral: "#3d4451",
          yellow: "#FFD580",
          "base-100": "#ffffff",
        },
      },
      "cupcake",
    ],
  },
  plugins: [require("daisyui")],
}
