// Simple JavaScript for form submission handling or animation
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for signing up!');
    });
});

