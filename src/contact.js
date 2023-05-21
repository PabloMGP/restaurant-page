import { renderMenuPage } from './menu';
import { renderHomePage } from './home';

export function renderContactPage() {
  // Reset container contents
  const container = document.querySelector('.intro-container, .menu-container');
  if (container.classList.contains('intro-container')) {
    container.innerHTML = '';
  } else if (container.classList.contains('menu-container')) {
    container.innerHTML = '';
    container.classList.remove('menu-container');
    container.classList.add('intro-container');
  }

  const contactWrapper = document.createElement('div');
  const rowOne = document.createElement('div');
  const rowTwo = document.createElement('div');

  const contactPhoneImg = document.createElement('img');
  const contactPhone = document.createElement('p');

  const contactAddressImg = document.createElement('img');
  const contactAddress = document.createElement('p');

  const contactMap = document.createElement('img');

  contactWrapper.classList.add('contact-wrapper');

  rowOne.classList.add('row-one');
  contactPhoneImg.classList.add('phone-img');
  contactPhone.innerText = '07728 78129';

  rowTwo.classList.add('row-two');
  contactAddressImg.classList.add('address-img');
  contactAddress.innerText = '32 Oxford Circus';

  contactMap.classList.add('map-img');

  container.appendChild(contactWrapper);

  contactWrapper.appendChild(rowOne);
  rowOne.appendChild(contactPhoneImg);
  rowOne.appendChild(contactPhone);

  contactWrapper.appendChild(rowTwo);
  rowTwo.appendChild(contactAddressImg);
  rowTwo.appendChild(contactAddress);
  rowTwo.appendChild(contactMap);

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
