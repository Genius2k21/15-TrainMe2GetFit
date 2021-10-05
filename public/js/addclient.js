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
            const firstNameEl = document.querySelector('#first_name');
            const lastNameEl = document.querySelector('#last_name');
            const emailEl = document.querySelector('#email');
            const phoneEl = document.querySelector('#phone');
            const birthdateEl = document.querySelector('#birthdate');
            const streetAddress1El = document.querySelector('#address_line_1');
            const streetAddress2El = document.querySelector('#address_line_2');
            const cityEl = document.querySelector('#city');
            const stateEl = document.querySelector('#state');
            const zipcodeEl = document.querySelector('#zipcode');
            const genderEl = $('form input[type=radio]:checked').val();
            const height_ftEl = document.querySelector('#height_ft');
            const height_inEl = document.querySelector('#height_in');
            const weightEl = document.querySelector('#weight');
            const goal_weightEl = document.querySelector('#goal_weight');
            const shoulderEl = document.querySelector('#shoulder');
            const chestEl = document.querySelector('#chest');
            const waistEl = document.querySelector('#waist');
            const hipsEl = document.querySelector('#hips');
            const left_thighEl = document.querySelector('#left_thigh');
            const right_thighEl = document.querySelector('#right_thigh');
            const left_calfEl = document.querySelector('#left_calf');
            const right_calfEl = document.querySelector('#right_calf');

            console.log(`what is the event? ${event}`)

            if(currentIndex === 0){
                let flag = true;
                if(firstNameEl.value === ''){
                    console.log('First name is required');
                    firstNameEl.classList.add('required');
                    flag = false;
                }
                if(lastNameEl.value === ''){
                    console.log('Last name is required');
                    lastNameEl.classList.add('required');
                    flag = false;
                }
                if(birthdateEl.value === ''){
                    birthdateEl.classList.add('required');
                    flag = false;
                }
                if(emailEl.value === ''){
                    console.log('email is required');
                    emailEl.classList.add('required');
                    flag = false;
                }
                if(phoneEl.value === ''){
                    console.log('phone is required');
                    phoneEl.classList.add('required');
                    flag = false;
                }
                return flag;
            }
           
            if(currentIndex === 1){
                let flag = true;
                if(weightEl.value === ''){
                    console.log('weight is required');
                    weightEl.classList.add('required');
                    flag = false;
                }
                if(goal_weightEl.value === ''){
                    console.log('goal_weight is required');
                    weightEl.classList.add('required');
                    flag = false;
                }
                if(flag === false){
                    return flag;
                }
                //else no reason to stop execution
            }
            debugger
            const fullname = firstNameEl.value.trim()+' '+lastNameEl.value.trim();

            $('#fullname-val').text(fullname);
            $('#email-val').text(emailEl.value.trim());
            $('#phone-val').text(phoneEl.value.trim());
            $('#gender-val').text(genderEl);
            $('#weight-val').text(weightEl.value.trim());
            $('#goal-weight-val').text(goal_weightEl.value.trim());
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
  

