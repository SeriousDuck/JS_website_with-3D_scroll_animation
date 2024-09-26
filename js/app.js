// 3D Scroll

// distance z axis
let zSpacing = -1000,
	lastPos = zSpacing / 5,
	$frames = document.getElementsByClassName('frame'),
	frames = Array.from($frames),
	zVals = []

window.onscroll = function() {
    // растояние сверху до текущей позиции
    let top = document.documentElement.scrollTop,
    // delta определяет последнюю позицию за пределами функции
        delta = lastPos - top

    lastPos = top

    // went for all frames here    
    frames.forEach(function(n, i) {
        zVals.push((i * zSpacing) + zSpacing)
        zVals[i] += delta * -5.5
        let frame = frames[i],
            transform = `translateZ(${zVals[i]}px)`,
            opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
        frame.setAttribute('style', `transform: ${transform}; pacity: ${opacity}`)
    })

}
// when opening, scrolling for 1px the first position
window.scrollTo(0, 1)

// Audio
let = soundButton = document.querySelector('.soundbutton'),
    audio = document.querySelector('.audio')

soundButton.addEventListener('click', e => {
    soundButton.classList.toggle('paused')
    audio.paused ? audio.play() : audio.pause()
})

// при переходе на другую вкладку аудио выкл. автоматом, а при возврате продолжает играть, если музыка была вкл
window.onfocus = function(){
    soundButton.classList.contains('paused') ? audio.pause() : audio.play()
}

window.onblur = function() {
    audio.pause()
}
