let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;
let isTransitioning = false;

function showSlide(index) {
    if (isTransitioning) return;  // Prevent multiple clicks during transition
    isTransitioning = true;

    if (index < 0) {
        currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
        currentIndex = 0;
    } else {
        currentIndex = index;
    }

    const transformValue = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${transformValue}%)`;

    setTimeout(() => {
        isTransitioning = false;
    }, 500);  // Transition delay
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Initialize carousel
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
});



// **********************dashboard transition******************

function toggleburger()
    {
    const sidebar = document.getElementById('sidebar');
    const content =document.getElementById('content');
    sidebar.classList.toggle('active');
    content.classList.toggle('shift');
    }

















// let currentIndex = 0;
// const Items = document.querySelectorAll('carousel-item');
// const totalItems = Items.length;
// let isTransitioning = false;

// if(!isTransitioning){
//     isTransitioning = true;

//     Items.forEach((item, i) => {
//         item.classList.toggle('active',i===index)
//     }); 
//     const transformValue = -index * 100;   //for 100%sliding
//     document.querySelector('.carousel-inner').style.transform = `translateX(${transformValue}%)`;
//     setTimeout(() => {
//     isTransitioning =false;
// },1000);


// }

// function prevSlide(){
//     currentIndex = (currentIndex-1) % totalItems;
//     showSlide(currentIndex);
// }
// function nextSlide(){
//     currentIndex = (currentIndex+1) % totalItems;
//     showSlide(currentIndex);
// }
// function currentSlide(index) {
//                 currentIndex = index;
//                 showSlide(currentIndex);
//             }
    
//             setInterval(nextSlide, 5000);
    
//             document.addEventListener('DOMContentLoaded', () => {
//                 showSlide(currentIndex);
//             });
    
    
    
    
