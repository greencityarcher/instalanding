<template>
  <div id="app">
    <section class="first-screen">
      <div class="container">
        <LangList/>
      </div>
      <img class="main-pic" alt="microlandings logo" src="./assets/round.svg">
      <h1 class="lead-text" v-text="$ml.get('h1')"></h1>
      <div>&nbsp;</div>
    </section>
    <section class="about">
      <img class="upper-divider" alt="decorative-element" src="./assets/updivider3.svg">
      <div class="container">
        <div class="about-inner">
          <img class="my-foto" src="./assets/me.png">
          <p class="about-me-1" v-text="$ml.get('aboutp1')">
          </p>
          <p class="about-me" v-text="$ml.get('aboutp2')"></p>
        </div>
      </div>
      <img class="bottom-divider" alt="decorative-element" src="./assets/bottomdivider.svg">

    </section>
    <section class="beige">
      <div class="container">
        <h2 v-text="$ml.get('h2')"></h2>
        <SimpleLinks/>
      </div>
    </section>
    <!--
    <section>
      <img class="upper-divider-2" alt="decorative-element" src="./assets/updivider2.svg">
    </section>
    -->






  </div>
</template>

<script>
import LangList from './components/LangList.vue'
import SimpleLinks from './components/SimpleLinks.vue'


export default {
  name: 'App',
  components: {
    SimpleLinks,
    LangList
  },
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

  }
}
</script>

<style lang="scss">
  body{
  background-color: #ffffff;
  margin: 0;
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #594C3F;

  h2{
    font-size: 16px;
    margin-bottom: 30px;
  }
  .first-screen{
    background-color: #E5E5E5;
    padding-top: 30px;
  }
  .about{
    background-color: #ffffff;

  }


  .main-pic{
  display: block;
  width: 242px;
  height: 243px;
  margin-left: auto;
  margin-right: auto;
  }
  .upper-divider,.bottom-divider,.upper-divider-2{
    width: 100%;
    height: auto;
    display: block;
  }
  .lead-text{
    font-size: 22px;
    line-height: 1.2;
    margin-top: 50px;
    margin-bottom: 30px;
  }

}
.container{
  padding-left: 30px;
  padding-right: 30px;
  max-width: 690px;
  margin-left: auto;
  margin-right: auto;
}
.beige{
  background-color: #E5E5E5;
  padding-top: 30px;
  padding-bottom: 30px;
}
.my-foto{
  display: inline-block;
  width: 205px;
  height: 205px;
  margin: 0 auto;
}



</style>
