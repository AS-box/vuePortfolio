<template>
  <v-col cols="12" lg="6" md="6" sm="6" xs="12" >
    <v-card class="blue-grey--text" outlined tile style="height:100%;">
      <v-card-title>
        {{item.title}}
      </v-card-title>
      <v-card-subtitle>{{item.date}}</v-card-subtitle>
      <v-card-text>
        <p v-if="item.phase">{{item.phase}}</p>
        <v-chip outlined small color="amber accent-4 mr-2 mb-2" v-for="(tool,index) in item.tools" :key="index">{{tool}}</v-chip>
      </v-card-text>
      <v-card-text class="pt-0">
        <v-btn fab x-small v-if="item.url" elevation="2" :href=item.url color="amber accent-4"><v-icon color="white">fa {{item.icon}}</v-icon></v-btn>
      </v-card-text>
      <v-divider class="mx-4"></v-divider>
      <v-card-text>{{item.discription}}</v-card-text>
    </v-card>
  </v-col>
  
</template>
<style lang="scss" scoped>

</style>

<script>
export default {
  name:'WorkItem',
  props:['item'],
    data(){
    return{
    }
  },
}
</script>