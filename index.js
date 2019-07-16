/**
 * Instrucciones: 
 * 
 * En todas las pruebas se tomará en cuenta la limpieza del código y el uso de ECMAScript6 
 * 
 * Escriba el código solicitado después de las instrucciones
 * 
 * Utilice la sintaxis resumida de "arrow function"
 * 
 * Al terminar la prueba suba el código a un repositorio y envienos el link 
 * al siguiente correo electrónico:
 * 
 *         ggutierrez@grainchain.io
 * 
 */


 /** 
 * Codifica una función que reciba por parámetros, un arreglo de empleados,
 * y retorne un arreglo con los empleados filtrados según el parámetro dado
 * 
 * Imprima el resultado en consola
 * 
 */
import employees from './data';
console.log('Array', employees);

function getEmployeesFromDepartment(employees, parameter) {
  const result = employees.filter(a => a.fisrtName == parameter || a.lastName == parameter || a.age == parameter || a.department == parameter);
  return result;
};

console.log(getEmployeesFromDepartment(employees, 'Marketing'));





// console.log(getEmployeesFromDepartment(employees)('Marketing'))

/**
 * Codifica una segunda función que reciba como parametro un arreglo y retorne 
 * el promedio de edad de los empleados del departamento de 'Marketing', 
 * redondear el valor para que no haya decimales.
 * 
 * Reutiliza las funciones necesarias
 * Imprima el resultado en consola
 * 
 */


let marketingEmployees = getEmployeesFromDepartment(employees, 'Marketing')
function getAverageAge(marketingEmployees) {
  const sum = (a, b) => a + b;
  const sigma = marketingEmployees.map(e => e.age).reduce(sum, 0);
  const avg = Math.round(sigma/marketingEmployees.length);
  return avg;
};

console.log(getAverageAge(marketingEmployees))






/**
 * Output esperado: 41
 */


/**
 * Codifica una función que reciba por parámetro un arreglo de "employees" del departamento
 * de "Development" y retorne un nuevo arreglo con los "employees" con la edad aumentada a 1
 * 
 * Reutiliza las funciones necesarias
 * Imprime el resultado en consola
 * 
 */

let developEmployees = getEmployeesFromDepartment(employees, 'Development');
console.log(developEmployees);
function getEmployeesAgedPlusOne(developEmployees) {
  const result = [...developEmployees];
  result.forEach(e => {
    ++e.age;
  })
  return result;
};
 console.log(getEmployeesAgedPlusOne(developEmployees));









/**
 * Crea una función que reciba por parametro el objeto employee y cambie el departamento a "Development"
 * 
 */
let employee = {
  fisrtName: 'Maria',
  lastName: 'Gonzalez',
  age: 32,
  department: 'Marketing'
}

function changeDepartment(employee) {
  var result = employee;
  result.department = 'Development';
  return result;
}




// No mutar el objeto
console.log(employee)
console.log(changeDepartment(employee))

/**
 *  
 * Crea una función en la cual solo se reciba un parámetro y se puedan sumar hasta 3 números
 * 
 * Escribe aquí debajo como se llama a este concepto
 * destructuring, spread syntax
 */
function buildSum(parameter){
  const sum = (a, b, c) => a+ b + c;
  const arr = parameter;
  const result = sum(...arr);
  return result
}


 console.log(buildSum(1)(2)(3))






