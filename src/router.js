import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home";
import Detail from "./views/Detail";

Vue.use(Router);

const router = new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        name: "home",
        component: Home,
      },
      {
        path: "/:search",
        name: "homeSearch",
        component: Home,
      },
      {
        path: "/detalhe/:id",
        name: "detail",
        component: Detail,
      },
    ]
  });

  export default router;