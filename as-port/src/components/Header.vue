<template>
  <v-app-bar color="blue lighten-2 white--text" app flat dense class="pa-0">
    <v-toolbar-title>
      <h1 class="text-h6"><a href="/" class="white--text text-decoration-none">AS&nbsp;<v-icon color="white">fa fa-plane</v-icon>&nbsp;PORT</a></h1>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-app-bar-nav-icon color="white" @click="changeDrawer"></v-app-bar-nav-icon>
  </v-app-bar>
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
  name:'Header',
  data(){
    return{
      drawer:false
    }
  },
  methods:{
    changeDrawer(){
      if(this.drawer){
        this.drawer = false
        this.$emit('CatchDrawer',this.drawer)
      }else{
        this.drawer = true
        this.$emit('CatchDrawer',this.drawer)
      }
    }
  }
}
</script>