export function renderMenuPage() {
  // Reset container contents
  const introContainer = document.querySelector('.intro-container');
  introContainer.innerHTML = '';

  // Switch to Menu Container
  const container = document.querySelector('.intro-container');
  container.classList.remove('intro-container');
  container.classList.add('menu-container');

  console.log('menu page rendered');
}
