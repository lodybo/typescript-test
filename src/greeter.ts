interface Person {
    name: string;
    department: string;
    age: number;
}

function greeter(person: Person) {
    return "Hello mr. " + person.name + ", who is " + person.age + " years old and works in " + person.department;
}

let arr = [0, 1, 2];
let user = "John Doe";
let oUser = {
    name: "Jane Doe",
    department: "Accounting",
    age: 42
}; 

document.body.innerHTML = greeter(oUser);