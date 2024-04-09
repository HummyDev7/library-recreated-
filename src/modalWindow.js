const modalWindow = (function () {
  //cache DOM
  let addButton = document.querySelector(".add__btn");
  let modalContainer = document.querySelector(".modal__window");
  let mainContainer = document.querySelector(".main__container");
  let darkBackground = document.querySelector('.dark__effect');

  //listners
  addButton.addEventListener("click", showModal);
  document.addEventListener("click", hideModal);

  function showModal() {
    modalContainer.style.display = "flex";
    darkBackground.classList.add('bg__dark');
  }

  //Hide the window modal when clicked outside the modal window
  function hideModal() {
    modalContainer.addEventListener("click", (e) => {
      if (!e.target.closest(".window__content")) {
        modalContainer.style.display = "none";
        darkBackground.classList.remove('bg__dark');
      }
    });
  }
})();
