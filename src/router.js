import Vue from "vue";
import Router from "vue-router";

import Home from "./components/Sections/Home/Home.vue";
import Skills from "./components/Sections/Skills/Skills.vue";
import Experience from "./components/Sections/Experience/Experience.vue";
import Portfolio from "./components/Sections/Portfolio/Portfolio.vue";
import Contact from "./components/Sections/Contact.vue";
import Blog from "./components/Sections/Blogs/Blog.vue";
import Learn from "./components/Sections/Learn/Learn.vue";
import Design from "./components/Sections/Design/Design.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/skills",
      name: "Skills",
      component: Skills
    },
    {
      path: "/experience",
      name: "Experience",
      component: Experience
    },
    {
      path: "/portfolio",
      name: "Portfolio",
      component: Portfolio
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact
    },
    {
      path: "/blog",
      name: "Blog",
      component: Blog
    },
    {
      path: "/design",
      name: "Design",
      component: Design
    },
    {
      path: "/learn",
      name: "Learn",
      component: Learn
    },
  ]
});
