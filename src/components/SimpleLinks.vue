<template>
  <section class="links">
    <div class="links__wrap">
      <a class="" href="">Telegram</a>
      <a class="" href="">WhatsApp</a>
      <a class="" href="mailto:v.borozdina@gmail.com">Email</a>
    </div>

  </section>

</template>

<script>
export default {
  name: 'SimpleLinks',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a{
  display: block;
  padding: 15px;
  margin-bottom: 20px;
  color: black;
  border: 1px solid black;
  transition: 0.3 all;
  &:hover{
    background-color: black;
    color:white;
    border: 1pxp solid blue;
  }
}
</style>
