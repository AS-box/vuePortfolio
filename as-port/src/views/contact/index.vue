<template>
  <main>
    <v-container class="contact_container blue-grey--text">
      <h2 class="text-decoration-underline text-center">お問い合わせ</h2>
      <Form></Form>
    </v-container>
  </main>
</template>

<style lang="scss" scoped>
.contact_container{
  max-width: 600px;
}
</style>

<script>
import Form from '../../components/Form'
export default {
  name:'Contact',
  components:{Form},
  data(){
    return{
    }
  }
}
</script>