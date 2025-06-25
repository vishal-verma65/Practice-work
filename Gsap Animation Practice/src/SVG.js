import gsap from "gsap";

let initialPath = `M 0 100 Q 750 100 1500 100`;
let finalPath  = `M 0 100 Q 750 100 1500 100`;

var string = document.querySelector(".string");

string.addEventListener("mousemove", function(event){

    //* setting the with of the svg to viewport width, window.inner width gives the viewport with of the current screen
    const viewPortWidth = window.innerWidth;
    const rect = string.getBoundingClientRect();
    // console.log(rect);

     `To find the coordinates of mouse cursor withing a element initializing from 0,0 , 
     using getBoundingClient() to get the relative coordinate of the element to the viewpoint.
     This will help to start the coordinates from 0, even if we resize the element`

    const x = event.x - rect.left;
    const y = event.y - rect.top;
    // console.log(x, y); 

    finalPath  = `M 0 100 Q ${x} ${y} ${viewPortWidth} 100`;
    // console.log(event);
    
    gsap.to("svg path",{
        attr: {d: finalPath},
        duration: .3,
        
    });
});
string.addEventListener("mouseleave", function(){

    const viewPortWidth = window.innerWidth;
    initialPath  = `M 0 100 Q ${viewPortWidth/2} 100 ${viewPortWidth} 100`;
    gsap.to("svg path",{
        attr: {d: initialPath},
        // duration: .3,
        ease: "elastic",
        
        
    })
});