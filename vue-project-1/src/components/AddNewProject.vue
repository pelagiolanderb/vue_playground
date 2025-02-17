<template>
    <label for="projectName">Project Name</label>
    <input type="text" name="projectName" id="projectName" v-model="projectName">
    <label for="startDate">Start Date</label>
    <input type="date" name="startDate" id="startDate" v-model="startDate">
    <label for="endDate">End Date</label>
    <input type="date" name="endDate" id="endDate" v-model="endDate">
    <label for="size">Size</label>
    <input type="dropdown" name="size" id="size" v-model="size">
    <button v-on:click="add()">Add</button>
</template>

<script>
    export default {
        data() {
            return {
                projectName: "",
                startDate: "",
                endDate: "",
                size: "",
                status: "In Progress",
                projects: [],
                id: JSON.parse(localStorage.getItem("projects")) ? JSON.parse(localStorage.getItem("projects")).length : 0,
            }
        },
        methods: {
            add() {
                this.id++
                if(localStorage.getItem("projects")) {
                    let data = JSON.parse(localStorage.getItem("projects"));

                    data.push({id: this.id, projectName: this.projectName, startDate: this.startDate, endDate: this.endDate, size: this.size, status: this.status});

                    localStorage.setItem("projects", JSON.stringify(data));
                } else {
                    this.projects.push({id: this.id, projectName: this.projectName, startDate: this.startDate, endDate: this.endDate, size: this.size, status: this.status})
                    localStorage.setItem("projects", JSON.stringify(this.projects));
                }
                this.projectName = ""
                this.startDate = ""
                this.endDate = ""
                this.size = ""
            }
        }
    }
</script>