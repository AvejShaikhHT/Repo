// don't do

function addNumbers(numberOne, numberTwo){
    emailService.sendEmail('two numbers add!!');
    return numberOne + numberTwo;
}

// Do like

function addNumbers(numberOne, numberTwo){
    numberService.sendNumber('two numbers add!!');
    return numberOne + numberTwo;
}