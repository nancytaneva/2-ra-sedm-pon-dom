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

const clienBirthYear = prompt("През коя година си роден?");
console.log(clienBirthYear);
const clientAge = (2023 - clienBirthYear);

        if(clienBirthYear < 1965) {
            do {
                var firstDigitRandomNumber  = Math.ceil(Math.random()*(7 - 1) + 1);
                var firstDigit              = Math.ceil(clientAge / firstDigitRandomNumber);
                
                if(firstDigit > 9) {
                    firstDigit = parseInt(firstDigit / 10);
                }   
                if(firstDigit % 2 == 1) {
                console.log(`First digit: ${firstDigit}`);
                }
            }while(firstDigit % 2 == 0)
        }

        if(clienBirthYear > 1965) {
            do {
                var firstDigitRandomNumber  = Math.ceil(Math.random()*(7 - 1) + 1);
                var firstDigit              = Math.ceil(clientAge / firstDigitRandomNumber);
                
                    if(firstDigit > 9) {
                        firstDigit = parseInt(firstDigit / 10);
                    }
                    if(firstDigit % 2 == 0) {
                    console.log(`First digit: ${firstDigit}`);
                    }
            }while(firstDigit % 2 == 1)
                
        }

        if(clienBirthYear == 1965) {
            var firstDigit = 0;
            console.log(`First digit: ${firstDigit}`);
        }

    
    // Втора цифра
    // За втора цифра от номера на картата системата се интересува от пола на клиента:  
        // ако той е мъжки - цифрата е 1
        // ако той е женски - цифрата е 3
        // ако потребителят не желае да избере пол, поради лични съображения, то тогава генерирайте случайно число в интервала от 1 до 9 включително, като съобразите факта, че числото не може да е, нито 1, нито 3.
    // Важно уточнение - според специфичните правила за този софтуер. Ако първата цифра от номера на картата е 0, то втората цифра задължително е 9 и въпроса за пола трябва да бъде пропуснат.

    const clientSex = prompt(`Какъв пол си? Отговори с "Мъж", "Жена" или "Не казвам"`);

    if(clientSex == "Мъж") {
        var secondDigit = 1;
        console.log(`Second digit: ${secondDigit}`)
    }
    else if(clientSex == "Жена") {
        var secondDigit = 3;
        console.log(`Second digit: ${secondDigit}`)
    }
    else {
        var secondDigit = Math.ceil(Math.random()*(9 - 1) + 1);
        console.log(`Second digit: ${secondDigit}`)
    }


    // Трета цифра
    // Ако потребителят е НЕпълнолетен, накарайте го:
    
    // първо: да въведе годината на раждане на майка му;
    // второ: да въведе годината на раждане на баща му.
    // Ако последната цифра на годината на майка му е равна на тази на баща му, то третата цифра от номера на клиентската карта е равна на предпоследната цифра от годината на майка му.
    
    // Ако двете цифри са различни, то третата цифра от номера на картата е равна на последната цифра от годината на баща му.
    
    // Ако потребителя е ПЪЛНОЛЕТЕН, числото в картата е 0.

if(clientAge < 18) {
    const motherBirthYear             = prompt("През коя година е родена майка ти?");
    const motherBirthYearLastDigit    = motherBirthYear % 10;
    const fatherBirthYear             = prompt("През коя година е роден баща ти?");
    const fatherBirthYearLastDigit    = fatherBirthYear % 10;
    
    if(motherBirthYearLastDigit == fatherBirthYearLastDigit) {
        var thirdDigit = motherBirthYearLastDigit;
        console.log(`Third digit: ${motherBirthYearLastDigit}`);
    }
    if(motherBirthYearLastDigit !== fatherBirthYearLastDigit) {
        var thirdDigit = fatherBirthYearLastDigit;
        console.log(`Third digit: ${fatherBirthYearLastDigit}`);
    }
}

if(clientAge >= 18) {
    var thirdDigit = 0;
    console.log(`Third digit: ${thirdDigit}`)
}


// Четвърта цифра
// За да получите четвъртата цифра, трябва да въведете:

// първо: вашата височина в сантиметри;
// второ: вашето тегло в килограми.
// Системата изчислява индекса на телесната маса по формулата (тегло) разделено на (височина на квадрат). Резултатът от операцията трябва да е задължително дробно число.

// Цифрата се генерира на базата на следните интервали:
// цифра	        название	                символ
// под 16	        под норма	                генерираме цифра - 1
// от 16 до 16,99	нормално	                генерираме цифра - 2

// от 17 до 18,49	нормално - атлетично	    генерираме цифра - 3
// от 18,5 до 24,99	нормално	                генерираме цифра - 4

// от 25 до 29,99	пред наднормено	            генерираме цифра - 5
// от 30 до 34,99	наднормено - дебел	        генерираме цифра - 6
// от 35 до 39,99	наднормено - затлъстял	    генерираме цифра - 7
// от 40 и нагоре	наднормено - мега затлъстял	генерираме цифра - 8

const clientHeight = prompt("Вашата височина в сантиметри:");
const clientWeigtht = prompt("Вашето тегло в килограми");

const clientBMI = clientWeigtht/(clientHeight*clientHeight);

if(clientBMI < 16) {
    const fourthNumber = 1;
    console.log(`Fourth number: ${fourthNumber}`);
}
if(clientBMI >= 16 && clientBMI <= 16.99) {
    const fourthNumber = 2;
    console.log(`Fourth number: ${fourthNumber}`)
}
if(clientBMI >= 17 && clientBMI <= 18.49) {
    const fourthNumber = 3;
    console.log(`Fourth number: ${fourthNumber}`)
}
if(clientBMI >= 18.5 && clientBMI <= 24.99) {
    const fourthNumber = 4;
    console.log(`Fourth number: ${fourthNumber}`)
}
if(clientBMI >= 25 && clientBMI <= 29.99) {
    const fourthNumber = 5;
    console.log(`Fourth number: ${fourthNumber}`)
}
if(clientBMI >= 30 && clientBMI <= 34.99) {
    const fourthNumber = 6;
    console.log(`Fourth number: ${fourthNumber}`)
}
if(clientBMI >= 35 && clientBMI <= 39.99) {
    const fourthNumber = 7;
    console.log(`Fourth number: ${fourthNumber}`)
}
if(clientBMI >= 40) {
    const fourthNumber = 8;
    console.log(`Fourth number: ${fourthNumber}`)
}


// Пета цифра
// Петата цифра се определя от предпочитанията на потребителя, за стоки и услуги, на територията на магазина, както и честотата, с която те се консумират.
// Дайте му възможност, чрез текстово съобщение, да избере от 5 вида стоки, които консумира. Имате избор между следните възможности:
    // плодове и зеленчуци;
    // месо и месни продукти;
    // цигари и алкохол;
    // млечни продукти;
    // захарни изделия.
// За всеки един от продуктите трябва да изберете колко често го купувате, като използвате скалата от 1 до 3:
    // 1 - рядко
    // 2 - понякога
    // 3 - често
// Цифрата е сумата от позицията на избрания продукт и честотата на пазаруване
// Пример: Избрали сме позиция 3. Цигари и алкохол - честота понякога - резултата е 3 + 2
var clientFavProducts               = prompt(`Кой вид продукти най-много обичаш да консумираш? Отговори с ЦИФРА: 1 = плодове и зеленчуци; 2 = месо и месни продукти; 3 = цигари и алкохол; 4 = млечни продукти; 5 = захарни изделия`);


if(clientFavProducts == 1) {
    var clientFavProductFrequency = prompt(`Колко често купувате плодове и зеленчуци? Отговори чрез "1" рядко, "2" понякога и "3" често`);
}
else if(clientFavProducts == 2) {
    var clientFavProductFrequency = prompt(`Колко често купувате месо и месни продукти? Отговори чрез "1" рядко, "2" понякога и "3" често`);
}
else if(clientFavProducts == 3) {
    var clientFavProductFrequency = prompt(`Колко често купувате цигари и алкохол? Отговори чрез "1" рядко, "2" понякога и "3" често`);
}
else if(clientFavProducts == 4) {
    var clientFavProductFrequency = prompt(`Колко често купувате млечни продукти? Отговори чрез "1" рядко, "2" понякога и "3" често`);
}
else if(clientFavProducts == 5) {
    var clientFavProductFrequency = prompt(`Колко често купувате захарни изделия? Отговори чрез "1" рядко, "2" понякога и "3" често`);
}

const fifthDigit = parseInt(clientFavProducts) + parseInt(clientFavProductFrequency);
console.log(`Fifth digit: ${fifthDigit}`);

// Шеста цифра
// Шестата цифра е контролна, тя се подчинява на принципите на нумерологията и е резултат от сбора на всички предишни числа, сведени до едноцифрено такова.

// Пример - едноцифрено число Преди шеста цифра, потребителят е получил следните 5 цифри.
// 1
// 1
// 1
// 1
// 2
// Сборът на тези цифри е 6 . Значи шестата цифра е със стойност 6.

// Пример - двуцифрено число Преди шеста цифра, потребителят е получил следните 5 цифри.
// 5
// 3
// 8
// 4
// 6
// Сборът от тези цифри е 26. Прилагаме принципа на нумерологията и събираме 2 и 6, резултатът е 8. Значи шестата цифра е със стойност 8.

const sixthNumber = firstDigit + secondDigit + thirdDigit + fourthNumber + fifthDigit;

if(sixthNumber > 9) {
    const firstDigitSixthNumber   = parseInt(sixthNumber/10);
    const lastDigitSixthNumber    = sixthNumber % 10;
    const sixthNumber = firstDigitSixthNumber + lastDigitSixthNumber;
}
console.log(`Sixth digit: ${sixthNumber}`)

console.log(`Card Number: ${firstDigit}${secondDigit}${thirdDigit}${fourthNumber}${fifthDigit}${sixthNumber}`);