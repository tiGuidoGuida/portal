fetch('nav_dev.html')
  .then(res => res.text())
  .then(text => {
    let oldelem = document.querySelector('script#replace_with_navbar_dev')
    let newelem = document.createElement('header')
    newelem.innerHTML = text
    oldelem.parentNode.replaceChild(newelem, oldelem)
  })
