// variables??? var, let y const
let fileName = 'test.js';

fileName = 'texto_radom.js';

const numbers = 1;
const str = 'lorem ipsum';
const booleans = true; // false
const arrays = [1, 2, 3, 4, 5];
const talentum = {
  title: 'desarrollo web. html5',
  students: ['Ana', 'Beatriz', 'Dario']
};

const nodef = undefined;

// console.log('Estoy en el curso' + talentum.title);

// console.log(`

//   Estoy en el curso ${talentum.title}
  
// `);

const foo = () => {
  console.log('Foo Hello world');
};

const hiMessage = (studentName) => {
  if (studentName === undefined) {
    return 'Necesito un nombre de estudiante??';
  }
  const hi = `Hola estudiante ${studentName}`;
  return hi;
};

const newStudent = 'kj';

const saludo = hiMessage(newStudent);

// console.log(saludo);

const studentList = [
  {
    name: 'Test',
    address: 'castellana'
  },
  {
    name: 'kj',
    address: 'madrid'
  }
];

const showStudents = students => {
  console.log('---inicio funcion----');
  for(let i = 0; i < students.length; i++) {
    console.log('ejecutar bucle');
    const student = students[i];
    console.log(`Hola ${student.name} con calle ${student.address}!!`);
  }
  console.log('---fin funcion---');
};

showStudents(studentList);

// const printGreetings = message => {
//   console.log(`
//   ${message} 👏👏👏👏
//   `);
// };

// printGreetings(saludo);


