<template>
  <section class="books">
    <h3 class="text-center mt-12">Udemy、Progateとか</h3>
    <v-row class="mt-4">
      <v-col cols="12" lg="4" md="4" sm="4" xs="12" v-for="(item,index) in items" :key="index">
        <v-card class="blue-grey--text" outlined tile style="height:100%;">
          <v-card-title>{{item.name}}</v-card-title>
          <v-card-subtitle v-if="item.auther">{{item.auther}}</v-card-subtitle>
          <v-card-text>
            <v-chip :href=item.url target=_blank outlined small color="amber accent-4">{{item.site}}でコースを見る</v-chip>
          </v-card-text>          
          <v-divider class="mx-4"></v-divider>
          <v-card-text>{{item.discription}}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script>
import learning from '../data/learning.json';
export default {

  name:'movie',
  data(){
    return{
      items:learning
    }
  },
}
</script>