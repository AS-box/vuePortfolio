<template>
  <v-container class="workItems_container blue-grey--text">
    <h2 class="text-decoration-underline text-center">実績</h2>
    <p class="mt-4 workItems_text">大学卒業後、大学で学んだデザイン力とHTML、CSSの知識を生かして入社3ヶ月でデザイナー、コーダーとして自社製品のフロント側を制作。
      <br>2年目からはお客様先に常駐してフロントエンド開発を行い、javascriptの知識も習得。
      <br>その後一貫してHTML、CSS、javascriptの3つの知識を柱に様々なプロジェクトに関わってきた人生。
    </p>
    <v-expansion-panels class="mt-4">
      <v-expansion-panel>
        <v-expansion-panel-header><h3 class="blue-grey--text">実務</h3></v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <work-item v-for="(item,index) in items" :key="index" v-bind:item="item"></work-item>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels class="mt-4">
      <v-expansion-panel>
        <v-expansion-panel-header><h3 class="blue-grey--text">自主制作</h3></v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row>
            <work-item v-for="(item,index) in originalItem" :key="index" v-bind:item="item"></work-item>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>
<style lang="scss" scoped>
.workItems_container{
  .workItems_text{
    max-width: 600px;
    margin: auto;
  }
}
</style>

<script>
import items from '../data/works.json'
import originalItem from '../data/original.json'
import WorkItem from './WorkItem'
export default {
  name:'WorkItems',
  components: { WorkItem },
    data(){
    return{
      items:items,
      originalItem:originalItem
    }
  },
}
</script>