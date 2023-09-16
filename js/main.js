document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOMContentLoaded");

  gsap.to(".ufo", { duration: 2, top: 140, delay: 1 });
  gsap.to(".astronaut", { duration: 1, top: 300, delay: 3 });
  gsap.to(".ufo", { duration: 1, repeat: 14, top: 150, yoyo: true, delay: 4 });
  gsap.to(".astronaut", { duration: 1, top: -10, delay: 20 });


  gsap.to(".astronaut", {
    duration:5,
    motionPath:{
        path:[
            {rotation: 5},
            {rotation: -5},
            {rotation: .5},
        ]
    },
    repeat: 2,
    delay: 5
});

gsap.to(".ufo", {
    duration:5,
    motionPath:{
        path:[
            {top: 500, scale: 0},
        ]
    },
    delay: 21
});
});
