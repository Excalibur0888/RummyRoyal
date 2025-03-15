document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const createMobileNav = () => {
        const header = document.querySelector('header');
        if (!header) return;

        // Check if mobile nav already exists
        if (document.querySelector('.mobile-nav-toggle')) return;

        // Create mobile nav toggle button
        const mobileNavToggle = document.createElement('button');
        mobileNavToggle.className = 'mobile-nav-toggle';
        mobileNavToggle.innerHTML = '<span></span><span></span><span></span>';
        
        // Insert before the nav
        const nav = header.querySelector('nav');
        if (nav) {
            header.querySelector('.container').insertBefore(mobileNavToggle, nav);
            
            // Add event listener
            mobileNavToggle.addEventListener('click', function() {
                this.classList.toggle('active');
                nav.classList.toggle('active');
            });
        }
    };

    // Initialize mobile nav
    createMobileNav();
    
    // Add CSS for mobile nav
    const addMobileNavStyles = () => {
        if (document.getElementById('mobile-nav-styles')) return;
        
        const style = document.createElement('style');
        style.id = 'mobile-nav-styles';
        style.textContent = `
            @media (max-width: 768px) {
                nav {
                    display: none;
                }
                
                nav.active {
                    display: block;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
                    color: white;
                    box-shadow: 0 5px 10px rgba(0,0,0,0.3);
                    z-index: 100;
                }
                
                nav.active ul {
                    flex-direction: column;
                    padding: 20px;
                }
                
                nav.active ul li {
                    margin: 10px 0;
                }
                
                nav.active ul li a {
                    color: white;
                }
                
                .mobile-nav-toggle {
                    display: block;
                    background: none;
                    border: none;
                    cursor: pointer;
                    padding: 10px;
                }
                
                .mobile-nav-toggle span {
                    display: block;
                    width: 25px;
                    height: 3px;
                    background-color: white;
                    margin: 5px 0;
                    transition: all 0.3s ease;
                }
                
                .mobile-nav-toggle.active span:nth-child(1) {
                    transform: rotate(45deg) translate(5px, 5px);
                }
                
                .mobile-nav-toggle.active span:nth-child(2) {
                    opacity: 0;
                }
                
                .mobile-nav-toggle.active span:nth-child(3) {
                    transform: rotate(-45deg) translate(7px, -7px);
                }
            }
            
            @media (min-width: 769px) {
                .mobile-nav-toggle {
                    display: none;
                }
            }
        `;
        
        document.head.appendChild(style);
    };
    
    // Add mobile nav styles
    addMobileNavStyles();
    
    // Simple testimonial slider
    const initTestimonialSlider = () => {
        const slider = document.querySelector('.testimonial-slider');
        if (!slider) return;
        
        // Auto scroll functionality
        let scrollPosition = 0;
        const testimonials = slider.querySelectorAll('.testimonial');
        const testimonialWidth = testimonials[0].offsetWidth + 30; // width + gap
        
        setInterval(() => {
            scrollPosition += testimonialWidth;
            
            // Reset when reaching the end
            if (scrollPosition >= slider.scrollWidth - slider.offsetWidth) {
                scrollPosition = 0;
            }
            
            slider.scrollTo({
                left: scrollPosition,
                behavior: 'smooth'
            });
        }, 5000);
    };
    
    // Initialize testimonial slider
    initTestimonialSlider();
    
    // Smooth scrolling for anchor links
    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (!targetElement) return;
                
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            });
        });
    };
    
    // Initialize smooth scroll
    initSmoothScroll();
    
    // Add active class to current page in navigation
    const setActiveNavLink = () => {
        const currentPage = window.location.pathname.split('/').pop();
        
        document.querySelectorAll('nav a').forEach(link => {
            const linkPage = link.getAttribute('href');
            
            if (linkPage === currentPage || 
                (currentPage === '' && linkPage === '/')) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    };
    
    // Set active nav link
    setActiveNavLink();
}); 