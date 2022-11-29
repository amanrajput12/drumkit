const soundA =document.getElementById("a")
const soundS =document.getElementById("s")
const soundD =document.getElementById("d")
const soundJ =document.getElementById("j")
const soundK =document.getElementById("k")
const soundI =document.getElementById("i")
soundA.addEventListener("click",musicA)
soundS.addEventListener("click",musicS)
soundD.addEventListener("click",musicD)
soundJ.addEventListener("click",musicJ)
soundK.addEventListener("click",musicK)
soundI.addEventListener("click",musicI)

function musicA(){
    let audio =new Audio("")
    audio.src ="./music/a.mp3"
    audio.play()
    
}
function musicS(){
  
    let audio =new Audio("")
    audio.src ="./music/s.mp3"
    audio.play()
}
function musicD(){
    let audio =new Audio("")
    audio.src ="./music/d.mp3"
    audio.play()
}
function musicJ(){
    let audio =new Audio("")
    audio.src ="./music/j.mp3"
    audio.play()
}
function musicK(){
    let audio =new Audio("")
    audio.src ="./music/k.mp3"
    audio.play()
}
function musicI(){
    let audio =new Audio("")
    audio.src ="./music/i.mp3"
    audio.play()
}