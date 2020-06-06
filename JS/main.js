'use strict'

{
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    
    var fizz = document.getElementById('fizz').value;
    var buzz = document.getElementById('buzz').value;
    var text = document.getElementById('text');

    if (text.hasChildNodes()) {
      while (text.firstChild) {
        text.removeChild(text.firstChild);
      }
    } 

    if (Number.isInteger(Number(fizz)) && Number.isInteger(Number(buzz))) {
      for (let i = 1; i < 100; i++) {
        if (i % fizz === 0 && i % buzz === 0) {
          const answer = document.createElement('p');
          text.appendChild(answer);
          answer.textContent = `FizzBuzz ${i}`;
        } else if (i % fizz === 0) {
          const answer = document.createElement('p');
          text.appendChild(answer);
          answer.textContent = `Fizz ${i}`;
        } else if (i % buzz === 0) {
          const answer = document.createElement('p');
          text.appendChild(answer);
          answer.textContent = `Buzz ${i}`;
        }
      };

    } else {
      const message = document.createElement('h2');
      message.textContent = '整数値を入力して下さい';
      text.appendChild(message);
    }
  });
}