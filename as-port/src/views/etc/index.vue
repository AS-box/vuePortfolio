<template>
  <v-container class="workItems_container blue-grey--text">
    <h2 class="text-decoration-underline text-center">その他</h2>
    <Books></Books>
    <MyLerning></MyLerning>
  </v-container>
</template>

<script>
import Books from '../../components/Books'
import MyLerning from '../../components/MyLerning'
export default {
  name:'Etc',
  components:{Books,MyLerning},
  data(){
    return{
    }
  }
}
</script>