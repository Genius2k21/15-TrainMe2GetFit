
  const signupFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector('#name').value.trim();
    const email = document.querySelector('#email').value.trim();
    const username = document.querySelector('#username').value.trim();
    const password = document.querySelector('#pass').value.trim();
    const repeatPassword = document.querySelector('#repeat-pass').value.trim();

  
    if (name && email && username && password && repeatPassword ) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ name, email, username, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('response.statusText');
       // alert('User already exists');
      }
    }
  };
  
  
  document
    .querySelector('.validate-form')
    .addEventListener('submit', signupFormHandler);
  