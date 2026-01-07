document.addEventListener('DOMContentLoaded', () => {
    
    let lastScrollTop = 0;
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } else {
            navbar.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });

    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
        menu.classList.toggle('open');
        menu.classList.toggle('hidden'); 
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('open');
            setTimeout(() => {
                menu.classList.add('hidden');
            }, 300);
        });
    });

    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 100;

        reveals.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll();

    window.openModal = function() {
        document.getElementById('privacy-modal').classList.remove('hidden');
    }

    window.closeModal = function() {
        document.getElementById('privacy-modal').classList.add('hidden');
    }
});