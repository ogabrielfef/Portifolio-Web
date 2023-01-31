function togleMenu() {
  // const menu = document.querySelector('#menu');
  const links = document.querySelector('.links');

  if (links.classList.contains('active')) {
    links.classList.remove('active');
  } else {
    links.classList.add('active');
  }
};