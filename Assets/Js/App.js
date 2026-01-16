let form = document.getElementById ('myForm');

form.addEventListener ('submit', function (e) {
  e.preventDefault ();

  let name = document.getElementById ('name').value;
  let error = document.getElementById ('error');

  if (name === '') {
    error.innerText = 'Please enter your name';
  } else {
    error.innerText = '';
    alert ('Message sent!');
  }
});

const text1 = document.getElementById ('desc1');
const innerText = document.getElementById ('desc1').innerText;
text1.innerText = innerText.substring (0, 70) + '...';
