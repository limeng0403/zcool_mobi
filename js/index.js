function openMenu() {
    var scrollTop=$('.container-fluid').scrollTop();

    $('.menu').show();
    $('.content').addClass('content-open');

    $('.container-fluid').css({
        'overflow': 'hidden'
    });

    $('body').data({
        'isOpen': true,
        'scrollTop': scrollTop
    });

    $('.content').scrollTop(scrollTop);
}

function closeMenu() {
    var data=$('body').data();

    $('.content').removeClass('content-open');
    $('.container-fluid').css({
        'overflow': 'auto',
        'overflow-x': 'hidden'
    });

    $('body').data({
        'isOpen': false
    });

    $('.container-fluid').scrollTop(data.scrollTop);
}

function toggleMenu() {
    var isOpen = $('body').data('isOpen');

    if (isOpen) {
        closeMenu();
    } else {
        openMenu();
    }
}

//openMenu();

var userAgent = window.navigator.userAgent;

if (userAgent.indexOf('Mobile') < 0) {
    window.location.href = "404.html";
}

$('body').on({
    'swiperight': function () {
        openMenu();
    },
    'swipeleft': function () {
        closeMenu();
    }
});

$('.container-fluid').css({
    'min-height': document.getElementsByTagName('body')[0].scrollHeight+'px'
})