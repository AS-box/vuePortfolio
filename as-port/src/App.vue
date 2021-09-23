<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <Header></Header>
    <router-view></router-view>
    <v-btn fab color="amber mx-1" @click="$vuetify.goTo(0)" fixed right bottom><v-icon color="white">fa fa-long-arrow-up</v-icon></v-btn>
    <Footer></Footer>
  </v-app>
</template>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;400;500;700&display=swap');
.v-application{
    font-family: 'M PLUS Rounded 1c', sans-serif;
    background-color: #ECEFF1;
    .max_w{
      max-width: 960px;
      margin: auto;
    }
}
</style>
<script>
import Header from './components/Header';
import Footer from './components/Footer';


export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed:{
    theme(){
      return this.$vuetify.theme.light ? 'dark':'light';
    },
  }


};
</script>
