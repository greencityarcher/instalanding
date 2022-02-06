<template>
  <div id="app">
    <div class="container">
      <ul class="langList">
        <li class="langList__item" v-for="lang in $ml.list" v-bind:key="lang">
          <button @click="changeLanguage(lang)" v-text="lang">Info</button>
        </li>
      </ul>
    </div>
    <img class="main-pic" alt="Vue logo" src="./assets/round.svg">
    <h1 class="lead-text" v-text="$ml.get('h1')"></h1>
    <SimpleLinks/>
  </div>
</template>

<script>
import SimpleLinks from './components/SimpleLinks.vue'


export default {
  name: 'App',
  components: {
    SimpleLinks
  },
  //
  created: function () {
      var userLang = navigator.language || navigator.userLanguage;
      var l = userLang.substring(0,2);
      if ((l == 'ru')||(l == 'Ru')||(l =='RU')){
        this.changeLanguage('rus');
      }
      else if ((l == 'es')||(l=='Es')||(l =='ES')){
        this.changeLanguage('esp');
      }
    },
  //functions
  methods:{
    changeLanguage(lang){
      this.$ml.change(lang);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #594C3F;
  margin-top: 60px;

  .main-pic{
  display: block;
  width: 242px;
  height: 243px;
  margin-left: auto;
  margin-right: auto;
  }
  .lead-text{
    font-size: 14px;
    line-height: 1.2;
    margin-top: 50px;
    margin-bottom: 30px;
  }

}
body{
background-color: #E5E5E5;
margin:30px;
}
</style>
