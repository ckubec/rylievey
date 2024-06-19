/** @type {import('tailwindcss').Config} */
function textShadowPlugin({ addUtilities }) {
  const newUtilities = {
    '.text-shadow': {
      textShadow: '1px 1px #ef3550, 2px 2px #f48fb1, 3px 3px #7e57c2, 4px 4px #2196f3, 5px 5px #26c6da, 6px 6px #43a047, 7px 7px #eeff41, 8px 8px #f9a825, 9px 9px #ff5722',
    },
  };

  addUtilities(newUtilities);
}

module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,tsx,ts}"],
  theme: {
    screens: {
      'mobile': '480px',
      'tablet': '640px',
      'laptop': '1024px'
    },
    fontFamily: {
      'title': ['Motley Forces', 'sans-serif']
    },
    extend: {
      colors: {
        'title': '#FF69B4', //'#a388EE',
        'background': '#a388EE',
        'body': '#87CEEB',
      },
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    textShadowPlugin
  ],
}

