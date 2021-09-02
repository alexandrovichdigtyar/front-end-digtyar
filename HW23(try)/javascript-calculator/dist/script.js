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
        Calculator.el('#calculator').classList.add("broken"); 
        Calculator.el('#reset').classList.add("show"); 
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
    console.log(this.oldNum)
  }
  init(){
    for (let i = 0, l = nums.length; i < l; i++) {
      nums[i].onclick = this.setNum.bind(this, nums[i])  
    } 
 
     for (let b = 0, l = ops.length; b < l; b++) {
      ops[b].onclick = this.moveNum.bind(this, ops[b])
    } 


    equals.onclick = this.displayNum.bind(this, equals);

    Calculator.el("#clear").onclick = this.clearAll.bind(this);
  }
    
  
  }

let nums = Calculator.el(".num");
let viewer = Calculator.el("#viewer");
let equals = Calculator.el("#equals");
let ops = Calculator.el(".ops");


let newCalc = new Calculator (1,2);

newCalc.init()
    
      












/*     viewer.innerHTML = theNum; 
  }
  moveNum() {
    oldNum = theNum;
    theNum = "";
    operator = this.getAttribute("data-ops");

    equals.setAttribute("data-result", ""); 
  }
  displayNum() {

    oldNum = parseFloat(oldNum);
    theNum = parseFloat(theNum);

    switch (operator) {
      case "plus":
        resultNum = oldNum + theNum;
        break;

      case "minus":
        resultNum = oldNum - theNum;
        break;

      case "times":
        resultNum = oldNum * theNum;
        break;

      case "divided by":
        resultNum = oldNum / theNum;
        break;

      default:
        resultNum = theNum;
    }

  } */

