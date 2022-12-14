"use strict";
//string, boolean, number;
let x;
x = 16;
console.log(x);
/* inferencia x annotation */
let z = 12; //inferencia
// y = 'teste'; apresenta um erro porque foi declarado como numero;
let b = 12; // Annotation
/* tipos basicos */
let primeiroNome = "Leandro";
let idade = 23;
const isAdmin = true;
console.log(typeof primeiroNome); //devolve o tipo de variavel;
primeiroNome = "Ucuamba";
console.log(primeiroNome);
/* Objecto */
const meuNumero = [1, 2, 3];
console.log(meuNumero);
console.log(meuNumero.length);
console.log(primeiroNome.toUpperCase());
/* tupla */
let mytuple;
mytuple = [5, "teste", ["a", "b"]];
/* Object literal -> {props: value} */
const user = {
    nome: "pedro",
    idade: 22,
};
console.log(user);
console.log(user.nome);
/* Union type */
let id = "leo"; // vai aceitar string e number;
id = 300;
const userId = 10;
const codeName = "tiago";
//enum 
//tamanho de roupa (size: Médio, size: Pequeno)
var Size;
(function (Size) {
    Size["P"] = "pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    nome: "Camisa gola v",
    size: Size.M
};
console.log(camisa);
/* Funções */
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 5));
//esta função ela só retorna valor do tipo string
function dizOla(idade) {
    return `Voce tem ${idade}`;
}
function logger(msg) {
    console.log(msg);
}
logger("Teste!!!!");
//ou
function mensagem(msg) {
    console.log(msg);
}
mensagem("Teste...");
//trabalhando com argumentos opcionais;
function greeting(name, greet) {
    if (greet) {
        console.log(`ola ${greet} ${name}`);
        return;
    }
    console.log(`ola ${name}`);
}
greeting("Leandro");
greeting("Santos", "Mr.");
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
sumNumbers({ n1: 6, n2: 10 });
console.log(sumNumbers({ n1: 6, n2: 10 }));
function MultiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
const someNumbers = {
    n1: 4,
    n2: 3
};
console.log(MultiplyNumbers(someNumbers));
/* generics -> é como se fosse lista*/
function showArrayItems(arr) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    });
}
const a1 = [1, 2, 3];
const a2 = ['ab', 'f', 'g'];
/*   Orientação a Objects    */
class User {
    constructor(name, role, isAproved) {
        this.name = name;
        this.role = role;
        this.isAproved = isAproved;
    }
}
const zeca = new User("Leandro", "Admin", true);
console.log(zeca);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`A marca do carro é: ${this.brand}`);
    }
}
const fusca = new Car("BMW", 4);
fusca.showBrand();
//herança
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Lexus", 4, 2.5);
console.log(a4);
a4.showBrand();
