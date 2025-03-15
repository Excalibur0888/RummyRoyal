document.addEventListener('DOMContentLoaded', function() {
    // Form input focus effects
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');
    
    formInputs.forEach(input => {
        // Add focus class to parent when input is focused
        input.addEventListener('focus', function() {
            this.closest('.form-group').classList.add('focused');
        });
        
        // Remove focus class when input loses focus
        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.closest('.form-group').classList.remove('focused');
            }
        });
        
        // Check if input already has value on page load
        if (input.value !== '') {
            input.closest('.form-group').classList.add('focused');
        }
    });
    
}); 