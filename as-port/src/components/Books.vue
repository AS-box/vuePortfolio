<template>
  <section class="books">
    <h3 class="text-center mt-12">読んだ本の個人的な感想</h3>
    <v-row class="mt-4">
      <v-col cols="12" lg="4" md="4" sm="4" xs="12" v-for="(item,index) in items" :key="index">
        <v-card class="blue-grey--text" outlined tile style="height:100%;">
          <v-card-title>{{item.name}}</v-card-title>
          <v-card-text>
            <v-btn target="_blank" :disabled="!item.amazon" color="amber accent-4" x-small :href=item.url><v-icon x-small class="mr-1">fa fa-amazon</v-icon>Amazon</v-btn>
          </v-card-text>
          <v-divider class="mx-4"></v-divider>
          <v-card-text>{{item.discription}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import titles from '../data/books.json';
export default {

  name:'Books',
  data(){
    return{
      items:titles
    }
  },
}
</script>