// School Activities Signup JS
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('signupForm');
    const resultDiv = document.getElementById('signupResult');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('studentName').value.trim();
            const activity = document.getElementById('activity').value;
            if (!name || !activity) {
                resultDiv.textContent = 'Please enter your name and select an activity.';
                resultDiv.style.color = '#d32f2f';
                return;
            }
            resultDiv.textContent = `Thank you, ${name}! You have signed up for ${activity}.`;
            resultDiv.style.color = '#32CD32';
            form.reset();
        });
    }
});
