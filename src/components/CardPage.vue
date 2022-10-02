<template>
  <div class="loading" v-if="loading">Loading ...</div>
  <div class="cardPage" v-else>
    <div class="searchBar" >
      <input type="text" v-model="searchedText" placeholder="Search Card" />
    </div>


    <div class="searchList" v-if="this.searchedText">
      <ul>
        <li v-for="(el,index) in filterList()" :key="index" @click="scrollToBottom(el)">{{el}}</li>
      </ul>
    </div>
    <div class="card" v-for="(content,index) in content" :key="index">
      <div ref="someRef" :data-key="content.API">
      <button @click="removeItem(content)">x</button>
      <div class="container">
        <h4><b>{{content.API}}</b></h4>
        <p>{{content.Description}}</p>
      </div>
    </div>
    </div>
  </div>
</template>
<script>



export default {
  data() {
    return {
      content: [],
      colorTheme: "",
      searchedText: "",
      searchedList: [],
      loading: true
    }
  },
  created() {
    this.loadData()
    this.colorTheme = localStorage.getItem("color-theme")
  },
  methods: {
    async loadData() {
      this.loading = true
      await this.$store.dispatch("loadContent")
      this.content = this.$store.getters["data"]
      this.loading = false
    },
    filterList() {
      this.$refs["someRef"].forEach(el => el.classList.remove('highlight'))
      if (!this.searchedText.length)
        return [];
      let filtered = this.content.filter(e => {
        return e.API.toLowerCase().includes(this.searchedText.toLowerCase())
      })
      let list = filtered.map(e => e.API)
      return list

    },
    scrollToBottom(el) {
      console.log(el)
      console.log(this.$refs["someRef"])
      this.$refs["someRef"].find(elem => elem.getAttribute('data-key') == el).scrollIntoView({ behavior: "smooth" })
      this.$refs["someRef"].find(elem => elem.getAttribute('data-key') == el).classList.add("highlight")
    },
    
    itemClicked(item) {
      console.log(item)
    },
    removeItem(event) {
      console.log(event)
      let index = this.content.map(e => e.API).indexOf(event.API)
      console.log(index)
      if (index > -1) {
        this.content.splice(index, 1);
      }
    }
  }
}
</script>
<style scoped>


.cardPage {
  padding-left: 100px;
}

input {
  width: 50%;
  height: 30px;
  
}
.dark input{
  background-color: #212121;
  color: grey;
}
.light input{
  background-color: #eee;
  color: black;
}

.searchBar {
  margin-left: 10px;
  color: #eee;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  width: 22%;
  height: auto;
  display: inline-block;
  margin: 10px;
  
  text-align: center;
}
.light .card{
  background-color: #eee;
  color: black;
}
.dark .card{
  background-color: #212121;
  color: grey;
  
}


.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 20px 10px;
}

button {
  margin-left: 17rem;
  margin-top: 5px;
  border: 1px solid;
  border-radius: 20px;
}

.light button {
  background-color: skyblue;
  color: black;
  border-color: red;
}

.dark button {
  background-color: grey;
  color: black;
  border-color: grey;
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
.light .searchList li{
  color: black;
}
.dark .searchList li{
  color: grey;
  
}
.searchList{
  margin-left: 10px;
  width: 50%;
  margin-top: 0px;
  border-radius: 5px;
  justify-content: center;
  
}
.light .searchList{
  border: 1px solid #eee;
  background-color: #eee;
}
.dark .searchList{
  border: 1px solid black;
  background-color: #212121;
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
.light .highlight{
  background-color: #9E9E9E;
}
.dark .highlight{
  background-color: #424242;
}
</style>