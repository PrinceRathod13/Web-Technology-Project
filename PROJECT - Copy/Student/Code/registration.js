// register.js
<script type="text/javascript">
document.getElementById('registrationForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission for validation

  // Clear previous errors
  const errorFields = document.querySelectorAll('.error-message');
  errorFields.forEach(field => field.textContent = '');

  let valid = true;

  // Field values
  const name = document.getElementById('name').value.trim();
  const enrollment = document.getElementById('enrollment').value.trim();
  const email = document.getElementById('email').value.trim();
  const contact = document.getElementById('contact').value.trim();
  const password = document.getElementById('password').value.trim();
  const confirmPassword = document.getElementById('confirmPassword').value.trim();

  // Regular expressions
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const contactPattern = /^[0-9]{10}$/;

  // Validation rules
  if (name === '') {
    showError('name', 'Full Name is required.');
    valid = false;
  }

  if (enrollment === '') {
    showError('enrollment', 'Enrollment number is required.');
    valid = false;
  }

  if (email === '') {
    showError('email', 'Email is required.');
    valid = false;
  } else if (!emailPattern.test(email)) {
    showError('email', 'Please enter a valid email address.');
    valid = false;
  }

  if (contact === '') {
    showError('contact', 'Contact number is required.');
    valid = false;
  } else if (!contactPattern.test(contact)) {
    showError('contact', 'Contact number must be 10 digits.');
    valid = false;
  }

  if (password === '') {
    showError('password', 'Password is required.');
    valid = false;
  } else if (password.length < 6) {
    showError('password', 'Password must be at least 6 characters.');
    valid = false;
  }

  if (confirmPassword === '') {
    showError('confirmPassword', 'Please confirm your password.');
    valid = false;
  } else if (confirmPassword !== password) {
    showError('confirmPassword', 'Passwords do not match.');
    valid = false;
  }

  // If all validations pass, allow form submission
  if (valid) {
    this.submit();
  }
});

// Function to display error message below input
function showError(fieldId, message) {
  document.getElementById(`error-${fieldId}`).textContent = message;
}
</script>