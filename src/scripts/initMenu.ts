function initMenu() {
    const burger = document.querySelector('.burger');
    const header = document.querySelector('.header');
    burger.addEventListener('click', () => {
        burger.classList.toggle('burger_active');
        header.classList.toggle('active');
    });
};

export default initMenu;