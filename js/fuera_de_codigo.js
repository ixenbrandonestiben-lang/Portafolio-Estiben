(function () {
  /* ===== Aparición de los bloques al hacer scroll ===== */
  var bloques = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visible');
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12 });

    bloques.forEach(function (bloque) {
      observador.observe(bloque);
    });
  } else {
    bloques.forEach(function (bloque) {
      bloque.classList.add('visible');
    });
  }

  /* ===== Visor de fotos ampliadas ===== */
  var visor = document.createElement('div');
  visor.className = 'visor';
  visor.setAttribute('role', 'dialog');
  visor.setAttribute('aria-modal', 'true');

  var cerrar = document.createElement('button');
  cerrar.type = 'button';
  cerrar.className = 'visor__cerrar';
  cerrar.setAttribute('aria-label', 'Cerrar imagen');
  cerrar.textContent = '✕';

  var imagen = document.createElement('img');
  imagen.alt = '';

  var titulo = document.createElement('p');
  titulo.className = 'visor__titulo';

  visor.appendChild(cerrar);
  visor.appendChild(imagen);
  visor.appendChild(titulo);
  document.body.appendChild(visor);

  var anterior = null;

  function abrir(foto) {
    anterior = document.activeElement;
    imagen.src = foto.currentSrc || foto.src;
    imagen.alt = foto.alt;
    titulo.textContent = foto.alt;
    visor.classList.add('abierto');
    document.body.style.overflow = 'hidden';
    cerrar.focus();
  }

  function cerrarVisor() {
    visor.classList.remove('abierto');
    document.body.style.overflow = '';
    if (anterior && anterior.focus) anterior.focus();
  }

  // Un solo escuchador para todas las fotos de la página
  document.addEventListener('click', function (e) {
    var foto = e.target.closest ? e.target.closest('img[data-zoom]') : null;
    if (foto && !visor.contains(foto)) {
      abrir(foto);
    }
  });

  // Se cierra al tocar el fondo o el botón, pero no la foto
  visor.addEventListener('click', function (e) {
    if (e.target !== imagen) cerrarVisor();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && visor.classList.contains('abierto')) {
      cerrarVisor();
    }
  });
})();