~!$(function(){
    var aBtn = $(".box .nav-time li");
    var oLine = $(".box .line");
    var oBox = $(".nav_mid");
    var aLeft_nav=$('.con-nav ul li');
    var aRight_box=$('.con-rightBox');

    var iNow = 0;
    aBtn.click(function(){
        iNow = $(this).index();
        tab();
    })
    function tab(){
        aBtn.removeClass('active');
        aBtn.eq(iNow).addClass('active');
        oLine.animate({
            '-webkit-transform':'translateX('+aBtn.eq(iNow).index()*100+'%)'
        },{duration:300});
        oBox.animate({
            '-webkit-transform':'translateX(-'+aBtn.eq(iNow).index()*33.33+'%)'
        },function(){
       
        })
    }
    aLeft_nav.click(function(){
        console.log($(this).index());
        var indexForSection = $('section.content-box').index($(this).parents('section.content-box'));
        var curSection = $('section.content-box').eq(indexForSection);
        var curSection_left_nav = $(curSection).find('.con-nav ul li');
        var curSection_right_box = $(curSection).find('.con-rightBox');
        curSection_left_nav.removeClass('on').eq($(this).index()).addClass('on');
        curSection_right_box.removeClass('on1').eq($(this).index()).addClass('on1');
    })
})