fetch('update.txt')
  .then(data => data.text())
  .then(value => {
    document.getElementById('cc').innerHTML = `Stand: ${value} • © ${new Date().getFullYear()} JsCreations`
  });
