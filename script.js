// Fade-In Effekt beim Scrollen (für spätere Erweiterung mit .download-section)
window.addEventListener('scroll', () => {
  const downloadSection = document.querySelector('.download-section');
  if (downloadSection) {
    const rect = downloadSection.getBoundingClientRect();
    if (rect.top < window.innerHeight && !downloadSection.classList.contains('fade-in')) {
      downloadSection.classList.add('fade-in');
    }
  }
});

// Zoom-Effekt für den Download-Button bei Hover
const downloadButton = document.querySelector('.cta-button');
if (downloadButton) {
  downloadButton.addEventListener('mouseenter', () => {
    downloadButton.classList.add('zoom');
  });
  downloadButton.addEventListener('mouseleave', () => {
    downloadButton.classList.remove('zoom');
  });
}

// Klick-Animation beim Button "Jetzt Herunterladen"
const downloadLink = document.querySelector('.download-link');
if (downloadLink) {
  downloadLink.addEventListener('click', (e) => {
    e.preventDefault(); // Linkverhalten unterbrechen
    document.body.classList.add('animate-click');
    setTimeout(() => {
      window.location.href = downloadLink.href;
    }, 800); // 800ms für Animation
  });
}
