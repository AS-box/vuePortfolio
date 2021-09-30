<template>
  <v-simple-table class="mt-4 version_table">
    <template>
      <thead>
        <tr>
          <th class="text-left">デバイス</th>
          <th class="text-left">バージョン</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.name">
          <td class="version_table_td text-left">{{ item.device }}</td>
          <td class="version_table_td text-left">{{ item.version }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>
<style lang="scss" scoped>
.version_table{
  .version_table_td{
    color: rgb(0 0 0 / 60%);
  }
}
</style>
<script>
import items from '../data/version.json'
export default {
  name:'Version',
  data(){
    return{
      items:items
    }
  },
}
</script>