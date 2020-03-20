import Vue from "vue";
import Vuetify, { colors } from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        primary: "#1eba74",
        accent: colors.orange.lighten2,
        black: "#000000",
        white: "#ffffff"
      },
      dark: {
        primary: "#009e5b",
        accent: colors.orange.lighten2,
        black: "#ffffff",
        white: "#000000"
      }
    },
    options: {
      customProperties: true
    }
  },
  icons: {
    iconfont: "mdi"
  }
});
