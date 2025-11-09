<script>
  // Element references
  const studentRadio = document.getElementById('student');
  const staffRadio = document.getElementById('staff');
  const studentFields = document.getElementById('studentFields');
  const staffFields = document.getElementById('staffFields');
  const studentExtras = document.getElementById('studentExtras'); // Google + Register section

  // Toggle fields and extras based on role
  studentRadio.addEventListener('change', toggleFields);
  staffRadio.addEventListener('change', toggleFields);

  function toggleFields() {
    if (studentRadio.checked) {
      studentFields.style.display = 'block';
      staffFields.style.display = 'none';
      studentExtras.style.display = 'block'; // show Google + register
    } else {
      studentFields.style.display = 'none';
      staffFields.style.display = 'block';
      studentExtras.style.display = 'none'; // hide for staff
    }
  }

  // Show password toggles
  document.getElementById('showStudentPassword').addEventListener('change', function() {
    document.getElementById('studentPassword').type = this.checked ? 'text' : 'password';
  });
  document.getElementById('showStaffPassword').addEventListener('change', function() {
    document.getElementById('staffPassword').type = this.checked ? 'text' : 'password';
  });

  // ✅ Corrected validation & redirection logic
  function validateForm(event) {
    event.preventDefault(); // stop the form from submitting to Home.html

    const role = document.querySelector('input[name="role"]:checked').value;

    if (role === 'student') {
      const username = document.getElementById('username').value.trim();
      const password = document.getElementById('studentPassword').value.trim();

      if (!username || !password) {
        alert('Please enter both username and password for student login.');
        return false;
      }

      // ✅ Redirect to student home page
      window.location.href = "Home.html";
      return false;

    } else if (role === 'staff') {
      const staffCode = document.getElementById('staffCode').value.trim();
      const password = document.getElementById('staffPassword').value.trim();

      if (!staffCode || !password) {
        alert('Please enter both staff code and password for staff login.');
        return false;
      }

      // ✅ Redirect to staff dashboard page (different folder)
      window.location.href = "../../Admin/Code/Dashboard.html";
      return false;
    }

    return false;
  }

  // Attach manually to prevent default form action
  document.getElementById("loginForm").addEventListener("submit", validateForm);
</script>
