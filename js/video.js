//video.js
const videoContainer = document.querySelector(".video-container");
// const videoBack = videoContainer.querySelector(".video__container-back");
const video = videoContainer.querySelector("video");
const playButton = videoContainer.querySelector(".play-button");

playButton.addEventListener("click", () => {
  videoContainer.classList.toggle("playing"); // Переключаем класс 'playing'
  // videoBack.classList.remove("video__container-back--show");
  // videoBack.classList.remove("video__container-back--hide");
  // video.pause();
  //Логика почему-то , обратная моей hide - show. но так орабатывает правильно
  //Т.к. состояние play/paused остается от прошлого раза
  if (video.paused) {
    video.play();
    // videoBack.classList.add("video__container-back--hide");
  } else {
    video.pause();
    //   videoBack.classList.add("video__container-back--show");
  }
});
