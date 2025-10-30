function logar() {
  var senha = document.getElementById('floatingPassword').value

  if (senha == 'alpha@2024') {
    location.href = 'support.html'
  } else {
    alert('Senha incorreta')
  }
}