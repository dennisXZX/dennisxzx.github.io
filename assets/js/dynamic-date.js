(function () {
  var el = document.getElementById('dynamic-date');
  if (!el) return;
  var today = new Date();
  el.textContent = today.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
})();
