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
    'images/image1.webp',
    'images/image2.webp',
    'images/image3.webp',
    'images/image4.webp',
    'images/image5.webp',
    'images/image6.webp',
    'images/image7.webp',
    'images/image8.webp',
    'images/image9.webp',
    'images/image10.webp',
    'images/image11.webp',
    'images/image12.webp',
    'images/image13.webp',
    'images/image14.webp',
    'images/image15.webp'
];

let currentIndex = 0;
const imageElement = document.getElementById('loop-image');

// Preload all images
const preloadedImages = images.map(src => {
    const img = new Image();
    img.src = src;
    return img;
});

function changeImage() {
    const nextImage = preloadedImages[currentIndex];
    if (nextImage.complete) {
        imageElement.src = nextImage.src;
        currentIndex = (currentIndex + 1) % preloadedImages.length;
    }
}

// Start the image loop
setInterval(changeImage, 350);

// Grab references to the button and div
const fadeButton = document.getElementById('fadeButton');
const fadeDiv = document.getElementById('fadeDiv');

// Add click event listener to the button
fadeButton.addEventListener('click', function() {
    fadeDiv.classList.add('fadeOut');
    document.body.classList.remove('noScroll');
});
