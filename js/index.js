
function openMenu(){
    $('.wrapper').addClass('wrapper-open');
    $('.content').addClass('content-open');
    $('.container-fluid').css({
        'overflow': 'hidden'
    });
    $('body').data({
        'isOpen': true
    });
}

function closeMenu(){
    $('.wrapper').removeClass('wrapper-open');
    $('.content').removeClass('content-open');
    $('.container-fluid').css({
        'overflow': 'auto',
        'overflow-x': 'hidden'
    });
    $('body').data({
        'isOpen': false
    });
}

function toggleMenu(){
    var isOpen=$('body').data('isOpen');

    if(isOpen){
        closeMenu();
    }else{
        openMenu();
    }
}

//openMenu();

var userAgent=window.navigator.userAgent;

if(userAgent.indexOf('Mobile')<0){
    window.location.href="404.html";
}