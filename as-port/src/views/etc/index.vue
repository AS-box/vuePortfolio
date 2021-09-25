<template>
  <v-container class="workItems_container blue-grey--text">
    <h2 class="text-decoration-underline text-center">その他</h2>
    <Books></Books>
  </v-container>
</template>

<script>
import Books from '../../components/Books'
export default {
  name:'Etc',
  components:{Books},
  data(){
    return{
    }
  },
}
</script>