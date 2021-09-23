<template>
  <v-container fluid fill-height class="KV_container">
    <v-row>
      <v-col class="KV_text">
        <p class="white--text">これで分かる！<br>フロントエンドエンジニア 田中亜衣の全て</p>
      </v-col>
    </v-row>
  </v-container>
</template>
<style lang="scss" scoped>
.KV_container{
  padding-top: 48px;
  background: url("../assets/fv.jpg");
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 50vh;
  .KV_text{
    text-align: center;
    p{
      text-shadow:0 0 16px #424242;
      font-weight: 500;
    }
  }
}
</style>
<script>
export default {
  name:'KV',
  data(){
    return{
      drawer:false
    }
  },
}
</script>