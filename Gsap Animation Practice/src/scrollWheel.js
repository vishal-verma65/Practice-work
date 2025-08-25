import gsap from "gsap";

let img = document.querySelectorAll(".text img");
const textBox = document.querySelectorAll(".text");



window.addEventListener("wheel",(event)=>{
    // console.log(event.deltaX,  event.deltaY);

    if(event.deltaY >= 0){
        gsap.to(textBox,{
        transform: "translateX(-200%)",
        duration: 7,
        repeat: -1,
        ease: "none"
        });
        gsap.to(img,{
            rotate: -180,
            duration: 1,
        });
    }
    else{
        gsap.to(textBox,{
        transform: "translateX(0%)",
        duration: 7,
        repeat: -1,
        ease: "none"
        });
        gsap.to(img,{
            rotate: 0,
            duration: 1,
        });
      }

     
})

