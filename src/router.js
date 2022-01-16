import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import About from "./views/About";

Vue.useSSRContext(VueRouter);

const router = new VueRouter({
   mode: "history",
   routes: [
      {path:"/", component: Home},
      {path:"About", component: About}
   ]
});