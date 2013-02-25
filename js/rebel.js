var Rebel = {
    init: function(){
        Rebel.set_title();
        Rebel.set_credit();
        Rebel.adjust_content_width(window);
        $(window).on('resize', function(e){Rebel.adjust_content_width(window)});
    },
    set_title: function(){
        $('header').append('<h1 class="title" />');
        $('h1.title').text($('title').text());
    },
    set_credit: function(){
        var str = $('meta[name=copyright]').attr('content') ? '&copy;' + $('meta[name=copyright]').attr('content') :
                  $('meta[name=author]').attr('content') ? 'Author:' + $('meta[name=author]').attr('content') :
        null ;
        if ( str ) {
            $('footer').append($('<address />'));
            $('address').append(str);
        }
    },
    adjust_content_width: function(b){
        var items = $('div.main > div');
        var w = $(b).width();
        items.each(function(i,e){
            $(e).width((w / items.size()) - 30);
        });
    },
};

Zepto(function(){
    Rebel.init();
});
