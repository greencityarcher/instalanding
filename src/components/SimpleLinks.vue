<template>
  <section class="links">
    <div class="links__wrap">
      <a class="links__item" href="https://t.me/enamorada_del_mar">Telegram</a>
      <a class="links__item" href="https://api.whatsapp.com/send?phone=79851213423&text=">WhatsApp</a>
      <a class="links__item" href="mailto:v.borozdina@gmail.com">Email</a>
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
  transition: 0.3s all;
  text-decoration: none;
  &:hover, &:active{
    background-color: black;
    color:white;
    border: 1px solid black;
  }
  &:focus-visible{
  border-radius: 0;
  }
}
.links-wrap{
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
