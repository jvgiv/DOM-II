// Your code goes here

// Top Left H1 Tag
const headerTitle = document.querySelector('body header div h1');

headerTitle.addEventListener('click', function(event) {
    event.target.style.opacity = .2;
    event.target.style.color = 'white';
});


// Images
const topImg = document.querySelector(".home .intro img");

topImg.addEventListener('mouseover', function(event) {
    TweenMax.to("img", 2, {scale: .95, ease: Bounce. easeOut});
});


// Container
const container = document.querySelector('.home');

container.addEventListener('wheel', function(event) {
    event.target.style.backgroundColor = 'grey';
})

container.addEventListener('click', function(event) {
    console.log(`Container Fired!`);
})


// Buttons
const buttonMod = document.querySelectorAll('.content-pick .destination .btn');


// buttonMod[0].addEventListener('mouseover', function() {
//     console.log(`button`);
// });

buttonMod.forEach(function(currentValue) {
    currentValue.addEventListener('mouseover', function() {
         TweenMax.to(".btn", 2, {scale: 1.2, ease: Elastic. easeOut});   
         console.log(`button`);
    });
    currentValue.addEventListener('click', function(event) {
        console.log(`button pressed!`);
        event.stopPropagation();
    })
})

// H2 tags

const hTwo = document.querySelectorAll('h2');

hTwo.forEach(function(currentValue) {
    currentValue.addEventListener('dblclick', function(event) {
        event.target.style.fontWeight = 700;
    });
    currentValue.addEventListener('wheel', function(event) {
        event.target.style.color = 'white';
    });
});

// P tags

const pTags = document.querySelectorAll('p');

pTags.forEach(function(currentValue) {
    currentValue.addEventListener('wheel', function(event) {
        event.target.style.color = 'white';
    });
});

// H4 Tags
const hFour = document.querySelectorAll('h4');

hFour.forEach(function(currentValue)  {
    currentValue.addEventListener('wheel', function(event) {
        event.target.style.display = 'none';
    });
})

// NavBar
const navBar = document.querySelectorAll('a');

navBar.forEach(function(currentValue) {
    currentValue.addEventListener('click', function(event) {
        event.preventDefault;
    });
    currentValue.addEventListener('click', function(event) {
        event.preventDefault;
    });
    currentValue.addEventListener('mouseover', function(event) {
        event.target.style.color = 'white';
    });
});

// Header
const heady = document.querySelector('.main-navigation');

heady.addEventListener('mouseover', function(event) {
    event.target.style.background = 'green';
});