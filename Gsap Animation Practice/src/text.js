import gsap from "gsap";
import ScrambleTextPlugin from "gsap/ScrambleTextPlugin";

gsap.registerPlugin(ScrambleTextPlugin);

//gsap on container 1
//*using default scrambleText 
gsap.to(".scrambleText",{
    duration: 2,
    scrambleText: "This is new text",
});

//gsap on container 2
//*using custom scrambleText
gsap.to(".scrambleText2",{
    duration: 1,
    scrambleText: {
        text: "Hello, I am a Developer.",
        chars: "XO",
        // revealDelay: .5,
        speed: .3,
        newClass: "myClass",
    }   
});

//gsap on container 2
//*using custom scrambleText and adding multiple scrambleText on the same para
const tl = gsap.timeline({id:"text-scramble", defaults: {ease:"none", duration: 2}});

//*setting some default properties repeat, duration, delay for all, whenever the timeline is used, 
//* the default properties will be the defined one , unless defined explicitly
const cursorTl = gsap.timeline({repeat: -1, duration: 0.5, ease: "none", delay: 0.2,});

gsap.set("#scramble-text-original",{
    opacity: 0,

});

cursorTl.to("#scramble-cursor",{
    opacity: 0,
    // duration: 0.5, 
    // ease: "none", 
    // delay: 0.2,
})
.to("#scramble-cursor",{
    opacity: 1,
    // duration: 0.5, 
    // ease: "none", 
    // delay: 0.2,
});

tl.to("#scramble-text-1",{
    scrambleText: {
        text: "Mix it with ScrambleText.",
        chars: "lowercase",
    }
})
.to("#scramble-text-2",{
    scrambleText: {
        text: "Animate using characters,",
        chars: "XO",
    }
})
.to("#scramble-text-3",{
    scrambleText: {
        text: "numbers,",
        chars: "0123456789",
    }
})
.to("#scramble-text-4",{
    scrambleText: {
        text: "UPPERCASE or",
        chars: "upperCase",
    }
})
.to("#scramble-text-5",{
    scrambleText: {
        text: "lowercase.",
        chars: "lowerCase",
    }
})
