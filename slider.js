$(document).ready(function(){
    var $slider = $('#slider')
    var $slides = $slider.find('.slides')
    var $slide = $slides.find('.slide')

    var totalSlide = $slide.length
    var slideSize = $slide.width()
    var speed = 1000
    var delay = 2000
    var currSlide = 0

    $slides.css({
        width: totalSlide * slideSize + 'px'
    })

    setInterval(function(){
        if(currSlide == totalSlide){
            currSlide = 0
        }
        $slides.animate({
            'margin-left': -(slideSize * currSlide)
        }, speed)
        currSlide++
    }, delay)
})