<template>
  <v-container class="profile_container blue-grey--text">
    <h2 class="text-decoration-underline text-center">自己紹介</h2>
    <v-row class="profile_face mt-4">
      <v-col align="center" align-content="center" justify="center">
        <v-img class="profile_face_img" src='../assets/face.jpg'></v-img>
      </v-col>
    </v-row>
    <div class="profile_text mt-4">
      <h3 class="text-center">田中 亜衣(旧姓:杉田)</h3>
      <div class="profile_text_detail">
        <p class="mt-4">新卒で卒業して以来、web制作のマークアップを中心にフロントエンジニアとしてjavascriptを習得。現在はvue.jsの勉強中。
        <p>20名程の新入社員の前で仕事内容についてプレゼンし、職種の違う方にエンジニア用語を質問された時も、図解を用いながら説明するなど、他者の立場に寄り添った対応が得意。</p>
        <p>趣味は、ものづくり、ゲーム、イラスト制作</p>
      </div>
    </div>
    <h3 class="text-center mt-8">学歴・職歴</h3>
    <v-timeline fill-dot class="mt-4">
      <v-timeline-item small right v-for="event in history" :key="event.date">
        <template v-slot:opposite>
          <h4>{{event.date}}</h4>
        </template>
        {{event.content}}
        <p class="text-caption" v-if="event.sub">{{event.sub}}</p>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>
<style lang="scss" scoped>
.profile_face{
  .profile_face_img{
    max-width: 200px;
    border-radius: 50%;
  }
}
.profile_text{
  max-width: 600px;
  margin: auto;
}


</style>
<script>
import history from '../data/history.json'

export default {
  name:'Profile',
  components: { 
    },
  data(){
    return{
      history:history
    }
  },
}
</script>