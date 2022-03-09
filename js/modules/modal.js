function openModal(modalSelector) {
    const modal = document.querySelector(modalSelector)
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
}

function closeModal(modalSelector, modalTimerId) {
    const modal = document.querySelector(modalSelector);
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    console.log(modalTimerId);
    if (modalTimerId) {
        clearTimeout(modalTimerId)
    }
}

function modal(triggerSelector, modalSelector, modalTimerId) {


    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal(modalSelector, modalTimerId);
            window.removeEventListener('scroll', showModalByScroll)
        }
    }

    const modal = document.querySelector(modalSelector),
        openModalBtn = document.querySelectorAll(triggerSelector);
    // closeModalBtn = document.querySelector('[data-close]');

    openModalBtn.forEach(item => {
        item.addEventListener('click',() => openModal(modalSelector, modalTimerId));
    })

    // closeModalBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') === '') {
            closeModal(modalSelector)
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal(modalSelector)
        }
    });


    window.addEventListener('scroll', showModalByScroll)

}
export default modal;

export { closeModal };
export { openModal };