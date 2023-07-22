(() => {
  const refs = {
    openModalBtn: document.querySelector(".data-modal-open"),
    closeModalBtn: document.querySelector(".data-modal-close"), 
    modal: document.querySelector(".data-modal"),
    modalSection: document.querySelector(".modal-section")
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    /* refs.modal.classList.toggle("is-hidden"); */
    refs.modal.classList.toggle("modal");
    refs.modalSection.classList.toggle("modal2")
  }
})();