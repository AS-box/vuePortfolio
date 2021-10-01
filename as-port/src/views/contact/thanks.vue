<template>
  <main>
    <v-container class="thanks_container blue-grey--text mt-4">
      <p>お問い合わせありがとうございました。<br>折り返しのメールをお送りするまでしばらくお待ちください。</p>
      <div class="text-center mt-4">
        <a href="/" class="text-decoration-none"><v-btn color="amber accent-4"><span class="white--text">TOPに戻る</span></v-btn></a>
      </div>
    </v-container>  
  </main>
</template>
<style lang="scss" scoped>
.thanks_container{
  p{
    text-align: center;
  }
}
</style>

<script>
export default {
  name:'Thanks',
  data(){
    return{
    }
  }
}
</script>