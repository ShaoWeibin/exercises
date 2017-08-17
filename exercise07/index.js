/**
 * Created by weibin.shao on 2016/6/18.
 * 往正文列表中新增记录
 */

(function appendArticles() {
    d3.select("body").selectAll("p")
    .data([4, 8, 15, 16, 23, 42], function(d) { return d; })
    .enter().append("p")
    .text(function(d) { return d; });


    var p = d3.select("body").selectAll("p")
    .filter(d => {
        // return d % 2 == 0;
        return true;
    })
    .data([1, 2, 4, 8, 16, 32], function(d) { return d; });

    p.enter().append("p")
    .text(function(d) { return d; });

    //p.order();

    p.exit().remove();

    p = d3.select("body").selectAll("p")
    .data([1, 2, 4, 8, 16, 32], function(d) { return d; });

    p.enter().append("p")
    .text(function(d) { return d*2; });

    // p.text(function(d) { return d*3; });
})();

