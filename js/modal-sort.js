const modalSort = document.querySelector(".backdrop");
// const modal = document.querySelector('.modal');
const modalSortOpen = document.querySelector(".modal-sort-open");
const modalSortClose = document.querySelector(".modal-sort-close");

const toggleModal = () => modalSort.classList.toggle("is-hidden");

modalSortOpen.addEventListener("click", toggleModal);
modalSortClose.addEventListener("click", toggleModal);
