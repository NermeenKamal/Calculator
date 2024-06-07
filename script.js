function light() {
  document.getElementById("light").style.display = "none";
  document.getElementById("btt").style.display = "none";
  document.getElementById("darkbtn").style.display = "block";
  document.getElementById("body").style.backgroundColor = "#f5e9dc";
  document.getElementById("btn2").style.display = "block";

  document.getElementById("ph").style.color = "#312c3e";

  document.getElementById("b1").style.color = "#f5e9dc";
  document.getElementById("b1").style.backgroundColor = "#312c3e";

  document.getElementById("b2").style.color = "#f5e9dc";
  document.getElementById("b2").style.backgroundColor = "#312c3e";

  document.getElementById("b3").style.color = "#f5e9dc";
  document.getElementById("b3").style.backgroundColor = "#312c3e";

  document.getElementById("b4").style.color = "#f5e9dc";
  document.getElementById("b4").style.backgroundColor = "#312c3e";

  document.getElementById("b5").style.color = "#f5e9dc";
  document.getElementById("b5").style.backgroundColor = "#312c3e";

  document.getElementById("b6").style.color = "#f5e9dc";
  document.getElementById("b6").style.backgroundColor = "#312c3e";

  document.getElementById("b7").style.color = "#f5e9dc";
  document.getElementById("b7").style.backgroundColor = "#312c3e";

  document.getElementById("b8").style.color = "#f5e9dc";
  document.getElementById("b8").style.backgroundColor = "#312c3e";

  document.getElementById("b9").style.color = "#f5e9dc";
  document.getElementById("b9").style.backgroundColor = "#312c3e";

  document.getElementById("b10").style.color = "#f5e9dc";
  document.getElementById("b10").style.backgroundColor = "#312c3e";

  document.getElementById("b11").style.color = "#f5e9dc";
  document.getElementById("b11").style.backgroundColor = "#312c3e";

  document.getElementById("b12").style.color = "#f5e9dc";
  document.getElementById("b12").style.backgroundColor = "#312c3e";

  document.getElementById("b13").style.color = "#f5e9dc";
  document.getElementById("b13").style.backgroundColor = "#312c3e";

  document.getElementById("b14").style.color = "#f5e9dc";
  document.getElementById("b14").style.backgroundColor = "#312c3e";

  document.getElementById("b15").style.color = "#f5e9dc";
  document.getElementById("b15").style.backgroundColor = "#312c3e";

  document.getElementById("b16").style.color = "#f5e9dc";
  document.getElementById("b16").style.backgroundColor = "#312c3e";

  document.getElementById("b17").style.color = "#f5e9dc";
  document.getElementById("b17").style.backgroundColor = "#312c3e";
}

function dark() {
  document.getElementById("darkbtn").style.display = "none";
  document.getElementById("btn2").style.display = "none";
  document.getElementById("light").style.display = "block";
  document.getElementById("body").style.backgroundColor = "#312c3e";
  document.getElementById("btt").style.display = "block";

  document.getElementById("ph").style.color = "#f5e9dc";

  document.getElementById("b1").style.color = "#312c3e";
  document.getElementById("b1").style.backgroundColor = "#f5e9dc";

  document.getElementById("b2").style.color = "#312c3e";
  document.getElementById("b2").style.backgroundColor = "#f5e9dc";

  document.getElementById("b3").style.color = "#312c3e";
  document.getElementById("b3").style.backgroundColor = "#f5e9dc";

  document.getElementById("b4").style.color = "#312c3e";
  document.getElementById("b4").style.backgroundColor = "#f5e9dc";

  document.getElementById("b5").style.color = "#312c3e";
  document.getElementById("b5").style.backgroundColor = "#f5e9dc";

  document.getElementById("b6").style.color = "#312c3e";
  document.getElementById("b6").style.backgroundColor = "#f5e9dc";

  document.getElementById("b7").style.color = "#312c3e";
  document.getElementById("b7").style.backgroundColor = "#f5e9dc";

  document.getElementById("b8").style.color = "#312c3e";
  document.getElementById("b8").style.backgroundColor = "#f5e9dc";

  document.getElementById("b9").style.color = "#312c3e";
  document.getElementById("b9").style.backgroundColor = "#f5e9dc";

  document.getElementById("b10").style.color = "#312c3e";
  document.getElementById("b10").style.backgroundColor = "#f5e9dc";

  document.getElementById("b11").style.color = "#312c3e";
  document.getElementById("b11").style.backgroundColor = "#f5e9dc";

  document.getElementById("b12").style.color = "#312c3e";
  document.getElementById("b12").style.backgroundColor = "#f5e9dc";

  document.getElementById("b13").style.color = "#312c3e";
  document.getElementById("b13").style.backgroundColor = "#f5e9dc";

  document.getElementById("b14").style.color = "#312c3e";
  document.getElementById("b14").style.backgroundColor = "#f5e9dc";

  document.getElementById("b15").style.color = "#312c3e";
  document.getElementById("b15").style.backgroundColor = "#f5e9dc";

  document.getElementById("b16").style.color = "#312c3e";
  document.getElementById("b16").style.backgroundColor = "#f5e9dc";

  document.getElementById("b17").style.color = "#312c3e";
  document.getElementById("b17").style.backgroundColor = "#f5e9dc";


}

let num0 = 0
let num1 = 1
let num2 = 2
let num3 = 3
let num4 = 4
let num5 = 5
let num6 = 6
let num7 = 7
let num8 = 8
let num9 = 9

let result = []
let changebtn = []

document.getElementById("b15").addEventListener("click", function () {
  result.push(num0)
  changebtn.push(num0)
  document.getElementById("b1").value = changebtn.join('');
})

document.getElementById("b2").addEventListener("click", function () {
  result.push(num1)
  changebtn.push(num1)
  document.getElementById("b1").value = changebtn.join('');
})

document.getElementById("b3").addEventListener("click", function () {
  result.push(num2)
  changebtn.push(num2)
  document.getElementById("b1").value = changebtn.join('');
})

document.getElementById("b4").addEventListener("click", function () {
  result.push(num3)
  changebtn.push(num3)
  document.getElementById("b1").value = changebtn.join('');
})

document.getElementById("b6").addEventListener("click", function () {
  result.push(num4)
  changebtn.push(num4)
  document.getElementById("b1").value = changebtn.join('');
})

document.getElementById("b7").addEventListener("click", function () {
  result.push(num5)
  changebtn.push(num5)
  document.getElementById("b1").value = changebtn.join('');
})

document.getElementById("b8").addEventListener("click", function () {
  result.push(num6)
  changebtn.push(num6)
  document.getElementById("b1").value = changebtn.join('');
})

document.getElementById("b10").addEventListener("click", function () {
  result.push(num7)
  changebtn.push(num7)
  document.getElementById("b1").value = changebtn.join('');
})

document.getElementById("b11").addEventListener("click", function () {
  result.push(num8)
  changebtn.push(num8)
  document.getElementById("b1").value = changebtn.join('');
})

document.getElementById("b12").addEventListener("click", function () {
  result.push(num9)
  changebtn.push(num9)
  document.getElementById("b1").value = changebtn.join('');
})

document.getElementById("b5").addEventListener("click", function () {
  result.push("+")
  changebtn.push("+")
  document.getElementById("b1").value = changebtn.join('');
})

document.getElementById("b9").addEventListener("click", function () {
  result.push("-")
  changebtn.push("-")
  document.getElementById("b1").value = changebtn.join('');
})

document.getElementById("b13").addEventListener("click", function () {
  result.push("x")
  changebtn.push("x")
  document.getElementById("b1").value = changebtn.join('');
})

document.getElementById("b14").addEventListener("click", function () {
  result.push("/")
  changebtn.push("/")
  document.getElementById("b1").value = changebtn.join('');
})

document.getElementById("b16").addEventListener("click", function () {
  result.push(".")
  changebtn.push(".")
  document.getElementById("b1").value = changebtn.join('');
})

document.getElementById("b17").addEventListener("click", function () {
  var test = document.getElementById("b1").value;
  try {
    // Replace 'x' with '*' for correct evaluation
    test = test.replace(/x/g, '*');
    // Evaluate the expression
    let result = eval(test);
    document.getElementById("b1").value = result;
    changebtn = [result];
  } catch (e) {
    document.getElementById("b1").value = "Error";
    changebtn = [];
  }
})

function reset() {
  changebtn = []
  document.getElementById("b1").value = null;
  document.getElementById("b1").value = "Result";
}
document.getElementById("reset").addEventListener("click", reset)