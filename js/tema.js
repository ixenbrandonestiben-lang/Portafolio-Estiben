(function () {
  var CLAVE = 'tema';
  var raiz = document.documentElement;

  function leer() {
    try { return localStorage.getItem(CLAVE); } catch (e) { return null; }
  }

  function guardar(valor) {
    try { localStorage.setItem(CLAVE, valor); } catch (e) {}
  }

  // Se aplica de inmediato para evitar el "parpadeo" al cargar
  raiz.setAttribute('data-theme', leer() === 'light' ? 'light' : 'dark');

  document.addEventListener('DOMContentLoaded', function () {
    var barra = document.querySelector('.topbar');
    if (!barra) return;

    var controles = barra.querySelector('.controles');
    if (!controles) {
      controles = document.createElement('div');
      controles.className = 'controles';
      barra.appendChild(controles);
    }

    var boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'btn-control';
    boton.id = 'btn-tema';
    controles.appendChild(boton);

    function pintar() {
      var claro = raiz.getAttribute('data-theme') === 'light';
      var texto = claro ? 'Cambiar a tema oscuro' : 'Cambiar a tema claro';
      boton.textContent = claro ? '🌙' : '☀️';
      boton.setAttribute('aria-label', texto);
      boton.title = texto;
    }

    boton.addEventListener('click', function () {
      var nuevo = raiz.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
      raiz.setAttribute('data-theme', nuevo);
      guardar(nuevo);
      pintar();
    });

    pintar();
  });
})();