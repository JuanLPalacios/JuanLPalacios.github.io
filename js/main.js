function toggleNavigationMenu() {
  const ul = document.querySelector('#nav-menu');
  ul.classList.toggle('mobile-nav-menu');
}

window.addEventListener('load', () => {
  /* // Support For Hash Navigation
  let $hash = window.location.hash;
  const observer = new MutationObserver(() => {
    if ($hash !== window.location.hash) {
      $hash = window.location.hash;
      console.log(window.location.hash);
      // if(hash=="")
    }
  });
  observer.observe(document, { subtree: true, childList: true }); */

  document.querySelector('#menu-btn').addEventListener('click', () => {
    toggleNavigationMenu();
  });

  document.querySelector('#nav-menu').addEventListener('click', () => {
    toggleNavigationMenu();
  });
});