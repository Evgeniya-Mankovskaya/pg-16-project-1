(() => {
  const refs = {
    roket: document.querySelector('[data-roket]'),
  };
window.addEventListener('scroll', function() {
    var y = window.scrollY;
    y < 150 ? refs.roket.classList.add('visually-hidden') : refs.roket.classList.remove('visually-hidden');
});
    top.onclick = function() {
        refs.roket.classList.add('visually-hidden');
  };
})();