import Vue from "vue";
import Toast from "vue-toastification";
// Import the CSS or use your own!
// import "vue-toastification/dist/index.css";

const options = {
    position: 'top-right',
    timeout: 3000,
    transitionDuration: 500,
    maxToasts: 8,
};

Vue.use(Toast, options);
