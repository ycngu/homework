var allButtons = $('.buttons>button')

for (let i = 0; i < allButtons.length; i++) {
    allButtons.eq(i).on('click',function(x){
        distance = i * -800
        $('.images').css({
            transform:'translateX('+ distance + 'px)'
        })
        
        n = i
        allButtons.eq(n).addClass('blue')
        .siblings('.blue').removeClass('blue')
    })
}

var n = 0
var len = allButtons.length

allButtons.eq(n % len).addClass('blue')

var timerID = setInterval(function() {
    n += 1
    allButtons.eq(n % len).trigger('click')
        .addClass('blue')
        .siblings('.blue').removeClass('blue')
},2000)

$('.window').on('mouseenter',function() {
    window.clearInterval(timerID)
})

$('.window').on('mouseleave',function() {
    timerID = setInterval(function() {
        n += 1
        allButtons.eq(n % len).trigger('click')
            .addClass('blue')
            .siblings('.blue').removeClass('blue')
    },2000)
})

