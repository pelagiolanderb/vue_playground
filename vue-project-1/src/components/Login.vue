<template>
    <label for="name">Name: </label>
    <input type="text" name="name" id="name" v-model="name">
    <label for="password">Password: </label>
    <input type="password" name="password" id="password" v-model="password">
    <button v-on:click="login()">Login</button>
</template>

<script>
    export default {
        data() {
            return {
                users: [
                    { id: 1, name: "lander", password: "lander123", role: "client" },
                    { id: 2, name: "admin", password: "admin123", role: "admin" }
                ],
                name: "",
                password: ""
            }
        },
        methods: {
            login() {
                this.users.forEach((user) => {
                    if (user.name === this.name) {
                        if (user.password === this.password) {
                            alert("Logged In");
                            localStorage.setItem("isLogIn", true);
                            localStorage.setItem("role", user.role);
                            document.location.href = "/";
                        } 
                    }
                })
            }
        }
    }
</script>