const birth_year = 1995;
let current_year = new Date().getFullYear();
current_year--;

let age = current_year - birth_year;

console.log(`Patient's Age: ${age}`)

let birth_month = 2;
const current_month = new Date().getMonth();


if(birth_month <= current_month) {
    age++;
}

console.log(`Patient's Accurate Age: ${age}`)
