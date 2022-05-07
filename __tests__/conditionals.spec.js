// PRIMERA PARTE: Condicionales en JavaScript

describe("Condicionales en JavaScript", () => {
    test("Completa el valor del resultado 'expected' para que pase el test", () => {
        let name = "Lara";
        let result = "Lara tiene un nombre corto";

        if (name.length >= 6) {
            result = "Lara tiene un nombre largo"
        }

        // Edita el .toEqual() (los "???") para que pase el test
        expect(result).toEqual("Lara tiene un nombre corto");
    })


    test("Completa el valor del 'expected'", () => {
        let age = 21;
        let name = "Olga";
        let result;

        if (age >= 18) {
            result = `${name} es mayor de edad.`;
        } else {
            result = `${name} es menor de edad.`
        }

        // Edita el .toEqual() para que pase el test
        expect(result).toEqual("Olga es mayor de edad.");
    })


    test("Completa el valor del 'expected'", () => {
        let a = "piña";
        let b = "pepperoni";
        let number = 14;
        let result;
        // modulable per 7 es divisible per 7. Result es b.
        if (number % 7 === 0) {
            result = `Pizza con ${b}`
        } else {
            result = `Pizza con ${a}`
        }

        // Edita el .toEqual() para que pase el test
        expect(result).toEqual("Pizza con pepperoni");
    })
})


describe("Escribe tus propios tests", () => {
    test("Si la persona es de Reino Unido (UK), le saludamos en inglés, y si no, le saludamos en castellano", () => {
        let country = "UK";
        let greeting = "¡Hola!";

        // Escribe aquí tu condicional contemplando las 2 casuísticas. En este caso, el saludo debe ser "¡Hola!" o bien "Hello!".
        if (country === "UK") {
            greeting = `Hello!`
        } else {
            greeting = `¡Hola!`
        }


        expect(greeting).toBe("Hello!");
    })


    test("Para saludar a alguien hay que saber la hora. Si es antes de las 12, le decimos 'Buenos días', si es después de las 12 pero antes de las 20, le decimos 'Buenas tardes', y si es después de las 20, le decimos 'Buenas noches'", () => {
        let hour = 19;
        let saludo;
        
        // Escribe aquí tu condicional contemplando las 3 casuísticas
        if(hour < 12 && hour < 6){
            saludo = "Buenos días";
        } else if (hour < 20  && hour > 6){
            saludo = "Buenas tardes";
        } else if (hour < 6  && hour > 12){
            saludo = "Buenas noches";
        }


        expect(saludo).toEqual("Buenas tardes");
    })

})