<template>
  <div :class="colorTheme" class="fullHeight">
    <NavbarVue @changeTheme="changeTheme"/>
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarVue from './components/Navbar.vue';
export default {
  name: 'App',
  components: {
    NavbarVue
  },
  data() {
        return {
            colorTheme: "light"
        }
    },
    methods:{
      changeTheme(updatedColor){
        this.colorTheme = updatedColor
        console.log(this.colorTheme)
      }
    }
}
</script>
<style>
  .light{
    background-color: white;
  }
  .dark{
    background-color: black;
  }
 
</style>

