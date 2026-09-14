(function () {
  if (localStorage.getItem('cookiesAccepted')) return;

  var banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.innerHTML =
    '<p>Usamos cookies propias y de terceros para mejorar tu experiencia. Puedes aceptarlas o rechazar las que no sean necesarias. Más información en nuestra <a href="contacto.html">política de privacidad</a>.</p>' +
    '<div class="cookie-actions">' +
      '<button type="button" class="btn btn-ghost" id="cookie-reject">Rechazar</button>' +
      '<button type="button" class="btn btn-primary" id="cookie-accept">Aceptar</button>' +
    '</div>';

  document.body.appendChild(banner);

  function closeBanner(value) {
    localStorage.setItem('cookiesAccepted', value);
    banner.remove();
  }

  document.getElementById('cookie-accept').addEventListener('click', function () {
    closeBanner('all');
  });
  document.getElementById('cookie-reject').addEventListener('click', function () {
    closeBanner('essential');
  });
})();
