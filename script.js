document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('main-nav');

    if (!toggle || !nav) return;

    toggle.addEventListener('click', function () {
        var isOpen = nav.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', isOpen);
        toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });

    nav.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
            toggle.setAttribute('aria-label', 'Open menu');
        });
    });
});
