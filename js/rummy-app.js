document.addEventListener('DOMContentLoaded', function() {
    // FAQ accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        // Initially hide all answers
        answer.style.display = 'none';
        
        question.addEventListener('click', function() {
            // Toggle active class on the question
            this.classList.toggle('active');
            
            // Toggle the answer visibility
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
                question.classList.add('active');
            } else {
                answer.style.display = 'none';
                question.classList.remove('active');
            }
        });
    });
}); 