'use strict'

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  // マスク
  const mask = document.getElementById('mask');
  const closepage = document.getElementById('closepage');
  const closesub = document.getElementById('closesub');
  const closedetalils = document.getElementById('closedetalils');
  const closeabout = document.getElementById('closeabout');
  const closelocation = document.getElementById('closelocation');


  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
    mask.classList.remove('hidden');
  })
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
    mask.classList.add('hidden');
  })
  mask.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
    mask.classList.add('hidden');
  })
  closepage.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
    closepage.classList.add('hidden');
  })
  closesub.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
    closesub.classList.add('hidden');
  })
  closedetalils.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
    closedetalils.classList.add('hidden');
  })
  closeabout.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
    closeabout.classList.add('hidden');
  })
  closelocation.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
    closelocation.classList.add('hidden');
  })

}

{
  const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
      prevEl: '.my-button-prev',
      nextEl: '.my-button-next',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}