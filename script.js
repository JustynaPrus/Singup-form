    const form = document.getElementById("form");

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const fname = document.getElementById("fname");
      const lname = document.getElementById("lname");
      const email = document.getElementById("email");
      const password = document.getElementById("password");

      const fnameValue = fname.value;
      const lnameValue = lname.value;
      const emailValue = email.value;
      const passwordValue = password.value;

      if(fnameValue === '') {
        error(fname, 'First Name cannot be empty');
      } else {
        removeError(fname);
      }

      if(lnameValue === '') {
        error(lname, 'Last Name cannot be empty');
      } else {
        removeError(lname);
      }
      
      if(emailValue === '') {
        error(email, 'Email Address cannot be empty');
      } else if (!validateEmail(email)){
        error(email, 'Looks like this is not an email');
      } else {
        removeError(email);
      } 

      if(passwordValue === '') {
        error(password, 'Password cannot be empty');
      } else {
        removeError(password);
      }
    });

    function error(input, message) {
      input.className = "error";

      const small = input.nextElementSibling;
      small.innerText = message;
      small.className = "error";

      const img = input.previousElementSibling;
      img.className = "icon error";

    }
    function removeError(input) {
      input.classList.remove("error");

      const small = input.nextElementSibling;
      small.classList.remove("error");

      const img = input.previousElementSibling;
      img.classList.remove("error");

    }

    function validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return re.test(String(email).toLowerCase());
  }
    