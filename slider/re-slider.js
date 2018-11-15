var allButtons = $('.buttons>button')

for (let i = 0; i < allButtons.length; i++) {
    allButtons.eq(i).on('click', function (x) {
        distance = i * -800
        $('.images').css({
            transform: 'translateX(' + distance + 'px)'
        })

        n = i
        activeButton(n)
    })
}

var n = 0
var len = allButtons.length

allButtons.eq(n % len).addClass('blue')

function activeButton(index) {
    allButtons.eq(index)
        .addClass('blue')
        .siblings('.blue').removeClass('blue')
}

function playSlider(index){
    allButtons.eq(index).trigger('click')
}

function setTimer() {
    return setInterval(() => {
        n += 1
        playSlider(n % len)
    }, 2000)
}

var timerID = setTimer()

$('.window').on('mouseenter', function () {
    window.clearInterval(timerID)
    console.log('in')
})

$('.window').on('mouseleave', function () {
    timerID = setTimer()
})