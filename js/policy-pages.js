document.addEventListener('DOMContentLoaded', function() {
    // Initialize policy page animations
    initPolicyAnimations();
    
    // Initialize contact form animations
    initContactFormAnimations();
    
    // Initialize FAQ animations
    initFaqAnimations();
    
    // Initialize thanks page animations
    initThanksPageAnimations();
    
    // Check for elements on scroll
    window.addEventListener('scroll', function() {
        initPolicyAnimations();
        initContactFormAnimations();
        initFaqAnimations();
    });
});

// Function to initialize policy page animations
function initPolicyAnimations() {
    const policySections = document.querySelectorAll('.policy-section');
    const policyCta = document.querySelector('.policy-cta');
    
    // Check if element is in viewport
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    };
    
    // Add visible class to elements in viewport
    const handleScrollAnimation = () => {
        policySections.forEach((section) => {
            if (isElementInViewport(section)) {
                section.classList.add('visible');
            }
        });
        
        if (policyCta && isElementInViewport(policyCta)) {
            policyCta.classList.add('visible');
        }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Check elements on initial load
    setTimeout(() => {
        handleScrollAnimation();
    }, 300);
}

// Function to initialize contact form animations
function initContactFormAnimations() {
    const contactGrid = document.querySelector('.contact-grid');
    const formGroups = document.querySelectorAll('.form-group');
    const faqItems = document.querySelectorAll('.faq-item');
    const mapContainer = document.querySelector('.map-container');
    
    // Check if element is in viewport
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85 &&
            rect.bottom >= 0
        );
    };
    
    // Add visible class to elements in viewport
    const handleScrollAnimation = () => {
        if (contactGrid && isElementInViewport(contactGrid)) {
            contactGrid.classList.add('visible');
            
            // Add visible class to form groups with delay
            formGroups.forEach((group, index) => {
                setTimeout(() => {
                    group.classList.add('visible');
                }, 100 * index);
            });
        }
        
        faqItems.forEach((item) => {
            if (isElementInViewport(item)) {
                item.classList.add('visible');
            }
        });
        
        if (mapContainer && isElementInViewport(mapContainer)) {
            mapContainer.classList.add('visible');
        }
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
    
    // Check elements on initial load
    setTimeout(() => {
        handleScrollAnimation();
    }, 300);
}

// Function to initialize FAQ animations
function initFaqAnimations() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach((item) => {
        const question = item.querySelector('h3');
        const answer = item.querySelector('p');
        
        // Проверяем, что элементы существуют и еще не инициализированы
        if (question && answer && !question.hasAttribute('data-initialized')) {
            // Отмечаем, что элемент уже инициализирован
            question.setAttribute('data-initialized', 'true');
            
            // Initially hide answers
            answer.style.display = 'none';
            
            // Add click event to questions
            question.addEventListener('click', function(e) {
                // Prevent event bubbling
                e.stopPropagation();
                
                // Toggle active class
                this.classList.toggle('active');
                
                // Toggle answer visibility
                if (answer.style.display === 'none') {
                    answer.style.display = 'block';
                    
                    // Add animation to answer
                    answer.style.opacity = '0';
                    answer.style.transform = 'translateY(10px)';
                    
                    // Use requestAnimationFrame to ensure the display change has taken effect
                    requestAnimationFrame(() => {
                        answer.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                        answer.style.opacity = '1';
                        answer.style.transform = 'translateY(0)';
                    });
                } else {
                    // Hide answer with animation
                    answer.style.opacity = '0';
                    answer.style.transform = 'translateY(10px)';
                    
                    // Wait for animation to complete before hiding
                    setTimeout(() => {
                        answer.style.display = 'none';
                        question.classList.remove('active');
                    }, 300);
                }
            });
        }
    });
}

// Initialize animations for thanks page
function initThanksPageAnimations() {
    const thanksContainer = document.querySelector('.thanks-container');
    const faqSection = document.querySelector('.faq-section');
    
    if (thanksContainer) {
        // Add visible class with a slight delay for a better entrance effect
        setTimeout(() => {
            thanksContainer.classList.add('visible');
        }, 300);
    }
    
    if (faqSection) {
        setTimeout(() => {
            faqSection.classList.add('visible');
        }, 800);
    }
} 