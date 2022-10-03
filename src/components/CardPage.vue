<template>
  <div class="loading" v-if="loading">Loading ...</div>
  <div class="cardPage" v-else>
    <SearchVue :content="content" @scrollToCard="scrollToCard"/>
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

import SearchVue from './Search.vue'

export default {
  data() {
    return {
      content: [],
      colorTheme: "",
      loading: true
    }
  },
  components:{
    SearchVue
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
    
    scrollToCard(el) {
      this.$refs["someRef"].find(elem => elem.getAttribute('data-key') == el).scrollIntoView({ behavior: "smooth" })
      this.$refs["someRef"].find(elem => elem.getAttribute('data-key') == el).classList.add("highlight")
    },
    
    removeItem(event) {
      let index = this.content.map(e => e.API).indexOf(event.API)
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