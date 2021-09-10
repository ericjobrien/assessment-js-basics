function passwordValidator(name) {
    console.log(`Hello, ${name}!  Welcome to the password validator!`);
    const password = prompt("please enter your password to begin the evaluation", "Password:");
        if(password.length >= 10) {
            console.log('NICE!  Your password is acceptable.');
        } else {
            prompt('FAILURE: please create a password greater than 10 characters.', "Password");
              
        }

}

passwordValidator('Eric O');
