const modalWindow = (function () {
  //cache DOM
  let addButton = document.querySelector(".add__btn");
  let modalContainer = document.querySelector(".modal__window");
  let mainContainer = document.querySelector(".main__container");

  //listners
  addButton.addEventListener("click", showModal);
  document.addEventListener("click", hideModal);

  function showModal() {
    modalContainer.style.display = "flex";
    blurEffect();
  }

  //Hide the window modal when clicked outside the modal window
  function hideModal() {
    modalContainer.addEventListener("click", (e) => {
      if (!e.target.closest(".window__content")) {
        modalContainer.style.display = "none";
        mainContainer.classList.remove("blur");
      }
    });
  }

  function blurEffect() {
    mainContainer.setAttribute("class", "blur");
  }
})();
