// =============================================
// SEWASEW ACADEMY - MAIN.JS
// Custom Cursor, Scroll Animations, Mobile Menu
// =============================================

document.addEventListener('DOMContentLoaded', function() {
    // Custom Cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');

    // Detect touch device
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (cursor && cursorFollower && !isTouchDevice && window.innerWidth > 768) {
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;

        document.addEventListener('mousemove', function(e) {
            mouseX = e.clientX;
            mouseY = e.clientY;

            // Immediate update for main cursor
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });

        // Smooth follower animation
        function animateCursor() {
            followerX += (mouseX - followerX) * 0.15;
            followerY += (mouseY - followerY) * 0.15;

            cursorFollower.style.left = followerX + 'px';
            cursorFollower.style.top = followerY + 'px';

            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Hover effects
        const hoverElements = document.querySelectorAll('a, button, .prog-card, .pillar, .learner-card, .format-item, .social-icon, input, textarea');
        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hover');
                cursorFollower.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hover');
                cursorFollower.classList.remove('hover');
            });
        });

        // Hide cursor when leaving window
        document.addEventListener('mouseleave', () => {
            cursor.style.opacity = '0';
            cursorFollower.style.opacity = '0';
        });

        document.addEventListener('mouseenter', () => {
            cursor.style.opacity = '1';
            cursorFollower.style.opacity = '1';
        });
    } else if (cursor && cursorFollower) {
        // Completely hide on mobile/touch devices
        cursor.style.display = 'none';
        cursorFollower.style.display = 'none';
    }

    // Header Scroll Effect
    const header = document.querySelector('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    const mobileMenuClose = document.querySelector('.mobile-menu-close');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('open');
            mobileMenu.classList.toggle('open');
            document.body.classList.toggle('mobile-menu-open');
        });

        // Close menu when clicking close button
        if (mobileMenuClose) {
            mobileMenuClose.addEventListener('click', function() {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                document.body.classList.remove('mobile-menu-open');
            });
        }

        // Close menu when clicking a link
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                document.body.classList.remove('mobile-menu-open');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (mobileMenu.classList.contains('open') &&
                !mobileMenu.contains(e.target) &&
                !hamburger.contains(e.target)) {
                hamburger.classList.remove('open');
                mobileMenu.classList.remove('open');
                document.body.classList.remove('mobile-menu-open');
            }
        });
    }

    // Scroll Animations
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form Handling (if contact form exists)
    const contactForm = document.querySelector('.contact-form');
    const formSuccess = document.querySelector('.form-success');

    if (contactForm && formSuccess) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Simulate form submission
            const submitBtn = contactForm.querySelector('.btn-submit');
            const originalText = submitBtn.innerHTML;

            submitBtn.innerHTML = '<span class="btn-text">Sending...</span>';
            submitBtn.disabled = true;

            setTimeout(() => {
                formSuccess.classList.add('show');
                contactForm.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;

                // Hide success message after 5 seconds
                setTimeout(() => {
                    formSuccess.classList.remove('show');
                }, 5000);
            }, 1500);
        });
    }

    // Active Nav Link
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (linkPath === currentPath || (currentPath === '/' && linkPath === '/index.html')) {
            link.classList.add('active');
        }
    });

    // Parallax Effect for Orbs
    const orbs = document.querySelectorAll('.orb');
    if (orbs.length > 0) {
        window.addEventListener('mousemove', function(e) {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;

            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 0.5;
                orb.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        });
    }

    // Stats Counter Animation
    const stats = document.querySelectorAll('.stat-num');
    const statsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const finalValue = target.textContent;
                const isPercentage = finalValue.includes('%');
                const isPlus = finalValue.includes('+');
                const numericValue = parseFloat(finalValue.replace(/[^0-9.]/g, ''));

                let current = 0;
                const increment = numericValue / 50;
                const duration = 1500;
                const stepTime = duration / 50;

                const counter = setInterval(() => {
                    current += increment;
                    if (current >= numericValue) {
                        current = numericValue;
                        clearInterval(counter);
                    }
                    let displayValue = current.toFixed(numericValue % 1 !== 0 ? 1 : 0);
                    if (isPercentage) displayValue += '%';
                    if (isPlus) displayValue += '+';
                    target.textContent = displayValue;
                }, stepTime);

                statsObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => statsObserver.observe(stat));

    // Resize Handler
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            // Show/hide custom cursor based on screen size and touch capability
            if (cursor && cursorFollower) {
                if (!isTouchDevice && window.innerWidth > 768) {
                    cursor.style.display = '';
                    cursorFollower.style.display = '';
                } else {
                    cursor.style.display = 'none';
                    cursorFollower.style.display = 'none';
                }
            }
        }, 250);
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('open')) {
            hamburger.classList.remove('open');
            mobileMenu.classList.remove('open');
            document.body.classList.remove('mobile-menu-open');
        }
    });

    // Console message for developers
    console.log('🎨 SewaSew Academy - Modern Dark Theme Loaded');
    console.log('✨ Built with professional design and smooth interactions');
    console.log('📱 Fully responsive and accessible');
});
