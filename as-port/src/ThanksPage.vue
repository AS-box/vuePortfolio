<template>
  <v-app :style="{background: $vuetify.theme.themes[theme].background}">
    <Header></Header>
    <Thanks></Thanks>
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
    .toTop-btn{
      opacity: 0;
      &.show{
        opacity: 1;
        transition: opacity .5s;
      }
    }
}
</style>
<script>
import Header from './components/Header';
import Footer from './components/Footer';
import Thanks from './views/contact/thanks'



export default {
  name: 'ThanksPage',
  components: {
    Header,
    Footer, 
    Thanks
  },
  computed:{
    theme(){
      return this.$vuetify.theme.light ? 'dark':'light';
    },
  },
  data(){
    return {
      isShow:false
    }
  },
  methods:{
    onScroll(e){
      if(typeof window === 'undefined'){
        return
      }else{
        const top = window.pageYOffset || e.target.onScrollop || 0;
        this.isShow = top > 20;
      }
      
    }
  }
  


};
</script>
