/**
 * Created by weibin.shao on 2016/6/18.
 * 往正文列表中新增记录
 */

(function appendArticles() {
    var dataset = [];

    var like = new Like();
    like.likes = 128;
    like.views = 485;
    like.name = '陆永浩';
    like.date = '3 天前 15:21';
    like.title = '罗振宇、罗永浩、阿禅粉丝那么多，创业反不太成功？';

    var answer = new Answer();
    answer.likes = 528;
    answer.views = '14.8K';
    answer.name = '不贰';
    answer.date = '3 天前 15:21';
    answer.title = '视觉、交互、界面设计之间的关系是什么？';
    answer.tags = ['Alex', 'Masslow', '鹿慕小姐', '芜昂昂', '坦率的爆米花', '秋日高照', 'Quinn Norton', '+528'];

    dataset.push(like);
    dataset.push(answer);
    dataset.push(like);
    dataset.push(answer);
    dataset.push(like);
    dataset.push(answer);
    dataset.push(like);
    dataset.push(answer);
    dataset.push(like);
    dataset.push(answer);
    dataset.push(like);
    dataset.push(answer);

    dataset.forEach(function (d, i) {
        if (d instanceof Like)
            appendLike(d);
        else if (d instanceof Answer)
            appendAnswer(d);
        else ;  // do nothing;
    });

    // 更新推荐关注头像
    attentionlist();
})();

function appendLike(like) {
    var $list = d3.select(".main-discovery-list");
    // var $items = $list.selectAll('.main-discovery-article-like').data(likes);

    // var $enter = $items.enter().append('div')
    //     .attr('class', 'main-discovery-article-like');

    var $enter = $list.append('div').datum(like)
        .attr('class', 'main-discovery-article-like');

    var $enter1 = $enter.append('div').attr('class', 'article-like');

    $enter1.append('div')
        .append('span')
        .attr('class', 'bolder')
        .text(function(d){
            return d.likes;
        });

    $enter1.append('div')
        .append('span')
        .attr('class', 'bolder')
        .append('small')
        .text(function(d){
            return 'like';
        });

    var $enter2 = $enter.append('div').attr('class', 'article-views gray-font');

    $enter2.append('div')
        .append('span')
        .text(function(d){
            return d.views;
        });

    $enter2.append('div')
        .append('span')
        .append('small')
        .text(function(d){
            return 'views';
        });

    var $enter3 = $enter.append('div').attr('class', 'article-title');

    $enter3.append('div')
        .append('span')
        .attr('class', 'gray-font')
        .append('small')
        .text(function(d){
            return d.name + ' ' + d.date;
        });

    $enter3.append('div')
        .append('span')
        .attr('class', 'bolder')
        .text(function(d){
            return d.title;
        });
}

function appendAnswer(answer) {
    var $list = d3.select(".main-discovery-list");
    // var $items = $list.selectAll('.main-discovery-article-answers').data(answers);

    // var $enter = $items.enter().append('div')
    //     .attr('class', 'main-discovery-article-answers');

    var $enter = $list.append('div').datum(answer)
        .attr('class', 'main-discovery-article-answers');

    var $enter1 = $enter.append('div').attr('class', 'article-answers');

    $enter1.append('div')
        .append('span')
        .attr('class', 'bolder')
        .text(function(d){
            return d.likes;
        });

    $enter1.append('div')
        .append('span')
        .attr('class', 'bolder')
        .append('small')
        .text(function(d){
            return 'answers';
        });

    var $enter2 = $enter.append('div').attr('class', 'article-views gray-font');

    $enter2.append('div')
        .append('span')
        .text(function(d){
            return d.views;
        });

    $enter2.append('div')
        .append('span')
        .append('small')
        .text(function(d){
            return 'views';
        });

    var $enter3 = $enter.append('div').attr('class', 'article-title');

    $enter3.append('div')
        .append('span')
        .attr('class', 'gray-font')
        .append('small')
        .text(function(d){
            return d.name + ' ' + d.date;
        });

    $enter3.append('div')
        .append('span')
        .attr('class', 'bolder')
        .text(function(d){
            return d.title;
        });

    var $enter31 = $enter3.append('div')
        .append('span')
        .attr('class', 'gray-font');

    $items = $enter31.selectAll('small')
        .data(function (d) {
            return d.tags;
        });

    $items.enter()
        .append('small')
        .text(function (d) {
            return d;
        });
}

function attentionlist(){
    var dataset = ['personal-img-mini.jpg', 'personal-img-mini-2.jpg', 'personal-img-mini-3.jpg'];

    var list = d3.select(".attention-list").selectAll('.attention-info >div:first-child');
    list.data(dataset)
        .style('background', function (d) {
            return 'url(img/' + d + ')';
        });
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