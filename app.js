$(document).ready(function () {
    setBings();
});
function setBings(){
    $("nav a").click(function(e) {
       e.preventDefault();
        var sectionID =e.currentTarget.id + "Section";
        $("html,body").animate({
            scrollTop: $("#"+sectionID).offset().top
    }, 1000)
    })
}

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#scroll').fadeIn();
        }else{
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
