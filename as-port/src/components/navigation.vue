<template>
  <v-navigation-drawer v-model="drawer" fixed temporary right>
    <v-list rounded>
      <v-list-item-group color="blue lighten-2">
        <v-list-item to="/">
          <v-list-item-title><v-icon class="mr-4">fa fa-user-circle-o</v-icon><span>自己紹介</span></v-list-item-title>
        </v-list-item>
        <v-list-item to="/skill">
          <v-list-item-title><v-icon class="mr-4">fa fa-check-square-o</v-icon><span>スキルセット</span></v-list-item-title>
        </v-list-item>
        <v-list-item to="/works">
          <v-list-item-title><v-icon class="mr-4">fa fa-pencil-square-o</v-icon><span>実績</span></v-list-item-title>
        </v-list-item>
        <!-- <v-list-item to="/goal">
          <v-list-item-title><v-icon class="mr-4">fa fa-line-chart</v-icon>目標</v-list-item-title>
        </v-list-item> -->
        <v-list-item to="/etc">
          <v-list-item-title><v-icon class="mr-4">fa fa-github</v-icon><span>その他</span></v-list-item-title>
        </v-list-item>
        <v-list-item to="/contact">
          <v-list-item-title><v-icon class="mr-4">fa fa-envelope</v-icon><span>問い合わせ</span></v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&display=swap');
header{
  height: 48px;
  h1 a{
    font-family: 'Comfortaa', cursive;
  }
  .v-list-item__title{
    span{
      color: #0000008a;
    }
  }
}
</style>
<script>
export default {
  name:'Navigation',
  props:['drawer'],
  data(){
    return{
    }
  },
}
</script>