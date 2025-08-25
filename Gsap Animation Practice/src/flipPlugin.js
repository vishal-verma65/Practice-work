import {gsap} from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

const box = document.querySelector(".box");
const originalContainer = document.querySelector(".original-container");
const newContainer = document.querySelector(".newContainer");

document.querySelector("button").addEventListener("click",() =>{

    const state = Flip.getState(box);
    (box.parentNode === originalContainer ? newContainer : originalContainer).appendChild(box); 
    Flip.from(state, {duration: 1, ease: "power1.inOut", scale:true, rotateZ:360});
    
});

const originalB = document.querySelector(".originalBox");
const targetB = document.querySelector(".newBox");
const anotherBox = document.querySelector(".anotherBox");

document.querySelector(".flip-btn").addEventListener("click", ()=>{

    const state = Flip.getState(originalB);
    Flip.fit(originalB, targetB, {
        duration: 1,
        ease: "power1.inOut",
        scale: true,
        onComplete: ()=>{
            Flip.fit(originalB, anotherBox, {
                duration: 1,
                ease: "power2",
                scale: true,

            onComplete: ()=>{
                Flip.fit(originalB, state, {
                    duration: 1,
                    ease: "power2",
                    scale: true,

                })}

            })}
        
    });

});

const paraDiv = document.querySelector(".para-div");
document.querySelector(".change-btn").addEventListener("click", ()=>{
const state = Flip.getState(".para-div, .para");

paraDiv.classList.toggle("reorder");

Flip.from(state, {
    duration: .5,
    stagger: .1,
    absolute: true,
    ease: "power1.inOut",
    // scale: true,
});
});


const squares = gsap.utils.toArray(".para-c");

function doFlip(){
    const state = Flip.getState(squares);

    swap(squares);

    Flip.from(state, {
        duration: 1, 
        ease: "power1",

    });

}
function swap([a, b, c, d]){
        a.parentNode.children[0] === a ? a.parentNode.appendChild(a) : a.parentNode.appendChild(b);

    }

document.querySelector(".swap-btn").addEventListener("click", doFlip);
