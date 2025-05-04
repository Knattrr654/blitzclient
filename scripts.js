// Fade-In Animation für den Download-Bereich beim Scrollen
window.addEventListener('scroll', function () {
  const downloadSection = document.querySelector('.download-section');
  if (downloadSection && !downloadSection.classList.contains('fade-in')) {
    const rect = downloadSection.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      downloadSection.classList.add('fade-in');
    }
  }
});

// Fade-In direkt beim Laden, wenn bereits sichtbar
document.addEventListener('DOMContentLoaded', () => {
  const downloadSection = document.querySelector('.download-section');
  if (downloadSection) {
    const rect = downloadSection.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      downloadSection.classList.add('fade-in');
    }
  }

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

  // Animation beim Klick auf "Jetzt Herunterladen" (Startseite)
  const ctaButton = document.querySelector('.cta-button');
  if (ctaButton) {
    ctaButton.addEventListener('click', (e) => {
      e.preventDefault(); // Navigation kurz blockieren
      document.body.classList.add('animate-click');

      setTimeout(() => {
        window.location.href = ctaButton.href;
      }, 1000); // Warte auf Animation
    });
  }
});
