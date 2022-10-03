<template>
    <div class="loading" v-if="loading">Loading ...</div>
    <div v-else>
        <table class="sticky">
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Category</th>
                <th>Link</th>
            </tr>

            <tr v-for="header in content" :key="header.Description">
                <td>{{header.API}}</td>
                <td>{{header.Description}}</td>
                <td>{{header.Category}}</td>
                <td>{{header.Link}}</td>
            </tr>
        </table>

    </div>
</template>
<script>
export default {
    data() {
        return {
            content: [],
            loading: true,
        }
    },
    created() {
        this.loadData()
    },
    methods:{
        async loadData(){
            await this.$store.dispatch("loadContent")

            this.content = this.$store.getters["data"]
            this.loading = false
            
        }
    }
}
</script>
<style scoped>
table {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
}
.sticky th{
    position: sticky;
    top:12%;
}
.light .sticky th{
    background-color: white;
}
.dark .sticky th{
    background-color: #424242;
}
.dark td{
    border-color: black !important;
    color: white;
}
.dark th{
    border-color: black !important;
    color: white;
}
td{
    border: 1px solid ;
    text-align: center;
    padding: 18px;
    border: 1px solid #dddddd;
}
th {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 18px;
   
}

.light tr:nth-child(even) {
    background-color: #dddddd;
}
.dark tr:nth-child(even) {
    background-color: grey;
}
.light tr:nth-child(odd) {
    background-color: white;
}
.dark tr:nth-child(odd) {
    background-color: #424242;
}


.loading {
    font-size: 100px;
    display: flex;
    justify-content: center;
    margin-top: 10%;
}
.light .loading {
  color: black;
}
.dark .loading {
  color: #212121;
}
</style>