const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url(../static/media/home-back.png)",
        'content-image': "url(../static/media/home1.svg)",
      }),
    },
    fontFamily: {
      sofia: ['"Sofia Pro Black"', ...defaultTheme.fontFamily.sans],      
    }
  },
  variants: {},
  plugins: [],
};
