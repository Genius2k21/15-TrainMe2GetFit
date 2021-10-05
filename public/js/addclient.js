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
            const firstName = document.querySelector('#first_name');
            const lastName = document.querySelector('#last_name');
            const email = document.querySelector('#email');
            const phone = document.querySelector('#phone');
            const streetAddress1 = document.querySelector('#address_line_1');
            const streetAddress2 = document.querySelector('#address_line_2');
            const city = document.querySelector('#city');
            const state = document.querySelector('#state');
            const zipcode = document.querySelector('#zipcode');
            const gender = $('form input[type=radio]:checked').val();
            const height_ft = document.querySelector('#height_ft');
            const height_in = document.querySelector('#height_in');
            const weight = document.querySelector('#weight');
            const goal_weight = document.querySelector('#goal_weight');
            const shoulder = document.querySelector('#shoulder');
            const chest = document.querySelector('#chest');
            const waist = document.querySelector('#waist');
            const hips = document.querySelector('#hips');
            const left_thigh = document.querySelector('#left_thigh');
            const right_thigh = document.querySelector('#right_thigh');
            const left_calf = document.querySelector('#left_calf');
            const right_calf = document.querySelector('#right_calf');

            console.log(`what is the event? ${event}`)

            if(currentIndex === 0){
                let flag = true;
                if(firstName.value === ''){
                    console.log('First name is required');
                    firstName.classList.add('required');
                    flag = false;
                }
                if(lastName.value === ''){
                    console.log('Last name is required');
                    lastName.classList.add('required');
                    flag = false;
                }
                if(email.value === ''){
                    console.log('email is required');
                    email.classList.add('required');
                    flag = false;
                }
                if(phone.value === ''){
                    console.log('phone is required');
                    phone.classList.add('required');
                    flag = false;
                }

                return flag;
            }
           
            if(currentIndex === 1){
                if(weight.value === ''){
                    console.log('weight is required');
                    return false;
                }
                if(goal_weight.value === ''){
                    console.log('goal_weight is required');
                    return false;
                }
            }

            const fullname = firstName.value.trim()+' '+lastName.value.trim();

            $('#fullname-val').text(fullname);
            $('#email-val').text(email.value.trim());
            $('#phone-val').text(phone.value.trim());
            $('#gender-val').text(gender);
            $('#weight-val').text(weight.value.trim());
            $('#goal-weight-val').text(goal_weight.value.trim());

            return true;      
        },
        onFinish: function(event){
            event.preventDefault();
            console.log('does this fire?');
        },
        onclose: function(event){
            event.preventDefault();
            console.log('onclose?? does it fire?');
        },
    });
});

// const onSubmit = async (event) => {
//     event.preventDefault();
//     console.log(event.target);
//     console.log('how does this fire');
// }

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
  

