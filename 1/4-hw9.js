function Calculator() {
    this.methods = {
      "+": (num1, num2) => num1 + num2,
      "-": (num1, num2) => num1 - num2,
    };
    this.calculate = function (str) {
      let strSpileted = str.split(" ");
      num1 = Number(strSpileted[0]);
      num2 = Number(strSpileted[2]);
      operator = strSpileted[1];
  
      return this.methods[operator](num1, num2);
    };
  
    this.addMethod = function(op, opFunc) {
      this.methods[op] = opFunc;
    }
  }
  
  let calc = new Calculator;
  console.log(calc.calculate("1 + 3"));
  console.log(calc.calculate("3 - 2"));
  
  let powerCalc = new Calculator;
  powerCalc.addMethod("**", (a, b) => a ** b);
  console.log(powerCalc.calculate("2 ** 3"));
  
  let divisionCalc = new Calculator;
  divisionCalc.addMethod("/", (a, b) => a / b);
  console.log(divisionCalc.calculate("6 / 2"));
  
  let multiplicationCalc = new Calculator;
  multiplicationCalc.addMethod("*", (a, b) => a * b);
  console.log(multiplicationCalc.calculate("2 * 3"));
  
  
  