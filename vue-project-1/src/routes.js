import Home from "./components/Home.vue";
import Skills from "./components/Skills.vue";
import Contact from "./components/Contact.vue";

const routes = [
  { path: "/", component: Home, name: "home" },
  { path: "/skills", component: Skills, name: "skills" },
  { path: "/contact", component: Contact, name: "contact" },
];

export default routes;
