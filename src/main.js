import { createApp } from 'vue'
import './style.css'
import './terminal.css'
import './blog.css'
import App from './App.vue'

Object.defineProperty(String.prototype, 'capitalize', {
    value: function() {
      return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
});

createApp(App).mount('#app')