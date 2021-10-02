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
            const fullname = $('#first_name').val() + ' ' + $('#last_name').val();
            const email = $('#email').val();
            const phone = $('#phone').val();
            const address = $('#address').val();
            const gender = $('form input[type=radio]:checked').val();
            const account_name = $('#account_name').val();
            const account_number = $('#account_number').val();

            $('#fullname-val').text(fullname);
            $('#email-val').text(email);
            $('#phone-val').text(phone);
            $('#address-val').text(address);
            $('#gender-val').text(gender);
            $('#account-name-val').text(account_name);
            $('#account-number-val').text(account_number);

            return true;
        }
    });
});
