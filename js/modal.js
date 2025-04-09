const modal = document.querySelector(".backdrop");
// const modal = document.querySelector('.modal');
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");
const modalSortOpen = document.querySelector(".modal-sort-open");
const modalSortClose = document.querySelector(".modal-sort-close");

const toggleModal = () => modal.classList.toggle("is-hidden");

modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);
modalSortOpen.addEventListener("click", toggleModal);
modalSortClose.addEventListener("click", toggleModal);

// // // const modalSort = document.querySelector(".backdrop");
// // // // const modal = document.querySelector('.modal');
// // const modalSortOpen = document.querySelector(".modal-sort-open");
// // const modalSortClose = document.querySelector(".modal-sort-close");

// // const toggleModal2 = () => modalSort.classList.toggle("is-hidden");

// modalSortOpen.addEventListener("click", toggleModal);
// modalSortClose.addEventListener("click", toggleModal);
