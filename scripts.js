// Fade-In Animation für den Download-Bereich beim Scrollen
window.addEventListener('scroll', function() {
  const downloadSection = document.querySelector('.download-section');
  if (!downloadSection.classList.contains('fade-in')) {
    const rect = downloadSection.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      downloadSection.classList.add('fade-in');
    }
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
const downloadLink = document.querySelector('.cta-button'); // Assuming the "Jetzt Herunterladen" button has this class
if (downloadLink) {
  downloadLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent the default link action
    document.body.classList.add('animate-click');
    setTimeout(() => {
      window.location.href = downloadLink.href; // Redirect to the download link after the animation
    }, 1000); // Give the animation time to run before the redirect
  });
}

window.onload = function() {
  const downloadSection = document.querySelector('.download-section');
  const rect = downloadSection.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    downloadSection.classList.add('fade-in');
  }
};
