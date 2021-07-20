const calculateAgeInDogYears = (ageOfPerson) => {
    let ageInDogYears = ageOfPerson / 7;
    ageInDogYears = Math.floor(ageInDogYears);
    return ageInDogYears
}

const dogAge = calculateAgeInDogYears(45)
console.log(dogAge);

//-----------------------------------------------------
const favoriteDogBreed = (breed) => {
    if (breed === 'schnauzer') {
        return 'My favorite dog breed is schnauzer'
    } else if (breed === 'meow') {
        return 'i like cats'

    }
}

const myFavorite = favoriteDogBreed('schnauzer');
console.log(`when it comes to pets ${myFavorite}`);

//--------------------------------------------------


const add = (numOne, numTwo, numThree) => {
    let addNum = numOne + numTwo + numThree

    return addNum
}

const total = add(17, 4, 11);
console.log(`the total: ${total}`);

//-------------------------------------------------

const go = (direction, speed) => {
    console.log(`The car is moving ${direction} at ${speed} mph`);
    if (speed > 75) {
        console.log('Slow Down!');
    }
}
go('forward', 70);

//--------------------------------------------------

const arrayOfNumbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9
]


const evenOrOdd = () => {
    for (const arrayOfNumber of arrayOfNumbers) {
        if (arrayOfNumber % 2 == 0) {
            console.log(`the ${arrayOfNumber} is even`)

        } else {
            console.log(`the ${arrayOfNumber} is odd`);
        }
    }



}
evenOrOdd(0);