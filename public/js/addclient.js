debugger

/**
 * Out of the box function for wizard functionality
 */
$(function(){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Back',
            next : '<i class="zmdi zmdi-chevron-right"></i>',
            finish : '<i class="zmdi zmdi-chevron-right"></i>',
            current : ''
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
            event.preventDefault();
            const firstName = $('#first_name').val() 
            const lastName = $('#last_name').val();
            const email = $('#email').val();
            const phone = $('#phone').val();
            const streetAddress1 = $('#address_line_1').val();
            const streetAddress2 = $('#address_line_2').val();
            const city = $('#city').val();
            const state = $('#state').val();
            const zipcode = $('#zipcode').val();
            const gender = $('form input[type=radio]:checked').val();
            const height_ft = $('#height_ft').val();
            const height_in = $('#height_in').val();
            const weight = $('#weight').val();
            const goal_weight = $('#goal_weight').val();
            const shoulder = $('#shoulder').val();
            const chest = $('#chest').val();
            const waist = $('#waist').val();
            const hips = $('#hips').val();
            const left_thigh = $('#left_thigh').val();
            const right_thigh = $('#right_thigh').val();
            const left_calf = $('#left_calf').val();
            const right_calf = $('#right_calf').val();

            const fullname = firstName+' '+lastName;

            $('#fullname-val').text(fullname);
            $('#email-val').text(email);
            $('#phone-val').text(phone);
            $('#gender-val').text(gender);
            $('#weight-val').text(weight);
            $('#goal-weight-val').text(goal_weight);

            return true;      
        },
        onsubmit: function(event, currentIndex, newIndex){
            event.preventDefault();
            console.log('does this fire?')
        }
    });
});



const addClientHandler = async (event) => {
    // Stop the browser from submitting the form so we can do so with JavaScript
    event.preventDefault();
  
    // Gather the data from the form elements on the page
    
    if (email && phone && firstName && lastName && gender) {
      // Send the e-mail and password to the server
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to log in');
      }
    }
  };
  
//   document
//     .querySelector('.form-register')
//     .addEventListener('submit', loginFormHandler);
  

