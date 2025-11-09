
  const studentRadio = document.getElementById('student');
  const staffRadio = document.getElementById('staff');
  const studentFields = document.getElementById('studentFields');
  const staffFields = document.getElementById('staffFields');

  studentRadio.addEventListener('change', () => {
    if (studentRadio.checked) {
      studentFields.style.display = 'block';
      staffFields.style.display = 'none';
    }
  });

  staffRadio.addEventListener('change', () => {
    if (staffRadio.checked) {
      studentFields.style.display = 'none';
      staffFields.style.display = 'block';
    }
  });

  // Show/hide passwords
  document.getElementById('showStudentPassword').addEventListener('change', function () {
    const pwd = document.getElementById('studentPassword');
    pwd.type = this.checked ? 'text' : 'password';
  });

  document.getElementById('showStaffPassword').addEventListener('change', function () {
    const pwd = document.getElementById('staffPassword');
    pwd.type = this.checked ? 'text' : 'password';
  });


