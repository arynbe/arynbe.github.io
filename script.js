// Select the single element with the class 'cv'
const cvElement = document.querySelector('.cv');
const body = document.body;

// Function to toggle the inverted colors
function toggleInvert(isInverted) {
    body.style.backgroundColor = isInverted ? 'black' : 'white';
    body.style.color = isInverted ? 'white' : 'black';

    // Select all link elements in the entire document
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        // Invert color for all links in the document
        link.style.color = isInverted ? 'white' : 'black';
    });
}

// Add event listeners to the entire .cv section
cvElement.addEventListener('mouseenter', () => toggleInvert(true));  // Invert on hover
cvElement.addEventListener('mouseleave', () => toggleInvert(false)); // Revert on mouse leave

const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
    'images/image6.jpg',
    'images/image7.jpg',
    'images/image8.jpg',
    'images/image9.jpg',
    'images/image10.jpg',
    'images/image11.jpg',
    'images/image12.jpg',
    'images/image13.jpg',
    'images/image14.jpg'
];

let currentIndex = 0;
const imageElement = document.getElementById('loop-image');

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
}

setInterval(changeImage, 300); 

// Grab references to the button and div
const fadeButton = document.getElementById('fadeButton');
const fadeDiv = document.getElementById('fadeDiv');

// Add click event listener to the button
fadeButton.addEventListener('click', function() {
    fadeDiv.classList.add('fadeOut');
    document.body.classList.remove('noScroll');
});