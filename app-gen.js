var data = {
  questions: ['テストって、どんなところが面白い？',
  '今まで見つけたバグの中でいちばん危なかったものは？',
  'オススメのテスト本は？',
  'テストをはじめたきっかけは？',
  'ロールモデルはいる？',
  '「実はこの単語の意味が分からない・・・」というもの、ある？',
  '好きなテスト技法は？',
  '普段のテストへの関わり方は？',
  'もし転職するならどんなことがしたい？',
  'テストに関する武勇伝を教えて！',
  'テストに関する失敗談ってありますか？',
  'コミュニケーションを取るときに気をつけていることは？',
  '他人にはあまり言わない、小さなこだわりはある？',
  '「テストってどこまでやれば終了ですか？」と言われたら',
  '一緒にはたらくなら、どんな人がいい？',
  '日常でつい出てしまう"職業病"はある？',
  'ソフトウェアテストとかけまして、◯◯ととく。そのこころは？',
  '普段使っているツール・サービスで「これがオススメ」というものを教えて！',
  '網羅的にテスト観点を出すためにやっている工夫は？',
  'テストについての勉強ってどのようにやってる？',
  '"良いテスト"ってなんでしょう？',
],
  title: 'Test-no-hanashi',
  qText: 'テストって、どんなところが面白い？',
};

var app = new Vue({
  el: '#app',
  data: data,
  methods: {
    showText: function() {
      var random = Math.floor(Math.random() * 20) ;
      this.qText = data.questions[random];
    }
  }
});
