function greeter(person: string) {
    return "Hello mr. " + person;
}

var user = "John Doe";

document.body.innerHTML = greeter(user);