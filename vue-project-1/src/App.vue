<template>
  <header v-if="isLoggedIn">
    <nav>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/add-new-project">Add New Project</router-link>
      <button v-on:click="logout()">Log out</button>
    </nav>
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
import { RouterView, RouterLink } from "vue-router";

export default {
  data() {
    return {
      isLoggedIn: localStorage.getItem('isLogIn'),
    }
  },
  components: {
    RouterView,
    RouterLink,
  },
  methods: {
    logout() {
      localStorage.removeItem("isLogIn")
      localStorage.removeItem("role")
      document.location.href = "/login"
    }
  }
};
</script>

<style scoped>
/* General Styles */
body {
  font-family: sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #333;
}

/* Header Styles */
header {
  background-color: #551111;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
}

nav {
  display: flex;
  justify-content: center;
}

nav a {
  color: #fff;
  text-decoration: none;
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #555;
}

nav a.router-link-exact-active {
  background-color: #93adc9;
  color: #fff;
}

/* Main Content Styles */
main {
  padding: 2rem;
  max-width: 960px;
  margin: 2rem auto;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

/* Router View Styles (if needed) */
.router-view-content {
  padding: 1rem;
}

/* Responsive Design (Example) */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
  }

  nav a {
    margin: 0.5rem 0;
    display: block;
    text-align: center;
  }

  main {
    padding: 1rem;
    margin: 1rem auto;
  }
}
</style>
