module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url(../static/media/home-back.png)",
        'content-image': "url(../static/media/home1.svg)",
      })
    },
    fontFamily: {
      'h1': ['Sofia Pro Black'],
      'h2': ['Sofia Pro Black'],
      'h3': ['Sofia Pro Black'],
      'h4': ['Sofia Pro Black'],
    }
  },
  variants: {},
  plugins: [],
};
