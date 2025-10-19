const banner = document.querySelector('.banner');

// Create gentle sparkles
for (let i = 0; i < 30; i++) {
  const sparkle = document.createElement('div');
  sparkle.classList.add('sparkle');
  sparkle.style.left = Math.random() * 100 + 'vw';
  sparkle.style.animationDelay = Math.random() * 5 + 's';
  sparkle.style.animationDuration = 5 + Math.random() * 4 + 's';
  sparkle.style.width = sparkle.style.height = Math.random() * 6 + 2 + 'px';
  banner.appendChild(sparkle);
}