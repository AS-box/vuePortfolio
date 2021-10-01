<template>
  <main>
    <v-container class="workItems_container blue-grey--text">
      <h2 class="text-decoration-underline text-center">その他</h2>
      <books></books>
      <my-learning></my-learning>
      <h3 class="text-center mt-12">動作保証環境</h3>
      <version></version>
    </v-container>
  </main>
</template>

<script>
import Books from '../../components/Books'
import MyLearning from '../../components/MyLearning'
import Version from '../../components/version'
export default {
  name:'Etc',
  components:{Books,MyLearning,Version},
  data(){
    return{
    }
  }
}
</script>