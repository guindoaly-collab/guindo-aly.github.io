document.addEventListener('DOMContentLoaded', () => {
    // 1. GESTION DU MENU MOBILE (BURGER)
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener('click', () => {
            const isExpanded = mobileMenu.getAttribute('aria-expanded') === 'true';
            navLinks.classList.toggle('active', !isExpanded);
            mobileMenu.setAttribute('aria-expanded', String(!isExpanded));
            mobileMenu.setAttribute('aria-label', isExpanded ? 'Ouvrir le menu' : 'Fermer le menu');

            const icon = mobileMenu.querySelector('i');
            if (!isExpanded) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Ferme le menu automatiquement quand on clique sur un lien de navigation
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileMenu.setAttribute('aria-expanded', 'false');
                mobileMenu.setAttribute('aria-label', 'Ouvrir le menu');
                const icon = mobileMenu.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-xmark');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

});