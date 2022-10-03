<template>
    <header :class="colorTheme">
        <nav>
            <ul>
                <div class="tab">
                    <li class="active">
                        <router-link to="/table">Table Page</router-link>
                    </li>
                    <li>
                        <router-link to="/card">Card Page</router-link>
                    </li>
                </div>
                <div class="button">
                    <li>
                        <button @click="changeTheme">{{colorTheme}}</button>
                    </li>
                </div>
            </ul>
        </nav>
    </header>
</template>
<script>
export default {
    emits:['changeTheme'],
    data() {
        return {
            colorTheme: ""
        }
    },
    created() {
        localStorage.setItem("color-theme", "light")
        this.colorTheme = "light"
    },
    methods: {
        changeTheme() {
            if (localStorage.getItem("color-theme") == "dark") {
                localStorage.setItem("color-theme", "light")
                this.colorTheme = "light"
            } else {
                localStorage.setItem("color-theme", "dark")
                this.colorTheme = "dark"
            }
            this.$emit('changeTheme',this.colorTheme)
        }
    }
}
</script>
<style scoped>
header {
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
    position: sticky;
    top: 0

}


ul {
    width: 100%;
}

.dark {
    background-color: #212121;

}

.light {
    background-color: #dddddd;
}

header a {
    text-decoration: none;
    display: inline-block;
    padding: 0.75rem 1.5rem;
    border: 2px solid transparent;
    font-weight: bold;
    font-size: large;
}



.light a {
    color:black;
}
.dark a {
    color:grey;
}


.light a:active,
a:hover,
a.router-link-active {
    border: 1px solid black !important;
}

.dark a:active,
a:hover,
a.router-link-active {
    border: 1px solid grey !important;
}



header nav {
    width: 100%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

header ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

li {
    margin: 0 0.5rem;
}

button {
    padding: 5px;
    height: 50px;
    width: 70px;
    font-weight: bold;
    font-size: large;
    border-radius: 25px;
    border: 1px solid;
    
    margin-right: 1.5rem;
}
.light button{
    background-color: white;
    color: black;
    border-color: grey;
}
.dark button{
    background-color: grey;
    color: black;
    border-color: grey;
}

.tab {
    margin: 10px;
    width: 90%;
    display: flex
}

</style>