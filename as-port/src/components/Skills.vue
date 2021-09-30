<template>
  <v-container class="skills_container blue-grey--text">
    <h2 class="text-decoration-underline text-center">スキルセット</h2>
    <p class="skills_text mt-4">HTML、CSSが一番得意。好きな言語はjavascript。</p>
    <h3 class="text-center mt-4">言語</h3>
    <v-data-table dense disable-sort :headers="skillHeaders" :items="skills" item-key="name" :mobile-breakpoint="0" class="elevation-1 blue-grey--text mt-4" hide-default-footer></v-data-table>
    <h3 class="text-center mt-4">ツール</h3>
    <v-data-table dense disable-sort :headers="toolHeaders" :items="tools" item-key="name" :mobile-breakpoint="0" class="elevation-1 blue-grey--text mt-4" hide-default-footer></v-data-table>
    <h3 class="text-center mt-4">フレームワーク</h3>
    <v-data-table dense disable-sort :headers="fwHeaders" :items="framework" item-key="name" :mobile-breakpoint="0" class="elevation-1 blue-grey--text mt-4" hide-default-footer></v-data-table>
  </v-container>
</template>
<style lang="scss" scoped>
.skills_container{
  .skills_text{
    max-width: 600px;
    margin: auto;
  }
}
</style>
<script>
export default {
  name:'Skills',
  components: {  },
  data(){
    return{
      skillHeaders:[
        {
          text:'言語',
          align:'center',
          value: 'skill'
        },
        {
          text:'実務経験',
          align:'center',
          value: 'terms'
        },
        {
          text:'★5つで指導できるレベル',
          align:'center',
          value: 'stars'
        }
      ],
      toolHeaders:[
        {
          text:'ツール',
          align:'center',
          value: 'skill'
        },
        {
          text:'実務経験',
          align:'center',
          value: 'terms'
        },
        {
          text:'★5つで指導できるレベル',
          align:'center',
          value: 'stars'
        }
      ],
      fwHeaders:[
        {
          text:'フレームワーク',
          align:'center',
          value: 'skill'
        },
        {
          text:'実務経験',
          align:'center',
          value: 'terms'
        },
        {
          text:'★5つで指導できるレベル',
          align:'center',
          value: 'stars'
        }
      ],
      skills:[
        {
          skill:'HTML+',
          terms:'9年',
          stars:'★★★★★'
        },
        {
          skill:'CSS',
          terms:'9年',
          stars:'★★★★★'
        },
        {
          skill:'SCSS',
          terms:'5年',
          stars:'★★★★★'
        },
        {
          skill:'Javascript',
          terms:'8年',
          stars:'★★★★★'
        },
        {
          skill:'jQuery',
          terms:'3年',
          stars:'★★★★☆'
        },
      ],
      tools:[
        {
          skill:'photoshop',
          terms:'9年',
          stars:'★★★★☆'
        },
        {
          skill:'Illustrator',
          terms:'2年',
          stars:'★★★☆☆'
        },
        {
          skill:'Dreamweaver',
          terms:'3年',
          stars:'★★★★☆'
        },
        {
          skill:'Git',
          terms:'4年',
          stars:'★★★★☆'
        },
        {
          skill:'Gulp',
          terms:'3年',
          stars:'★★★☆☆'
        },
        {
          skill:'Webpack',
          terms:'2年',
          stars:'★☆☆☆☆'
        },

      ],
framework:[
        {
          skill:'knockout.js',
          terms:'2年',
          stars:'★★★★☆'
        },
        {
          skill:'Vue.js(実務経験なし)',
          terms:'1年',
          stars:'★☆☆☆☆'
        }

      ]

    }
  },
}
</script>