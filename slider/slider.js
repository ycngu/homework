var allButtons = $('#buttons > button')

for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (x) {
        var index = $(x.currentTarget).index()
        var distance = index * -800
        $('.images').css({
            transform: 'translateX(' + distance + 'px)'
        })

        n = index
        allButtons.eq(n)
        .addClass('blue')
        .siblings('.blue')
        .removeClass('blue')
    })
}

var n = 0
var len = allButtons.length

allButtons.eq(n%len).trigger('click')
    .addClass('blue')
    .siblings('.blue')
    .removeClass('blue')

var timerId = setInterval(()=>{
    n += 1
    allButtons.eq(n%len).trigger('click')
    .addClass('blue')
    .siblings('.blue')
    .removeClass('blue')
},3000)

$('.window').on('mouseenter',function(){
    window.clearInterval(timerId)
})

$('.window').on('mouseleave',function(){
    timerId = setInterval(()=>{
        n += 1
        allButtons.eq(n%len).trigger('click')
        .addClass('blue')
        .siblings('.blue')
        .removeClass('blue')
    },3000)
})