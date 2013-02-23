var Rebel = {
    init: function(){
        Rebel.set_title();
    },
    set_title: function(){
        $('div.header').append('<p class="title"></p>');
        $('p.title').text($('title').text());
    }
};

Zepto(function(){
    Rebel.init();
});
