function upsideDown(num) {
    let arr = [];
    let count = 0;
    let foo = Math.floor(num / 2);
    let j = 1;
    for (let n = 1; n <= num; n++) {
      arr.push(prompt(`enter number : ${n}/${num}`));
    }
    for (let i = 0; i < foo; i++) {
      if (arr.at(i) === arr.at(-j)) {
        count++;
      }
      j++;
    }
    if (count === foo) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(upsideDown(prompt("Enter you size of array:")));