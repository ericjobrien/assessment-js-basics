  console.log(` _______                                                                       __             
  /       \                                                                     /  |            
  $$$$$$$  | ______    _______  _______  __   __   __   ______    ______    ____$$ |            
  $$ |__$$ |/      \  /       |/       |/  | /  | /  | /      \  /      \  /    $$ |            
  $$    $$/ $$$$$$  |/$$$$$$$//$$$$$$$/ $$ | $$ | $$ |/$$$$$$  |/$$$$$$  |/$$$$$$$ |            
  $$$$$$$/  /    $$ |$$      \$$      \ $$ | $$ | $$ |$$ |  $$ |$$ |  $$/ $$ |  $$ |            
  $$ |     /$$$$$$$ | $$$$$$  |$$$$$$  |$$ \_$$ \_$$ |$$ \__$$ |$$ |      $$ \__$$ | __  __  __ 
  $$ |     $$    $$ |/     $$//     $$/ $$   $$   $$/ $$    $$/ $$ |      $$    $$ |/  |/  |/  |
  $$/       $$$$$$$/ $$$$$$$/ $$$$$$$/   $$$$$/$$$$/   $$$$$$/  $$/        $$$$$$$/ $$/ $$/ $$/ 
                                                                                               `);

function passwordValidator(name) {
    
    console.log(`Hello, ${name}!  Welcome to the password validator!`);
    
    const password = prompt("please enter your password to begin the evaluation", "Password:");
    //creating special characters list array to loop through in order to check for the special characters conditon of a password
    const specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')'];

    let charArr = [];

function passwordThing() {
for(let i = 0; i < specialCharacters.length; i++) {
  for(let j = 0; j < password.length; j++) {
      if(specialCharacters[i] === password[j]) {
        charArr.push(specialCharacters[i]);
      }
    }
  }

  if(charArr.length > 0) {
      return charArr;
  }
 }

    passwordThing();
    
        if(password.length >= 10 && charArr.length > 0) {
            return 'NICE!  Your password is acceptable.';
        } else {
            prompt('FAILURE: Your password must be 10 characters long and must contain a special character.', "Password");
              
        }

}

passwordValidator('Eric O');
