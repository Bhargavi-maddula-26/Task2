document.getElementById('cakeForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cakeType = document.getElementById('cakeType').value;
    const message = document.getElementById('message').value;

    const confirmation = `Thank you, ${name}! Your order for a ${cakeType} cake has been received. ${message ? `Special request: ${message}` : ''}`;
    document.getElementById('orderConfirmation').innerText = confirmation;

    // Reset form
    this.reset();
});

document.getElementById('addImage').addEventListener('click', function() {
    const imageUrl = document.getElementById('imageUrl').value;
    if (imageUrl) {
        const cakeImagesDiv = document.getElementById('cakeImages');
        // Create a new div for the image
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('cake-image');
        imgDiv.style.backgroundImage = `url(${imageUrl})`;
        
        // Append the new div to the gallery
        cakeImagesDiv.appendChild(imgDiv);
        
        // Clear the input field after adding the image
        document.getElementById('imageUrl').value = '';
    } else {
        alert('Please enter an image URL');
    }
});

const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel img');
let index = 0;

function slideImages() {
    index = (index + 1) % images.length;
    carouselImages.style.transform = `translateX(${-index * 100}%)`;
}
if (images.length > 0) {
    setInterval(slideImages, 3000); // Slide every 3 seconds
}
