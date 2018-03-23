var data = {
  questions: ['今まで見つけたバグの中でいちばん危なかったものは？', 'オススメのテスト本は？'],
  title: 'Test-no-hanashi',
  qText: 'テストって、どんなところが面白い？',
};

var app = new Vue({
  el: '#app',
  data: data,
  methods: {
    showText: function() {
      this.qText = this.questions[1];
    }
  }
});
