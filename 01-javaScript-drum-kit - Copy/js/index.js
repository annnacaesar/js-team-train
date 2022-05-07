const listRef = document.querySelector(".key__list");
const listItems = document.querySelectorAll(".key__item");
// listRef.addEventListener("click", onBtnClick);

listItems.forEach((item) => item.addEventListener("click", onBtnClick));
function onBtnClick(event) {
  //   console.log(event.currentTarget.dataset.key);
  const code = event.currentTarget.dataset.key;
  //   const audio = document.querySelector(`audio[data-key='${code}']`);
  playSound(code, event.currentTarget);
  //   if (!audio) return;
  //   audio.currentTime = 0;
  //   audio.play();
  //   event.currentTarget.classList.add("playing");
}
listItems.forEach((item) =>
  item.addEventListener("transitionend", removeTransition)
);
function removeTransition(event) {
  if (event.propertyName !== "transform") return;
  this.classList.remove("playing");
}
window.addEventListener("keydown", onBtnPress);

function onBtnPress(event) {
  const code = event.keyCode;
  //   const audio = document.querySelector(`audio[data-key='${code}']`);
  const key = document.querySelector(`.key__item[data-key='${code}']`);
  playSound(code, key);
  //   if (!audio) return;
  //   audio.currentTime = 0;
  //   audio.play();
  //   key.classList.add("playing");
}
function playSound(code, item) {
  const audio = document.querySelector(`audio[data-key='${code}']`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  item.classList.add("playing");
}
