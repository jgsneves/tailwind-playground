module.exports = {
  purge: ["./public/**/*.html"],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url(../static/media/home-back.png)"
      })
    },
    fontFamily: {
      'h1': ['Sofia Pro Black'],
      'h2': ['Sofia Pro Black'],
    }
  },
  variants: {},
  plugins: [],
};
