const button = document.querySelector('.btn');
const popup = document.querySelector('.popupwrapper');
const close = document.querySelector('.popcancel');



button.addEventListener('click', () => {
    popup.style.display = 'block';
});

close.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", () => {
  popup.style.display = "none";
});