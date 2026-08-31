document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileOverlay = document.querySelector('.mobile-menu-overlay');
    const mobileClose = document.querySelector('.mobile-menu-close');

    function toggleMenu() {
        if(mobileMenu) mobileMenu.classList.toggle('active');
        if(mobileOverlay) mobileOverlay.classList.toggle('active');
        const isActive = mobileMenu && mobileMenu.classList.contains('active');
        document.body.style.overflow = isActive ? 'hidden' : '';
        document.documentElement.style.overflow = isActive ? 'hidden' : '';
    }

    if(mobileToggle) mobileToggle.addEventListener('click', toggleMenu);
    if(mobileClose) mobileClose.addEventListener('click', toggleMenu);
    if(mobileOverlay) mobileOverlay.addEventListener('click', toggleMenu);

    // 2. Sticky Navbar on Scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    // 3. Scroll Reveal Animations (Intersection Observer)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        revealOnScroll.observe(el);
    });

    // 4. Animated Counters
    const counters = document.querySelectorAll('.counter-value');
    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const endValue = parseFloat(target.getAttribute('data-target'));
                const duration = 2000;
                let startTime = null;

                const step = (currentTime) => {
                    if (!startTime) startTime = currentTime;
                    const progress = Math.min((currentTime - startTime) / duration, 1);
                    
                    // Easing function (easeOutQuart)
                    const easeProgress = 1 - Math.pow(1 - progress, 4);
                    const currentVal = (easeProgress * endValue);
                    
                    // Format output
                    if (Number.isInteger(endValue)) {
                        target.innerText = Math.floor(currentVal);
                    } else {
                        target.innerText = currentVal.toFixed(1);
                    }

                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    } else {
                        target.innerText = endValue;
                    }
                };
                window.requestAnimationFrame(step);
                observer.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });

});
