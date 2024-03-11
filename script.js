document.getElementById("btn").onclick = function () {
  const num = document.getElementById("val").value;
  let res;

  if (num % 2 != 0) {
    res = "odd";
  } else {
    res = "even";
  }

  document.getElementById("res").innerHTML =" Number " +  num + " is " + res;
};
