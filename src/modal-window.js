const modalWindow = (function () {
  let addButton = document.querySelector(".add__btn");
  let modalContainer = document.querySelector(".modal__window");

  addButton.addEventListener("click", showModal);
  document.addEventListener("click", hideModal);

  function showModal() {
    modalContainer.style.display = "flex";
  }

  function hideModal() {
    modalContainer.addEventListener("click", (e) => {
      if (!e.target.closest(".window__content")) {
        modalContainer.style.display = "none";
      }
    });
  }
})();
