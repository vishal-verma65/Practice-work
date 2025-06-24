import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.to(".page1", {
    rotate: 360,
    scale: 3,
    // repeat: -1,
    duration: 2,
});
gsap.to(".page2", {
    rotate: 360,
    scale: 3,
    // repeat: -1,
    duration: 2,
    scrollTrigger: {
        trigger: ".page2",
        scroller: "body",
        start: "top 70%",
        end: "top 10%",
        scrub: 3,
        markers: true,
    }
});
gsap.to(".page3", {
    rotateX: 360,
    rotateY: 360,
    rotateZ: 360,
    scale: 3,
    // repeat: -1,
    duration: 2,
    scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        start: "top 70%",
        end: "top 10%",
        scrub: true,
        markers: true,
    }
});
gsap.from(".page4", {
    x: -100,
    backgroundColor: "#555555",
    scale: 3,
    // repeat: -1,
    duration: 2,
    scrollTrigger: {
        trigger: ".page4",
        scroller: "body",
        start: "top 90%",
        end: "top 20%",
        scrub: true,
        markers: true,
    }
});

gsap.to(".pin-div h1",{
    transform: "translate(-100%)",

    scrollTrigger: {
        trigger: ".pin-div",
        scroller: "body",
        start: "top 0%",
        end: "top -150%",
        scrub: 2,
        pin: true,

    }


})