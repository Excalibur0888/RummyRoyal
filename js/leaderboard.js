document.addEventListener('DOMContentLoaded', function() {
    // Tab switching functionality
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Show corresponding content
            const tabId = this.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Simulate loading data for monthly and all-time leaderboards
    const simulateDataLoading = () => {
        const comingSoonElements = document.querySelectorAll('.coming-soon');
        
        comingSoonElements.forEach(element => {
            const loadingText = document.createElement('div');
            loadingText.className = 'loading-text';
            loadingText.textContent = 'Loading data...';
            
            element.innerHTML = '';
            element.appendChild(loadingText);
            
            // Simulate loading delay
            setTimeout(() => {
                element.innerHTML = '<p>Data will be available soon. Please check back later!</p>';
            }, 2000);
        });
    };
    
    // Call the function when switching to those tabs
    document.querySelector('[data-tab="monthly"]').addEventListener('click', simulateDataLoading);
    document.querySelector('[data-tab="all-time"]').addEventListener('click', simulateDataLoading);
}); 