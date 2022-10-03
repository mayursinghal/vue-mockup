<template>
    <div class="searchBar">
        <input type="text" v-model="searchedText" placeholder="Search Card" />
    </div>


    <div class="searchList" v-if="this.searchedText">
        <ul>
            <li v-for="(el,index) in filterList()" :key="index" @click="scrollToCard(el)">{{el}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['content'],
    emits:['scrollToCard'],
    data() {
        return {
            searchedText: "",
            searchedList: [],
        }
    },
    methods: {
        scrollToCard(el){
            this.$emit('scrollToCard',el)
        },
        filterList() {
            if (!this.searchedText.length)
                return [];
            let filtered = this.content.filter(e => {
                return e.API.toLowerCase().includes(this.searchedText.toLowerCase())
            })
            let list = filtered.map(e => e.API)
            return list

        },
    }
}
</script>
<style>
input {
    width: 50%;
    height: 30px;

}

.dark input {
    background-color: #212121;
    color: grey;
}

.light input {
    background-color: #eee;
    color: black;
}

.searchBar {
    margin-left: 10px;
    color: #eee;
}

.searchList ul {
    list-style: none;
    margin-top: 0px;
    margin-left: 0px;
}

.searchList li {
    margin-bottom: 5px;
    cursor: pointer;
    padding: 10px;

    margin-top: 2px;
    text-align: center;
    font-size: 20px;
}

.light .searchList li {
    color: black;
}

.dark .searchList li {
    color: grey;

}

.searchList {
    margin-left: 10px;
    width: 50%;
    margin-top: 0px;
    border-radius: 5px;
    justify-content: center;

}

.light .searchList {
    border: 1px solid #eee;
    background-color: #eee;
}

.dark .searchList {
    border: 1px solid black;
    background-color: #212121;
}
</style>