'use strict';
export const modalFunc = () => {
  const cartModal = document.querySelector('.cart-modal__overlay');
  const cartButton = document.querySelector('#cart-button');

  const openWindow = (item) => item.classList.add('open');
  const closeWindow = (item) => item.classList.remove('open');

  cartButton.addEventListener('click', () => openWindow(cartModal));

  cartModal.addEventListener('click', (event) => {
    if (event.target.classList.contains('cart-modal__overlay') || event.target.closest('#cart-modal-close')) closeWindow(cartModal);
  });
};
