/**
 * Created by weibin.shao on 2016/6/18.
 * 往正文列表中新增记录
 */

(function appendArticles() {
    // D3
    // var $list = d3.selectAll("details.setting-details");
    // var summary = $list.select("summary");
    // summary.on('click', function(d, i){
    //     summary.select("span.edit")[0][i].innerHTML =  $list[0][i].open ? '编辑' : '收起';
    // });

    // jQuery
    $('summary').click(function () {
        let open = $(this).parents('.setting-details')[0].open;
        $(this).find('.edit')[0].innerHTML = open ? '编辑' : '收起';
    });
})();