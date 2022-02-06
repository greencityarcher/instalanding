<template>
  <ul class="langList">
    <li class="langList__item" v-for="lang in $ml.list" v-bind:key="lang">
      <button @click="changeLanguage(lang)" v-text="lang">Info</button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'LangList',
  props: {

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
  methods:{
    changeLanguage(lang){
      this.$ml.change(lang);
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.langList {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.langList__item {
  display: inline-block;
  margin: 0 10px;
}
button{
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
}
</style>
