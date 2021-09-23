<template>
  <header>
    <v-app-bar color="blue lighten-2 white--text" app flat dense class="pa-0">
      <v-toolbar-title>
        <h1 class="text-h6"><a href="/" class="white--text text-decoration-none">AS&nbsp;<v-icon color="white">fa fa-plane</v-icon>&nbsp;PORT</a></h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon color="white" @click="drawer = true"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary right>
      <v-list rounded>
        <v-list-item-group color="blue lighten-2">
         <v-list-item to="/">
            <v-list-item-title><v-icon class="mr-4">fa fa-user-circle-o</v-icon>自己紹介</v-list-item-title>
          </v-list-item>
          <v-list-item to="/skill">
            <v-list-item-title><v-icon class="mr-4">fa fa-check-square-o</v-icon>スキルセット</v-list-item-title>
          </v-list-item>
          <v-list-item to="/works">
            <v-list-item-title><v-icon class="mr-4">fa fa-pencil-square-o</v-icon>実績</v-list-item-title>
          </v-list-item>
          <v-list-item to="/goal">
            <v-list-item-title><v-icon class="mr-4">fa fa-line-chart</v-icon>目標</v-list-item-title>
          </v-list-item>
          <v-list-item to="/etc">
            <v-list-item-title><v-icon class="mr-4">fa fa-github</v-icon>その他</v-list-item-title>
          </v-list-item>
          <v-list-item to="/contact">
            <v-list-item-title><v-icon class="mr-4">fa fa-envelope</v-icon>問い合わせ</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </header>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Comfortaa:wght@600&display=swap');
header{
  height: 48px;
  a{
    font-family: 'Comfortaa', cursive;
  }
}
</style>
<script>
export default {
  name:'Header',
  data(){
    return{
      drawer:false
    }
  },
}
</script>