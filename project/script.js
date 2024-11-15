const navLinks = document.getElementById('navLinks');
const hamburger = document.getElementById("hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("show"); // Show or hide the menu
});


// see more 
function toggleText() {
  const moreText = document.querySelector('.more-text');
  const btnText = document.querySelector('.read-more-btn');
  const icon = btnText.querySelector('i');
  if (moreText.style.display === "none" || moreText.style.display === "") {
    moreText.style.display = "inline";
    btnText.innerHTML = "Read Less ";
    btnText.appendChild(icon); 
    icon.className = "fa-solid fa-angles-left";
  } else {
    moreText.style.display = "none";
    btnText.innerHTML = "Read More ";
    btnText.appendChild(icon); 
    icon.className = "fa-solid fa-angles-right";
  }
}


// Function to open modal
function openModal(modalId) {
  document.getElementById(modalId).style.display = 'block';
}

// Function to close modal
function closeModal(modalId) {
  document.getElementById(modalId).style.display = 'none';
}
// Close modal if user clicks outside the modal content
window.onclick = function(event) {
  const contactModal = document.getElementById('contactModal');
  const subscribeModal = document.getElementById('subscribeModal');
  
  if (event.target === contactModal) {
      closeModal('contactModal');
  }
  if (event.target === subscribeModal) {
      closeModal('subscribeModal');
  }
}


// scroll navigation for video 
document.addEventListener("scroll", function() {
  const video = document.getElementById("scrollVideo");
  const videoPosition = video.getBoundingClientRect();

  //checking viewport
  if (videoPosition.top >= 0 && videoPosition.bottom <= window.innerHeight) {
    if (video.paused) {
      video.play();
    }
  } else {
    if (!video.paused) {
      video.pause();
    }
  }
});


document.getElementById("see-more-btn").addEventListener("click", function() {
  const testimonialCard = document.getElementById("testi-card");
  if (testimonialCard.style.display === "none" || testimonialCard.style.display === "") {
      testimonialCard.style.display = "inline";
      this.textContent = "See Less";
  } else {
      testimonialCard.style.display = "none";
      this.textContent = "See More";
  }
});


// Scrolls to the first card on page load
window.addEventListener('load', () => {
  document.querySelector('.testimonial-container').scrollLeft = 0;
});
