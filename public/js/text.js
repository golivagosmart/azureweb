
$( document ).ready(function() {
    $(function () {
        $('[data-typer-targets]').typer();
    });
    $('.scrollto, .gototop').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500,'easeInOutExpo');
        event.preventDefault();
    });

});
/*
<script>
$(function () {
    $('[data-typer-targets]').typer();
    });
</script>



    <script>


$(function() {
    $('.scrollto, .gototop').bind('click',function(event){
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500,'easeInOutExpo');
        event.preventDefault();
    });
});


</script>*/