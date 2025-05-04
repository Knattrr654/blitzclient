// Fade-In Animation für den Download-Bereich beim Scrollen
window.addEventListener('scroll', function() {
  const downloadSection = document.querySelector('.download-section');
  const rect = downloadSection.getBoundingClientRect();

  if (rect.top < window.innerHeight) {
    downloadSection.classList.add('fade-in');
  }
});

// Zoom-Effekt beim Hover über den Button
const downloadButton = document.querySelector('.download-button');
if (downloadButton) {
  downloadButton.addEventListener('mouseenter', () => {
    downloadButton.classList.add('zoom');
  });

  downloadButton.addEventListener('mouseleave', () => {
    downloadButton.classList.remove('zoom');
  });
}

// Animation beim Klick auf "Jetzt Herunterladen"
const downloadLink = document.querySelector('.download-link');
if (downloadLink) {
  downloadLink.addEventListener('click', () => {
    document.body.classList.add('animate-click');
    setTimeout(() => {
      window.location.href = downloadLink.href; // Redirect to the download link
    }, 1000); // Give the animation time to run before the redirect
  });
}
