import Home from "./components/Home.vue";
import Skills from "./components/Skills.vue";
import Contact from "./components/Contact.vue";
import Login from "./components/Login.vue";
import ProjectManagement from "./components/Projects.vue";
import AddNewProject from "./components/AddNewProject.vue";
import Projects from "./components/Projects.vue";

const routes = [
  // { path: "/", component: Home, name: "home" },
  { path: "/skills", component: Skills, name: "skills" },
  { path: "/contact", component: Contact, name: "contact" },
  { path: "/login", component: Login, name: "login" },
  { path: "/projects", component: Projects, name: "projects" },
  { path: "/add-new-project", component: AddNewProject, name: "add-new-project" }
];

export default routes;
