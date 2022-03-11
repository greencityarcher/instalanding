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
    <section>
      <div class="container">
        <h2 v-text="$ml.get('h2about')"></h2>
        <h3 v-text="$ml.get('h3about')"></h3>
        <p class="description" v-text="$ml.get('paboutbuttons')"></p>
        <p class="description" v-text="$ml.get('buttonssamples')"></p>
        <div class="decorative-links">
          <button class="decorative-link decorative-link--top" v-text="$ml.get('btn1')"></button>
          <button class="decorative-link" v-text="$ml.get('btn2')"></button>
          <button class="decorative-link" v-text="$ml.get('btn3')"></button>
          <button class="decorative-link decorative-link--bottom" v-text="$ml.get('btn4')"></button>
        </div>

        <h3 v-text="$ml.get('h3content')"></h3>
        <p class="description" v-text="$ml.get('paboutcontent')"></p>
        <ul class=simple-list>
          <li class="simple-list-item" v-text="$ml.get('liprice')"></li>
          <li class="simple-list-item" v-text="$ml.get('lihours')"></li>
          <li class="simple-list-item" v-text="$ml.get('lifoto')"></li>
          <li class="simple-list-item" v-text="$ml.get('livideo')"></li>
          <li class="simple-list-item" v-text="$ml.get('lilongread')"></li>
          <li class="simple-list-item" v-text="$ml.get('licalc')"></li>
          <li class="simple-list-item" v-text="$ml.get('limap')"></li>
        </ul>
      </div>
    </section>
    <section>
      <img class="figure-bottom" alt="decorative-element" src="./assets/figurebottom.svg">
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
    font-size: 18px;
    margin-bottom: 30px;
  }
  h3{
    font-size: 16px;
    margin-bottom: 20px;
    text-align: left;
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
.decorative-links{
  margin-bottom: 50px;
}
.decorative-link{
  display: block;
  width: 100%;
  padding: 15px;
  font-size: 14px;
  margin-bottom: 20px;
  background-color: #A3B5B5;
  color: #ffffff;
  transition: 0.3s all;
  text-decoration: none;
  cursor: pointer;
  outline-color: #A3B5B5;
  border: none;
  border-radius: 26px;
  &:hover, &:active{
    box-shadow: 4px 4px 8px 0 rgba(163, 181, 181, 0.5);
  }

  &--top{
    border-radius: 0 26px 26px 26px;
  }
  &--bottom{
    border-radius: 26px 26px 0 26px;
  }
}
.simple-list{
  text-align: left;
  padding: 10px;
  margin-top: 0px;
}
.description{
  text-align: left;
}




</style>
