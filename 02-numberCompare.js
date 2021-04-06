var firstnumber = 1;
var secondnumber = 100;

alert (numberCompare(firstnumber, secondnumber));

function numberCompare (firstnumber, secondnumber){
if (firstnumber == secondnumber) {
  return "firstnumber and secondnumber are equal";
} else if (firstnumber > secondnumber){
  return "firstnumber is greater than secondnumber";
} else {
  return "secondnumber is greater than firstnumber";
}
}
