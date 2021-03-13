var person = {
    firstName: "Mahendra",
    lastName: "Fajar",
    age: 21,
    eyeColor: "black",
    getName: function(){
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.firstName);
console.log(person['lastName']);
console.log(person.getName());
