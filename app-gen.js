var data = {
  questions: ['今まで見つけたバグの中でいちばん危なかったものは？',
  'オススメのテスト本は？',
  'テストをはじめたきっかけは？',
  'ロールモデルはいる？',
  '「実はこの単語の意味が分からない・・・」というもの、ある？',
  '好きなテスト技法は？',
  '普段のテストへの関わり方は？',
  'もし転職するならどんなことがしたい？'
],
  title: 'Test-no-hanashi',
  qText: 'テストって、どんなところが面白い？',
};

var app = new Vue({
  el: '#app',
  data: data,
  methods: {
    showText: function() {
      //var random = Math.floor(Math.random() * data.questions.lentgh) ;
      var date = new Date();
      var sec = date.getSeconds;
      this.qText = data.questions[sec % data.questions.length];
      console.log('sec % data.questions.length:' + sec % data.questions.length);
      //console.log('random:' + random);
    }
  }
});
