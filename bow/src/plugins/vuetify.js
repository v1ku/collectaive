import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#588157', // fern-green
        secondary: '#3a5a40', // hunter-green
        accent: '#344e41', // brunswick-green
        error: '#e76f51', // burnt-sienna (example for error color)
        info: '#778da9', // silver-lake-blue (example for info color)
        success: '#2a9d8f', // persian-green (example for success color)
        warning: '#e9c46a', // saffron (example for warning color)
      },
      dark: {
        primary: '#1b263b', // oxford-blue
        secondary: '#415a77', // yinmn-blue
        accent: '#778da9', // silver-lake-blue
        error: '#e76f51', // burnt-sienna (example for error color)
        info: '#778da9', // silver-lake-blue (example for info color)
        success: '#2a9d8f', // persian-green (example for success color)
        warning: '#e9c46a', // saffron (example for warning color)
      },
    },
  },
});
