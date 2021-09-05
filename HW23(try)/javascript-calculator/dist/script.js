class Calculator{
  constructor(){
    this.theNum = "";
    this.oldNum = "";
    this.resultNum;
    this.operator;
  }
  static el(element){
    if (element.charAt(0) === "#") {
      return document.querySelector(element); 
    }
    return document.querySelectorAll(element); 
  }
  setNum(num){
   
    if (this.resultNum) {  
      this.theNum = num.getAttribute("data-num");
      
      this.resultNum = ""; 
    } else { 
      this.theNum += num.getAttribute("data-num");
       
    }
    viewer.innerHTML = this.theNum;
  }
  moveNum(num) { 
    this.oldNum = this.theNum;
    this.theNum = "";
    this.operator = num.getAttribute("data-ops");

    equals.setAttribute("data-result", ""); 
  }; 
  displayNum() {

    this.oldNum = parseFloat(this.oldNum);
    this.theNum = parseFloat(this.theNum);

    switch (this.operator) {
      case "plus":
        this.resultNum = this.oldNum + this.theNum;
        break;

      case "minus":
        this.resultNum = this.oldNum - this.theNum;
        break;

      case "times":
        this.resultNum = this.oldNum * this.theNum;
        break;

      case "divided by":
        this.resultNum = this.oldNum / this.theNum;
        break;

      default:
        this.resultNum = this.theNum;
    }
    if (!isFinite(this.resultNum)) {
      if (isNaN(this.resultNum)) { 
        this.resultNum = "You broke it!";
      } else { 
        this.resultNum = "Look at what you've done";
        calculator.classList.add("broken"); 
        resetBtn.classList.add("show"); 
      }
    }

    viewer.innerHTML = this.resultNum;
    equals.setAttribute("data-result", this.resultNum);
    this.oldNum = 0;
    this.theNum = this.resultNum;
   }

   clearAll() {
    this.oldNum = "";
    this.theNum = "";
    viewer.innerHTML = "0";
    equals.setAttribute("data-result", this.resultNum);
    
   }

  init(){
    for (let i = 0; i < nums.length; i++) {
      nums[i].addEventListener("click",this.setNum.bind(this, nums[i]));
    } 
 
     for (let b = 0; b < ops.length; b++) {
      ops[b].addEventListener("click",this.moveNum.bind(this, ops[b]));
    } 

    equals.addEventListener("click", this.displayNum.bind(this, equals));

    clearBtn.addEventListener("click", this.clearAll.bind(this));
  }
}

const nums = Calculator.el(".num");
const viewer = Calculator.el("#viewer");
const equals = Calculator.el("#equals");
const ops = Calculator.el(".ops");
const clearBtn = Calculator.el("#clear");
const calculator = Calculator.el('#calculator');
const resetBtn = Calculator.el('#reset');

let newCalc = new Calculator();

document.addEventListener("DOMContentLoaded", newCalc.init());
    
      



//--------------------------------------
const countTotal = () => ({total: 100});
console.log(countTotal());

const result = `Today is ${new Date}`
console.log(result);


let a = 5; let b = 10;
   console.log(({a:b, b:a}))