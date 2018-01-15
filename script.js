function yearOfBirth(age) {
    try {

        var yearOfBirth = 2018 - age;
        if (age < 0) {
            throw "Age cannot be less than 0"
        }
        console.log(`I was born in ${yearOfBirth}`)

    } catch (e) {
        console.log(e);
    }
}


function whoAmI(name, age) {

    if (name !== undefined || age !== undefined) {

        if (age === NaN || name !== "") {
            console.log("'Age' must be a number and 'Name' must be a string")

            console.log(`I'm ${name} and I am ${age}`)
            return yearOfBirth(age);
        }
    } else {
        console.log("Arguments are not valid")
    }


}
//whoAmI("Superman", 15);
whoAmI("Brian", 37)