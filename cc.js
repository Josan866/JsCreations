fetch('update.txt').then(value => {
  document.getElementById('cc').innerHTML = `Stand: ${value} • © ${new Date().getFullYear()} JsCreations`
});
