import api from "./api";

export default {
    plugins: {
      api
    },
    create: function(Vue) {
      Object.keys(this.plugins).forEach(
        function(plugin) {
          Object.defineProperty(Vue.prototype, `$${plugin}`, {
            value: this.plugins[plugin]
          });
        }.bind(this)
      );
    }
  };