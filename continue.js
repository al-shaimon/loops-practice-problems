var numbers = [45, 48, 30, 32, 245, 1234, 32, 21, 54];
for(var i = 0; i < numbers.length; i++){
  var number = numbers[i];
  if (number > 50) {
    continue
  }
  console.log(number);
}