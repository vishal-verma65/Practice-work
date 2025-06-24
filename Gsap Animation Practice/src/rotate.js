import gsap from "gsap";

gsap.to("#app",{
    x: "70vw",
    yoyo: true,
    rotate: 360,
    repeat: -1,
    duration: 2,
    ease: "Power3.easeInOut",
    scale: 1.5,
    borderRadius: 20,
});

gsap.from(".sub-box",{
    rotateX: 360,
    rotateY: 360,
    backgroundColor: "#5a11a7",
    duration: 5,
    ease: "none",
    repeat: -1,
});

// gsap.to(".sub-box", {
//   duration: 5,
//   ease: "none",
//   x: "+=500", //move each box 500px to right
//   modifiers: {
//     x: gsap.utils.unitize(x => parseFloat(x) % 500) //force x value to be between 0 and 500 using modulus
//   },
//   repeat: -1
// });

gsap.to(".sub-box2", {
    rotateZ: 360,
    rotateX: 360,
    rotateY: 360,
    backgroundColor: "#03531e",
    duration: 5,
    ease: "none",
    repeat: -1, 

});

gsap.from(".sub-box3",{
    y: 300,
    duration: 2,
    rotateY: 360,
    repeat: -1,
    stagger: .2,
});

gsap.from(".sub-box4",{
    opacity: 0,
    duration: 2,
    repeat: -1,
    stagger: .2,
});
