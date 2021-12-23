function getId(x, y) {
  if(x > 100000 || x < 1 || y > 100000 || y < 1) {
    console.log("х или у долежн быть в диапазоне от 1 до 100 000")
  } 
  else {
    let firstLine = getX(x);
    let finalResult = getY(firstLine, x, y);
    console.log(finalResult);
  }
}

function getX(x){
    let count = 0;
    let res = 1;
    for(let i = 0; i < x; i++){
        res = res + i;
        count++;
    }
    return res;
}

function getY(firstLine,x,y){
  let count = x + 1;
    for(let i = 0; i < y - 1; i++){
    firstLine = firstLine + count;
    count++;     
  }
  return firstLine;
}

getId(3,2)