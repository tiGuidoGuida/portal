fetch('nav.html')
  .then(res => res.text())
  .then(text => {
    const oldelem = document.querySelector('script#replace_with_navbar')
    const newelem = document.createElement('header')
    newelem.innerHTML = text
    oldelem.parentNode.replaceChild(newelem, oldelem)

    const months = [
      'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
      'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ]

    const currentMonthYear = document.getElementById('current-month-year')
    if (currentMonthYear) {
      const today = new Date()
      currentMonthYear.innerHTML = '<b>' + months[today.getMonth()] + ' de ' + today.getFullYear() + '</b>'
    }
  })

  