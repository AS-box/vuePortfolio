module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  pages: {
    index: {
      entry: 'src/pages/main.js', // エントリーポイントとなるjs
      template: 'public/index.html', // テンプレートのHTML
      filename: 'index.html', // build時に出力されるファイル名
    },
    thanks: {
      entry: 'src/pages/thanks/main.js',
      template: 'public/thanks.html',
      filename: 'thanks.html',
      title: 'お問い合わせありがとうございました。',
      },
  }
}
