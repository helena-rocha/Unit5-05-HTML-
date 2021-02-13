let number = 0
let sentence = 'hello'

document.getElementById('button').addEventListener('click', multiplication)

function multiplication () {
  number = document.getElementById('input').value

  number = parseInt(number)

  number = number * number

  alert(number)
}
