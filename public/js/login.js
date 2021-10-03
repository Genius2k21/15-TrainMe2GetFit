const userData = require('../../seeds/user-data.json')

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#pass').value.trim();

  
    if (username && password) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // If successful, redirect the browser to the profile page
        document.location.replace('/dashboard');
      } else {
        alert(response.statusText);
        //alert('Invalid User!, Please sign up to Login')
      }
    }
  };
  
  
  document
    .querySelector('.validate-form')
    .addEventListener('submit', loginFormHandler);
  

  