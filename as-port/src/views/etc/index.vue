<template>
  <v-container class="workItems_container blue-grey--text">
    <h2 class="text-decoration-underline text-center">その他</h2>
    <books></books>
    <my-lerning></my-lerning>
    <h3 class="text-center mt-12">動作保証環境</h3>
    <version></version>
  </v-container>
</template>

<script>
import Books from '../../components/Books'
import MyLerning from '../../components/MyLerning'
import Version from '../../components/version'
export default {
  name:'Etc',
  components:{Books,MyLerning,Version},
  data(){
    return{
    }
  }
}
</script>