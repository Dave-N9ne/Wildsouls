function addNavMenu () {
    const button = document.querySelector('#header-burger');
    const nav = document.querySelector('#header-nav__list');
    const body = document.body;
    
    button.addEventListener ('click', function (event) {
        const elementsToActive = [button, nav];
        elementsToActive.forEach(toggleActiveClass);
        body.classList.toggle('lock');
    })
}

function toggleActiveClass (element) {
    element.classList.toggle('active');
}

addNavMenu ();