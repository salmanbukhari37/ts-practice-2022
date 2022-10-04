interface Person {
    name: string;
    age: number;
    hobbies: (string | number)[],
    role: number
}

enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR
}

const person: Person = {
    name: "Salman",
    age: 31,
    hobbies: ['Sports', "Gaming", 1],
    role: Role.ADMIN
};

if (person.role === Role.ADMIN) {
    console.log("Is admin!")
}

console.log(person.name);