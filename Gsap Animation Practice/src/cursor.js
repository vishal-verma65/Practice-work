import gsap from "gsap";

const cursor = document.querySelector(".cursor");
const helloBox = document.querySelector(".content");
const changeBox = document.querySelector(".content2");
const anotherBox = document.querySelector(".content3");

document.body.addEventListener("mousemove",(event)=>{
    // console.log(event.x, event.y);
    gsap.to(cursor,{
            y: event.y ,
            x: event.x ,
            duration: .5,
        })
    });

    helloBox.addEventListener("mouseenter",()=>{
        gsap.to(cursor,{
            scale: 2,
            opacity: .5,
            backgroundColor: "#ffffff",
        });
    });
    helloBox.addEventListener("mouseleave",()=>{
        gsap.to(cursor,{
            scale: 1,
            opacity: 1,
            backgroundColor: "#1f97cb",
        });
    });

    changeBox.addEventListener("mouseenter",()=>{
        gsap.to(cursor,{
            backgroundColor: "#dc9b0396",
            boxShadow: "0 0 0rem #f4ad06, 0 0 1.5rem #f4ad06, 0 0 2rem #f4ad06, 0 0 2.5rem #f4ad06, 0 0 3rem #f4ad06",
        });
    });
    changeBox.addEventListener("mouseleave",()=>{
        gsap.to(cursor,{
            scale: 1,
            opacity: 1,
            backgroundColor: "#1f97cb",
            boxShadow: "none",
        });
    });

    anotherBox.addEventListener("mouseenter",()=>{
        gsap.to(cursor, {
            opacity: .5,
            scale: 2,
            backgroundColor: "#730bc3",
            borderRadius: "1%",
            rotate: "360deg",
            repeat: -1,

        });
    });
    anotherBox.addEventListener("mouseleave",()=>{
        gsap.killTweensOf(cursor);
        gsap.to(cursor,{
            opacity: 1,
            scale: 1,
            borderRadius: "50%",
            backgroundColor: "#1f97cb",
            rotate: 0,
            repeatRefresh: false,
        });
    });
    

