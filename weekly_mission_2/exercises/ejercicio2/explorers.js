const explorers = [
  {
    name: "Explorer 1",
    exercises_completed: 10,
    rate: 99,
    city: "CDMX",
    stack: ["js", "c#"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: true,
        exercisesFinished: true,
      },
    },
  },
  {
    name: "Explorer 2",
    exercises_completed: 9,
    city: "Veracruz",
    rate: 50,
    stack: ["js"],
    missions: {
      onboarding: {
        isFinished: false,
        exercisesFinished: false,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
  {
    name: "Explorer 3",
    exercises_completed: 3,
    city: "Sonora",
    rate: 100,
    stack: ["elixir"],
    missions: {
      onboarding: {
        isFinished: true,
        exercisesFinished: true,
      },
      frontend: {
        isFinished: false,
        exercisesFinished: false,
      },
    },
  },
];

//nombre
console.log(
  "Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH"
);
let names = "";
explorers.forEach((item) => (names += item.name + " "));
console.log("Nombres: " + names);

console.log("");
console.log("Imprime el stack de cada explorer, usa FOR EACH");
let stack = "";
explorers.forEach((item) => (stack += item.stack + " "));
console.log("Nombres: " + stack);

console.log("");
console.log("Crea una nueva lista con las listas de stacks de cada explorer, usa MAP");
let stackList=[];
explorers.map((item) => (stackList.push(item.stack)));
console.log("Lista de stacks: " + stackList);

console.log("");
console.log("Obtén la lista de explorers que tengan en su stack 'js', usa FILTER (para validar un elemento en un lista se usa el método includes)");
let explJs= explorers.filter((item) => item.stack.includes('js'));
console.log("Explorers con js: " + explJs.map(item => item.name));

console.log("");
console.log("Busca el primer explorer que sea de la CDMX, usa FIND");
let explCDMX= explorers.find((item) => item.city === 'CDMX');
console.log("Primer explorer en CDMX: " + explCDMX.name);

console.log("");
console.log("Obtén la suma de todos los exercises_completed, usa REDUCE");
let sumExcersices= explorers.reduce((acc, item) => item.exercises_completed + acc, 0);
console.log("Suma de ejercicios: " + sumExcersices);

console.log("");
console.log("Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME");
let someFrontFinishedTrue= explorers.some((item) => item.missions.frontend.exercisesFinished);
console.log("Al menos uno termino ejercicios frontend: " + (someFrontFinishedTrue ? 'Si' : 'No'));

console.log("");
console.log("Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.");
let everyOnboardFinishedTrue= explorers.every((item) => item.missions.onboarding.isFinished);
console.log("Todos terminaron onboarding?: " + (everyOnboardFinishedTrue ? 'Si' : 'No'));