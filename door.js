(function() {
    const stageElem = document.querySelector('.stage');

    function doorHandler(e) {
        const targetElem = e.target;

        targetElem.parentNode.classList.add('door-opened');
    }

    stageElem.addEventListener('click', doorHandler);
})();