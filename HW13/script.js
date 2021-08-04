function createCalculator(b){
    return {
        sum: function sum(a) {
            b = a + b;
            return b;
     },
        mult: function mult(a){
            b = a*b;
            return b;
        },
        sub: function sub(a){
            b = b - a;
            return b;
        },
        div: function div(a){
            b = b/a;
            return b;
        },
        set: function set(a){
            b = a;
            return b;
        }
     }
 }
 
const calc = createCalculator(10);

console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
console.log(calc.set(100)); // 100 

