
const submitNewClient = async (event) => {
    event.preventDefault();

    if ( event.target.type === 'submit') {
        
        const firstname = document.querySelector('#first_name').value.trim();
        const lastname = document.querySelector('#last_name').value.trim();
        const email = document.querySelector('#email').value.trim();
        const phone = document.querySelector('#phone').value.trim();
        const dateofbirth = document.querySelector('#birthdate').value.trim();
        const addressline1 = document.querySelector('#address_line_1').value.trim();
        const addressline2 = document.querySelector('#address_line_2').value.trim();
        const city = document.querySelector('#city').value.trim();
        const state = document.querySelector('#state').value.trim();
        const zip = document.querySelector('#zipcode').value.trim();
        const gender = $('form input[type=radio]:checked').val();
        
        
        // Should be able to send data, hardcoded userId which should come from session
        const response = await fetch(`/api/client/clientprofile/5`, {
            method: 'POST',
            body: JSON.stringify({firstname, lastname, dateofbirth, gender, email, phone, addressline1, addressline2, city, state, zip}),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok){
            alert('Client Added')
        
            const height_ftEl = document.querySelector('#height_ft').value.trim();
            const height_inEl = document.querySelector('#height_in').value.trim();
            const height = parseInt(height_inEl) + (parseInt(height_ftEl) * 12);

            const weight = document.querySelector('#weight').value.trim();
            const goal_weight = document.querySelector('#goal_weight').value.trim();
            const shoulders = document.querySelector('#shoulder').value.trim();
            const chest = document.querySelector('#chest').value.trim();
            const waist = document.querySelector('#waist').value.trim();
            const hips = document.querySelector('#hips').value.trim();
            const left_thigh = document.querySelector('#left_thigh').value.trim();
            const right_thigh = document.querySelector('#right_thigh').value.trim();
            const left_calf = document.querySelector('#left_calf').value.trim();
            const right_calf = document.querySelector('#right_calf').value.trim();

               // Should be able to send data, hardcoded userId which should come from session
            const response = await fetch(`/api/client/clientprofile/5`, {
                method: 'POST',
                body: JSON.stringify({}),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

        } else{
            alert('Failed to add client!')
        }
    }
};

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
            finish : `<button type="submit" id="client-submit" name="register" class="btn btn-lg cust-btn">Register</button>`,
            current : ''
        },
        onStepChanging: function (event, currentIndex, newIndex) { 
            event.preventDefault();
            const firstNameEl = document.querySelector('#first_name');
            const lastNameEl = document.querySelector('#last_name');
            const emailEl = document.querySelector('#email');
            const phoneEl = document.querySelector('#phone');
            const birthdateEl = document.querySelector('#birthdate');
            const genderEl = $('form input[type=radio]:checked').val();
            const weightEl = document.querySelector('#weight');
            const goal_weightEl = document.querySelector('#goal_weight');

            if(currentIndex === 0){
                firstNameEl.classList.remove('required');
                lastNameEl.classList.remove('required');
                birthdateEl.classList.remove('required');
                emailEl.classList.remove('required');
                phoneEl.classList.remove('required');
                let flag = true;
                if(firstNameEl.value === ''){
                    firstNameEl.classList.add('required');
                    flag = false;
                }
                if(lastNameEl.value === ''){
                    lastNameEl.classList.add('required');
                    flag = false;
                }
                if(birthdateEl.value === ''){
                    birthdateEl.classList.add('required');
                    flag = false;
                }
                if(emailEl.value === ''){
                    emailEl.classList.add('required');
                    flag = false;
                }
                if(phoneEl.value === ''){
                    phoneEl.classList.add('required');
                    flag = false;
                }
                return flag;
            }
           
            if(currentIndex === 1){
                weightEl.classList.remove('required');
                goal_weightEl.classList.remove('required');
                let flag = true;
                if(weightEl.value === ''){
                    console.log('weight is required');
                    weightEl.classList.add('required');
                    flag = false;
                }
                if(goal_weightEl.value === ''){
                    console.log('goal_weight is required');
                    goal_weightEl.classList.add('required');
                    flag = false;
                }
                if(flag === false){
                    return flag;
                }
                //else no reason to stop execution
            }
            const fullname = firstNameEl.value.trim()+' '+lastNameEl.value.trim();

            $('#fullname-val').text(fullname);
            $('#email-val').text(emailEl.value.trim());
            $('#phone-val').text(phoneEl.value.trim());
            $('#gender-val').text(genderEl);
            $('#weight-val').text(weightEl.value.trim());
            $('#goal-weight-val').text(goal_weightEl.value.trim());
            
            return true;      
        },
    });
});

document
    .querySelector("#form-register")
    .addEventListener('click', submitNewClient);
