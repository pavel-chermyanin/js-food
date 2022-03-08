function modal() {
    function openModal() {
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
        // clearTimeout(modalTimerId)
    }

    function showModalByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showModalByScroll)
        }
    }

    const modal = document.querySelector('.modal'),
        openModalBtn = document.querySelectorAll('[data-modal]');
    // closeModalBtn = document.querySelector('[data-close]');

    openModalBtn.forEach(item => {
        item.addEventListener('click', openModal);
    })

    // closeModalBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {
        if (e.target === modal || e.target.getAttribute('data-close') === '') {
            closeModal()
        }
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Escape' && modal.classList.contains('show')) {
            closeModal()
        }
    });

    // const modalTimerId = setTimeout(openModal, 3000);

    window.addEventListener('scroll', showModalByScroll)

}
 module.exports = modal;