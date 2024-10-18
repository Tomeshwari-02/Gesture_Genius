let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

// Function to show the current slide and hide others
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';  // Show only the current slide
        slide.style.transition = 'opacity 0.5s ease-in-out'; // Smooth transition
        slide.style.opacity = (i === index) ? '1' : '0';  // Smooth opacity transition
    });
}

// Function to move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide when reaching the last
    showSlide(currentSlide);
}

// Initialize the first slide
window.onload = function() {
    showSlide(currentSlide);
};

// Set interval to change slides every 5 seconds
setInterval(nextSlide, 5000);

// Ensure responsiveness when resizing the window
window.addEventListener('resize', () => {
    slides.forEach(slide => {
        slide.style.height = `${window.innerHeight}px`;  // Adjust slide height to fit the viewport
        slide.style.width = `${window.innerWidth}px`;    // Adjust slide width to fit the viewport
    });
});
document.getElementById('downloadButton').addEventListener('click', () => {
    // Path to your zip file
    const zipFilePath = 'C:\\Users\\ASUS\\OneDrive\\Desktop\\Gesture Genius\\New Web\\hack.zip';

    // Create an anchor element
    const link = document.createElement('a');
    link.href = zipFilePath;
    link.download = 'hack.zip';

    // Append it to the body and trigger a click event
    document.body.appendChild(link);
    link.click();

    // Remove the link after download
    document.body.removeChild(link);
});








