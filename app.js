//Creating a timeline to time different animations together
const tl = gsap.timeline({
    defaults: {
        duration: 0.35,
        ease: "Power2.easeOut"
    },
});

const home = document.querySelector('.home');
const notifications = document.querySelector('.notifications');
const messages = document.querySelector('.messages');

//set the certain object using the predefined gsap set function 
//setting the tranfor origin to the centr (going to scale up from the middle of the svg)
gsap.set('.feather', {
    scale: 0,
    transformOrigin: "center"
});


//Home animate on click function 
home.addEventListener('click', () => {
    gsap.fromTo('.home-svg', {
        scale: 1
    }, {
        scale: 0.9,
        yoyo: true,
        repeat: 1
    });
    //Adding the stagger and the time to drop the leaves by the different speeds 
    gsap.fromTo('.feather', {
        y: -5,
        scale: 0
    }, {
        y: 20,
        scale: 1.5,
        duration: 1,
        stagger: 0.2
    });
    //Seperate the feathers so that the fall at the different sides 
    gsap.fromTo('.right-feather', {
        x: 0
    }, {
        x: 5
    });
});

//Setting the transform origin to the top of the centre of the bell 
//Notification animation
gsap.set('.bell', {
    transformOrigin: 'top center'
});
gsap.set('.ringer', {
    transformOrigin: 'top center'
});

gsap.set('.wave', {
opacity:0, transformOrigin: 'bottom'});



//Notifications on click function 
notifications.addEventListener('click', () => {
    //grabbing the body of the bell
    gsap.fromTo('.bell', {
        rotation: -5
    }, {
        rotation: 0,
        duration: 2,
        ease: "elastic.out(5, 0.2)"
    });
    gsap.fromTo('.ringer', {
        rotation: -3, x: 0.5
    }, {
        rotation: 0,
        x: 0,
        duration: 1.2,
        ease: "elastic.out(5, 0.2)"
    });
    gsap.fromTo('.wave', {scale: 0, opacity: 1}, 
    {scale: 1.3, opacity: 0, duration:1 } )
});

//Messages 
//Transform flaps origin so it starts scaling from the top 
gsap.set('.flap', {transformOrigin: "top"})
messages.addEventListener('click', () => {
 tl.fromTo('.messages-svg', {scale: 1}, {scale:0.9}); 
 //the flap to open up (scaling down to 0 and reversing the shape of svg )
 tl.fromTo('.flap', {scale:1}, {scale:-1}, "<50%");
 tl.fromTo('.messages-svg', {scale: 0.9}, {scale: 1}, "<50%"); 
 tl.fromTo('.note', {y:0, opacity: 1}, {y: -40, opacity: 0, duration: 0.75}); 
 tl.to('.flap', {scale:1}, "<50%")

});
