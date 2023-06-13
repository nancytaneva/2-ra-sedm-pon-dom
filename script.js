var clienBirthYear = prompt("През коя година си роден?");
console.log(clienBirthYear);
var clientAge = (2023 - clienBirthYear);

        if(clienBirthYear < 1965) {
            var firstDigitRandomNumber  = Math.ceil(Math.random()*(7 - 1) + 1);
            var firstDigit              = Math.ceil(clientAge / firstDigitRandomNumber);
            
                if(firstDigit > 9) {
                    firstDigit = parseInt(firstDigit / 10);
                }
            if(firstDigit % 2 == 1) {
            console.log(`First digit: ${firstDigit}`);
            }

        }

        if(clienBirthYear > 1965) {
            var firstDigitRandomNumber  = Math.ceil(Math.random()*(7 - 1) + 1);
            var firstDigit              = Math.ceil(clientAge / firstDigitRandomNumber);
            
                if(firstDigit > 9) {
                    firstDigit = parseInt(firstDigit / 10);
                }
                if(firstDigit % 2 == 0) {
                console.log(`First digit: ${firstDigit}`);
                }
        }

        if(clienBirthYear == 1965) {
            var firstDigit = 0;
            console.log(`First digit: ${firstDigit}`);
        }
