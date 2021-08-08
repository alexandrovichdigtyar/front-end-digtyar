const user = {
    firstName: "Nikola",
    secondName: "Tesla",
    getFullName: function() {
    let names = `${this.firstName}` + " " + `${this.secondName}`;
    console.log(names);
    return names;
    }
  }


 
user.getFullName();     

//-------------------

const user2 = {
    firstName: "Steve",
    secondName: "Jobs"
} 

const userCopy = user.getFullName;

userCopy.call(user2);

//-------------------

const userThird = {
    firstName: "Steve",
    secondName: "Wozniak"
} 

const userThirdCopy = user.getFullName;

userThirdCopy.apply(userThird);

//------------

const userForth = {
    firstName: "Julia ", 
    secondName: "Roberts"
}

const GetFullNameBinded = user.getFullName.bind(userForth);

GetFullNameBinded();


  

function Collage (name,age,profession){
    this.name = name;
    this.age = age;
    this.profession = profession;
}

const collage = new Collage('bogdan',20, "Bankir");
const teacher = new Collage('Sergey', undefined, "Front-End dev");
const friend = new Collage("Lalimenko", 20, "Soft god" );

//---------------------

function Calculator(b){      
    this.sum = function (a){
        b = a + b;
        return b;
    },
    this.mult = function(a){
        b = a*b;
        return b;
    },
    this.sub = function (a){
        b = b - a;
        return b;
    },
    this.div = function (a){
        b = b/a;
        return b;
    },
    this.set = function (a){
        b = a;
        return b;
    }
    
}

const calc = new Calculator(10);

console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
console.log(calc.set(100)); // 100 