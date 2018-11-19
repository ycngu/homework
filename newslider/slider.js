init()

setInterval(() => {
    $(`.images>img:eq(${filterN(n)})`).removeClass('current enter').addClass('leave')
    $(`.images>img:eq(${filterN(n + 1)})`).removeClass('enter leave').addClass('current')
    $(`.images>img:eq(${filterN(n + 2)})`).removeClass('leave current').addClass('enter')
    n += 1
}, 2000)


function filterN(n) {
    return n % 3
}

function init() {
    $('.images>img:eq(2)').addClass('enter')
    $('.images>img:eq(1)').addClass('enter')
    $('.images>img:eq(0)').addClass('current')
}
