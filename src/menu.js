import { renderHomePage } from './home';
import { renderContactPage } from './contact';

export function renderMenuPage() {
  // Reset container contents
  const introContainer = document.querySelector('.intro-container');
  introContainer.innerHTML = '';

  // Switch to Menu Container
  const container = document.querySelector('.intro-container');
  container.classList.remove('intro-container');
  container.classList.add('menu-container');

  const menuItems = [
    {
      imgSrc: './images/pepperoni_pizza.jpg',
      title: 'Pepperoni',
      description: 'Classic pizza topped with spicy pepperoni slices.',
    },
    {
      imgSrc: './images/neapolitan_pizza.jpg',
      title: 'Italian',
      description: 'Authentic Italian pizza with a thin crust and a blend of flavorful toppings.',
    },
    {
      imgSrc: './images/classic_pizza.jpg',
      title: 'Margherita',
      description: 'Traditional pizza with fresh mozzarella, basil leaves, and tomato sauce.',
    },
    {
      imgSrc: './images/house_pizza.jpg',
      title: 'Special',
      description: 'Chef\'s special pizza featuring a unique premium ingredients.',
    },
  ];

  for (let i = 0; i < menuItems.length; i++) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');

    const menuItemImg = document.createElement('img');
    menuItemImg.classList.add('menu-item-img');
    menuItemImg.src = menuItems[i].imgSrc; // Sets menu item img dynamically

    container.appendChild(menuItem);
    menuItem.appendChild(menuItemImg);

    const menuItemWrapper = document.createElement('div');
    menuItemWrapper.classList.add('menu-item-wrapper');
    menuItem.appendChild(menuItemWrapper);

    const menuItemTitle = document.createElement('h2');
    menuItemTitle.textContent = menuItems[i].title;
    menuItemTitle.classList.add('menu-item-title');

    const menuItemDescription = document.createElement('p');
    menuItemDescription.textContent = menuItems[i].description;
    menuItemDescription.classList.add('menu-item-description');

    menuItemWrapper.appendChild(menuItemTitle);
    menuItemWrapper.appendChild(menuItemDescription);

    // Event Listeners for Nav Bar
    const menuBtn = document.querySelector('.menu');
    menuBtn.addEventListener('click', () => {
      renderMenuPage();
    });

    const homeBtn = document.querySelector('.home');
    homeBtn.addEventListener('click', () => {
      renderHomePage();
    });

    const contactBtn = document.querySelector('.contact');
    contactBtn.addEventListener('click', () => {
      renderContactPage();
    });
  }
}
