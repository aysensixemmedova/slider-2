var btLeft=document.getElementById("btnLeft")
var btRight=document.getElementById("btnRight")
var allslide=document.querySelectorAll(".slide")
var hazirkiSlide=0
btLeft.onclick=function(){
    SliderAll(hazirkiSlide-1)
}
btRight.onclick=function(){
    SliderAll(hazirkiSlide+1)
}
function SliderAll(say){
    allslide[hazirkiSlide].className="slide"
    hazirkiSlide=(say+allslide.length)%allslide.length
    allslide[hazirkiSlide].className="slide active"
}