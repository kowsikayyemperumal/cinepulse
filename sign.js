document.getElementById('sign-up-form').addEventListener('submit', function (e) {
    e.preventDefault(); 
  
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const confirmPassword = document.getElementById('confirm-password').value.trim();
  

    if (!name || !email || !password || !confirmPassword) {
      alert('All fields are required!');
      return;
    }
  
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    alert('Sign-Up Successful!');
    
  });
  