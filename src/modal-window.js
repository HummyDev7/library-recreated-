const modalWindow = (function () {
  let bgBlurContainer = document.querySelector(".blur");
  let addBookBtn = document.querySelector(".add__btn");

  addBookBtn.addEventListener("click", blurBg);

  function blurBg() {
    bgBlurContainer.classList.add("bg__blur");
    console.log("Clicked");
  }

  
})();
