<template>
    <div>
        <table>
            <thead>
                <tr>
                    <td>Project Name</td>
                    <td>Start Date</td>
                    <td>End Date</td>
                    <td>Size</td>
                    <td>Status</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
                <tr v-for="project in projects" :key="project.id">
                    <td>{{ project.projectName }}</td>
                    <td>{{ project.startDate }}</td>
                    <td>{{ project.endDate }}</td>
                    <td>{{ project.size }}</td>
                    <td>{{ project.status }}</td>
                    <td><button v-on:click="changeStatus(project.id)">Change Status</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                projects: JSON.parse(localStorage.getItem("projects"))
            }
        },

        methods: {
            changeStatus(id) {
                if(localStorage.getItem("role") === "admin") {
                    console.log(JSON.parse(localStorage.getItem("projects")))
                    console.log(id)
                    let data = JSON.parse(localStorage.getItem("projects"))
    
                    data[id - 1].status = "Done"
    
                    localStorage.setItem("projects", JSON.stringify(data));
                } else {
                    alert("You are not an admin!")
                }
            }
        }
    }
</script>

<style scoped>
    table {
        border: 2px solid;
    }

    table thead td {
        border: 2px solid;
        background-color: aquamarine;
    }

    table td {
        padding: 1rem;
    }

    table tbody td {
        border: 2px solid;
    }
</style>