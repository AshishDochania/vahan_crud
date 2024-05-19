(document).on('click', 'button', function(){
    var athis = (this);
    TabHighlighter.set(athis);
    athis.closest('button').siblings('.active').removeClass('active');
    athis.closest('button').addClass('active');
});
var TabHighlighter = {
    set: function(bthis){
        ('.tab-highlighter').css({
            'left':  bthis.closest('button').offset().left,
            'width': bthis.closest('button').outerWidth()
        });
    },
    refresh: function(){
        var cthis = ('button.active');
        ('.tab-highlighter').css({
            'left':  cthis.closest('button').offset().left,
            'width': cthis.closest('button').outerWidth()
        });
    }
};
(window).resize(function(){
    TabHighlighter.refresh();
});
(document).ready(function(){
	TabHighlighter.refresh();
});