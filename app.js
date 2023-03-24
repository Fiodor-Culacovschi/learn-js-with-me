// declaring a variable and assigning a value 
const kelvin = 293;
// converting kelvin to celcius
const celsius = kelvin - 273;

// converting  celsius in farenheit
let farenheit  = celsius * (9/5) + 32;

// rounding up to the nearest whole number
farenheit = Math.floor(farenheit);

console.log(`The temperaturre is ${farenheit} degrees Fahrenheit.`);


