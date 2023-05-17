import { renderMenuPage } from './menu';

export function renderHomePage() {
  // Reset container contents
  const content = document.getElementById('content');
  content.innerHTML = '';

  // Create Background and Overlay Elements
  const background = document.createElement('div');
  const overlay = document.createElement('div');
  const flexWrapper = document.createElement('div');
  const logo = document.createElement('div');

  // Create Navbar Elements
  const navbar = document.createElement('div');
  const ul = document.createElement('ul');
  const homeLi = document.createElement('li');
  const menuLi = document.createElement('li');
  const contactLi = document.createElement('li');

  // Create Navbar Links Elements
  const homeLink = document.createElement('a');
  const menuLink = document.createElement('a');
  const contactLink = document.createElement('a');

  // Create Intro Container Elements
  const introContainer = document.createElement('div');
  const introWrapper = document.createElement('div');
  const introTitle = document.createElement('h2');
  const introMessage = document.createElement('p');
  const chefImg = document.createElement('img');

  // Add Relevant CSS Classes and Text Content
  background.classList.add('background');
  overlay.classList.add('overlay');
  flexWrapper.classList.add('flex-wrapper');
  logo.classList.add('logo');
  navbar.classList.add('navbar');
  homeLi.classList.add('home');
  menuLi.classList.add('menu');
  contactLi.classList.add('contact');

  homeLink.textContent = 'Home';
  menuLink.textContent = 'Menu';
  contactLink.textContent = 'Contact';

  introContainer.classList.add('intro-container');
  introTitle.classList.add('intro-title');
  introTitle.textContent = 'The best pizza in UK';
  introMessage.classList.add('intro-message');
  introMessage.textContent = 'Made with 100% locally sourced ingredients';
  chefImg.classList.add('chef-img');
  chefImg.setAttribute('src', '../src/images/chef.jpg');

  // Background Flex Render
  content.appendChild(background);

  // Top Overlay and Flex-Wrapper Render
  background.appendChild(overlay);
  overlay.appendChild(flexWrapper);

  // Site Logo Render
  flexWrapper.appendChild(logo);

  // Nav Bar Render
  flexWrapper.appendChild(navbar);
  navbar.appendChild(ul);

  // Nav Bar Tabs Render
  ul.appendChild(homeLi);
  ul.appendChild(menuLi);
  ul.appendChild(contactLi);

  // Nav Bar Links Render
  homeLi.appendChild(homeLink);
  menuLi.appendChild(menuLink);
  contactLi.appendChild(contactLink);

  // Intro Container Render
  background.appendChild(introContainer);
  introContainer.appendChild(introWrapper);
  introWrapper.appendChild(introTitle);
  introWrapper.appendChild(introMessage);
  introContainer.appendChild(chefImg);

  console.log('home page rendered');

  // Event Listeners for Nav Bar
  const menuBtn = document.querySelector('.menu');
  menuBtn.addEventListener('click', () => {
    renderMenuPage();
  });

  const homeBtn = document.querySelector('.home');
  homeBtn.addEventListener('click', () => {
    renderHomePage();
  });
}
