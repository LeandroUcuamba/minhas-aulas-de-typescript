//string, boolean, number;
let x: number;

x = 16;

console.log(x);

/* inferencia x annotation */
let z = 12; //inferencia
// y = 'teste'; apresenta um erro porque foi declarado como numero;

let b: number = 12; // Annotation



/* tipos basicos */
let primeiroNome: string = "Leandro";
let idade: number = 23;
const isAdmin: boolean = true;

console.log(typeof primeiroNome); //devolve o tipo de variavel;

primeiroNome = "Ucuamba";
console.log(primeiroNome);



/* Objecto */
const meuNumero: number[] = [1,2,3];

console.log(meuNumero);
console.log(meuNumero.length);
console.log(primeiroNome.toUpperCase());


/* tupla */
let mytuple: [number, string, string[]];
mytuple = [5, "teste", ["a","b"]];


/* Object literal -> {props: value} */

const user: { nome: string; idade: number} = {
    nome: "pedro",
    idade: 22,
};

console.log(user);
console.log(user.nome);


/* Union type */
let id: string | number = "leo"; // vai aceitar string e number;
id = 300;

/* type alias */
type myType = number | string

const userId: myType = 10;
const codeName: myType = "tiago";


//enum 
//tamanho de roupa (size: Médio, size: Pequeno)

enum Size{
    P = "pequeno",
    M = "Médio",
    G = "Grande"
}

const camisa = {
    nome: "Camisa gola v",
    size: Size.M
}

console.log(camisa);



/* Funções */
function sum(a: number, b: number){
    return a+b;
}
console.log(sum(12, 5));


//esta função ela só retorna valor do tipo string
function dizOla(idade: number): string {
    return `Voce tem ${idade}`;
}


function logger(msg: string){
   console.log(msg);
}
logger("Teste!!!!");

//ou

function mensagem(msg: string): void{
    console.log(msg);
 }
 mensagem("Teste...");


//trabalhando com argumentos opcionais;
function greeting(name: string, greet?: string): void{
    if(greet){
       console.log(`ola ${greet} ${name}`);
       return;
    }
  console.log(`ola ${name}`);
}

greeting("Leandro");
greeting("Santos", "Mr.");




/* Interface */
interface MathFunctionParams {
    n1: number,
    n2: number
}

function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2;
}
sumNumbers({n1:6, n2:10});
console.log(sumNumbers({n1:6, n2:10}))


function MultiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2;
}

const someNumbers: MathFunctionParams = {
    n1: 4,
    n2: 3
}
console.log(MultiplyNumbers(someNumbers));


/* generics -> é como se fosse lista*/
function showArrayItems<T>(arr: T[]){
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`);
    })
}

const a1 = [1,2,3];
const a2 = ['ab','f','g']



/*   Orientação a Objects    */
class User{
    name
    role
    isAproved

    constructor(name: string, role: string, isAproved: boolean){
        this.name = name
        this.role = role
        this.isAproved = isAproved
    }
}

const zeca = new User("Leandro","Admin",true);
console.log(zeca);


//Interface em classe;
interface IVehicle {
    brand: string,
    showBrand(): void

}

class Car implements IVehicle{
    brand
    wheels

    constructor(brand: string, wheels: number){
         this.brand = brand
         this.wheels = wheels
    }

    showBrand(): void{
        console.log(`A marca do carro é: ${this.brand}`)
    }

}

const fusca = new Car("BMW", 4);
fusca.showBrand();


//herança
class SuperCar extends Car{
     engine

     constructor(brand: string, wheels: number, engine: number){
         super(brand, wheels);
         this.engine= engine;
     }
}

const a4 = new SuperCar("Lexus", 4, 2.5)
console.log(a4);
a4.showBrand();
