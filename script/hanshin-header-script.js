$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#topBtn').fadeIn();
        }
        else { $('#topBtn').fadeOut(); }
    });
    $("#topBtn").click(function () {
        $('html,body').animate({ scrollTop: 0 }, 300);
        return false;
    });
});
$(document).ready(function () {
    let url = 'http://spartacodingclub.shop/sparta_api/weather/seoul'
    fetch(url).then(res => res.json()).then(data => {
        let nalssi = data['clouds']
        let ondo = data['temp']

        if (ondo > 30) {
            $('#weather').append('<span class="text-danger">더워 죽어요;<span>')
        } else if (ondo < 20) {
            $('#weather').append('<span class="text-info">쫌 쌀쌀한듯?</span>')
        } else if (ondo < 15) {
            $('#weather').append('<span class="text-info">추워 죽어요;</span>')
        } else {
            $('#weather').append('<span class="text-success">구름<span id="clouds"></span>에 온도 적당♬</span>')
            $('#clouds').append(nalssi)
        }
    })
})