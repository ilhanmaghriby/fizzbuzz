function fizzbuzz() {
  let text;
  text = document.getElementById('yokoso').value;
  if (text == 0) {
    text = 'GABOLEH 0!';
  } else if (text % 5 === 0 && text % 3 !== 0) {
    text = 'Buzz!';
  } else if (text % 3 === 0 && text % 5 !== 0) {
    text = 'Fizz';
  } else if (text % 5 === 0 && text % 3 === 0) {
    text = 'FizzBuzz!';
  } else {
    text = 'Tidak termasuk kelipatan 3 atau 5';
  }
  document.getElementById('result').innerHTML = text;
}
