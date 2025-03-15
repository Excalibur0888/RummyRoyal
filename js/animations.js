document.addEventListener('DOMContentLoaded', function() {
    // Initialize scroll animations
    initScrollAnimations();
    
    // Add animation classes to elements
    addAnimationClasses();
    
    // Initialize card animations
    initCardAnimations();
});

// Function to initialize scroll animations
function initScrollAnimations() {
    const scrollElements = document.querySelectorAll('.scroll-animate');
    
    // Check if element is in viewport
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    };
    
    // Add visible class to elements in viewport
    const displayScrollElement = (element) => {
        element.classList.add('visible');
    };
    
    // Hide elements not in viewport
    const hideScrollElement = (element) => {
        element.classList.remove('visible');
    };
    
    // Check all elements on scroll
    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            if (isElementInViewport(el)) {
                displayScrollElement(el);
            } else {
                hideScrollElement(el);
            }
        });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Check elements on initial load
    handleScrollAnimation();
}

// Function to add animation classes to elements
function addAnimationClasses() {
    // Add scroll-animate classes to elements
    const featureCards = document.querySelectorAll('.feature-card');
    const benefitColumns = document.querySelectorAll('.benefit-column');
    const variantCards = document.querySelectorAll('.variant-card');
    const testimonials = document.querySelectorAll('.testimonial');
    const tipCards = document.querySelectorAll('.tip-card');
    
    // Add animation classes with different directions and delays
    featureCards.forEach((card, index) => {
        card.classList.add('scroll-animate');
        if (index % 2 === 0) {
            card.classList.add('from-left');
        } else {
            card.classList.add('from-right');
        }
        card.style.transitionDelay = `${0.1 * index}s`;
    });
    
    benefitColumns.forEach((column, index) => {
        column.classList.add('scroll-animate', 'from-bottom');
        column.style.transitionDelay = `${0.1 * index}s`;
    });
    
    variantCards.forEach((card, index) => {
        card.classList.add('scroll-animate', 'scale');
        card.style.transitionDelay = `${0.1 * index}s`;
    });
    
    testimonials.forEach((testimonial, index) => {
        testimonial.classList.add('scroll-animate', 'from-bottom');
        testimonial.style.transitionDelay = `${0.1 * index}s`;
    });
    
    tipCards.forEach((card, index) => {
        card.classList.add('scroll-animate');
        if (index % 3 === 0) {
            card.classList.add('from-left');
        } else if (index % 3 === 1) {
            card.classList.add('from-bottom');
        } else {
            card.classList.add('from-right');
        }
        card.style.transitionDelay = `${0.1 * index}s`;
    });
    
    // Add hover animation classes
    const hoverElements = document.querySelectorAll('.feature-card, .benefit-column, .variant-card');
    hoverElements.forEach((el, index) => {
        if (index % 4 === 0) {
            el.classList.add('hover-float');
        } else if (index % 4 === 1) {
            el.classList.add('hover-glow');
        } else if (index % 4 === 2) {
            el.classList.add('hover-pulse');
        } else {
            el.classList.add('hover-shake');
        }
    });
}

// Function to initialize card animations
function initCardAnimations() {
    // Add staggered animations to cards
    const animateCards = (selector, delay = 0.1) => {
        const cards = document.querySelectorAll(selector);
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('visible');
            }, delay * 1000 * index);
        });
    };
    
    // Animate different card types
    animateCards('.feature-card', 0.15);
    animateCards('.benefit-column', 0.2);
    animateCards('.variant-card', 0.15);
    animateCards('.testimonial', 0.2);
    animateCards('.tip-card', 0.15);
    
    // Add parallax effect to hero section
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrollPosition = window.pageYOffset;
            const heroContent = document.querySelector('.hero-content');
            const heroImage = document.querySelector('.hero-image');
            
            if (heroContent && heroImage) {
                heroContent.style.transform = `translateY(${scrollPosition * 0.1}px)`;
                heroImage.style.transform = `translateY(${scrollPosition * 0.05}px)`;
            }
        });
    }
    
    // Add typing animation to hero title
    const heroTitle = document.querySelector('.hero-content h2');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(() => {
            typeWriter();
        }, 500);
    }
}

// Function to add number counter animation
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    const updateCounter = () => {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
}

// Initialize number counters when they come into view
document.addEventListener('scroll', function() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const rect = counter.getBoundingClientRect();
        if (rect.top <= window.innerHeight && !counter.classList.contains('counted')) {
            counter.classList.add('counted');
            animateCounter(counter, parseInt(counter.getAttribute('data-target')));
        }
    });
}); 