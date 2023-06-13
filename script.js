// Първа цифра
// За първата цифра от номера на картата системата изисква информация за годината, в която е роден клиентът:

// Клиентът въвежда годината на своето раждане:
    // ако е роден преди 1965, то цифрата е задължително нечетна;
    // ако е роден след 1965, то цифрата е задължително четна;
    // СПЕЦИАЛЕН СЛУЧАЙ ако е роден точно през 1965, то цифрата е 0 и приключваме генерирането на тази първа цифра.
// Ако клиентът не попадне в СПЕЦИАЛНИЯ СЛУЧАЙ, то системата:
    // изцислява годините на клиента, базирайки го годината която е въвел;
    // след това генерира случайно число в интервала от 1 до 7;
    // разделя възрастта на клиента с това число и полученият резултат се използва като първа цифра.
// Важно - задължително трябва да се съобразим с условието за четност и нечетност. Ако резултатът от горната операция е четно число, а потребителят е роден след 1965, то трябва резултатът да бъде модифициран, така че да се спази условието, като се промени текущата стойност с една единица.

// Пример
    // ако съм роден през 1979, то моята първа цифра трябва да е четна;
    // получавам от алгоритъма резултат - 7 (този резултат е примерен), който противоречи на условието;
    // валидна стойност би била 8.
    // Допълнително уточнение

// ако резултата е двуцифрено число, вземете само първата цифра от него.


var clienBirthYear = prompt("През коя година си роден?");
console.log(clienBirthYear);
var clientAge = 2023 - clienBirthYear;

    while(clienBirthYear != 1965) {

        if(clienBirthYear < 1965) {
            var firstDigitRandomNumber = Math.ceil(Math.random()*(7 - 1) + 1);
            var firstDigit = Math.ceil(clientAge / firstDigitRandomNumber);
            
                if(firstDigit > 9) {
                    firstDigit = parseInt(firstDigit / 10);
                }
            if(firstDigit % 2 == 1) {
            console.log(`First digit: ${firstDigit}`);
            }

        }

        if(clienBirthYear > 1965) {
            console.log("Nad 1965");
        }

        if(clienBirthYear == 1965) {
            var firstDigit == 0;
            console.log(`First digit: ${firstDigit}`);
        }
    }

    
    