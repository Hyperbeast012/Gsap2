
var tl= gsap.timeline()

function time(){
    var a=0
    setInterval(function(){
        a=a+Math.floor(Math.random()*15)
        if(a<100){
        document.querySelector("#loader h1").innerHTML=a+"%"
        }
        else{
            a=100
            document.querySelector("#loader h1").innerHTML=a+"%"
        }
    },150)

}


tl.to("#loader h1",{
    scale:1.5,
    delay:0.5,
    duration:1,
    onStart:time()
})

tl.to("#loader",{
    top:"-100vh",
    delay:0.5,
    duration:1.5
})

tl.to("#page h1",{
    transform:"translateX(-100%)",
    fontWeight:"300",
    scrollTrigger:{
        trigger:"#page ",
        scroller:"body",
        start:"top 0",
        end:"top -200%",
        scrub:2,
        pin:true

    }
})


