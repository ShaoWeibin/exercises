/**
 * Created by weibin.shao on 2016/6/18.
 * 往正文列表中新增记录
 */

(function appendArticles() {
    alert('hello');

    var likes = [];
    var answers = [];

    var like = new Like();
    like.likes = 128;
    like.views = 485;
    like.name = '陆永浩';
    like.date = '3 天前 15:21';
    like.title = '罗振宇、罗永浩、阿禅粉丝那么多，创业反不太成功？';

    likes.push(like);
    likes.push(like);
    likes.push(like);
    likes.push(like);
    likes.push(like);

    appendLike(likes);
})();

function appendLike(likes) {
    var list = d3.select(".main-discovery-list");
    var like = list.selectAll('.main-discovery-article-like');
    // likes.forEach(function(item, index, array){
    //     list.append('.main-discovery-article-like');
    // });

    for(var item in likes){
        //list.append('.main-discovery-article-like');
    }

    // like.data(likes)
    //     .enter()
    //     .append('.main-discovery-article-like');
    //
    // list.data(likes)
    //     .enter()
    //     .append('h1')
    //     .text(function (d) {
    //         return "test" + d.name;
    //     });
}

function appendAnswer(answers) {
    
}

function Like() {
    this.likes = 0;
    this.views = 0;
    this.name = '';
    this.date = '';
    this.title = '';
}

function Answer() {
    Like.call(this);
    this.answers = 0;
    this.tags = {};
}