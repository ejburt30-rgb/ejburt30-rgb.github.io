// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');
// Array of slides (3 images)
const slides = [
{ src: 'images/room.jpeg',
alt: 'shadow',
caption: 'Here We Are'
},
	
{ src: 'images/thug.jpeg',
alt: 'second',
caption: 'Help Me Out'
},
	
{ src: 'images/dont.jpeg',
alt: 'third',
caption: 'We So Cool'
},
	
{ src: 'images/karti.jpeg',
alt: 'Fourth',
caption: 'Im Cooler'
} ,
{ src: 'images/ken.jpeg',
alt: 'Fifth',
caption: 'Chill Out Guys'
} ,
{ src: 'images/closer.jpeg',
alt: 'Fifth',
caption: 'Come a little closer'
 } ,
{ src: 'images/cte.jpeg',
alt: 'Fifth',
caption: 'I look crazy'
 } ,
{ src: 'images/bb.jpeg',
alt: 'Fifth',
caption: 'Say My Name'
 } ,
{ src: 'images/mona.jpeg',
alt: 'Fifth',
caption: 'Shut up guys'
 } ,
{ src: 'images/blue.jpeg',
alt: 'Fifth',
caption: 'Goodnight'
 } 
];

// JavaScript Document
let currentIndex = 0;

// Preload images
slides.forEach(({ src }) => {
	const i = new Image();
	i.src = src;
});

// Helper to show slide and change text
function showSlide(index) {
	const slide = slides[index];
	mainImage.src = slide.src;
	mainImage.alt = slide.alt;
	caption.textContent = slide.caption;
	
	
}

// Advance on click
function nextSlide() {
	currentIndex = (currentIndex + 1) % slides.length;
	showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);