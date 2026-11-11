(function () {
  var CLAVE = 'idioma';
  var raiz = document.documentElement;
  var T = window.TRADUCCIONES || {};
  var textos = [];
  var atributos = [];
  var titulo = null;
  var meta = null;
  var boton = null;

  function norm(s) {
    return s.replace(/\s+/g, ' ').trim();
  }

  function leer() {
    try { return localStorage.getItem(CLAVE); } catch (e) { return null; }
  }

  function guardar(valor) {
    try { localStorage.setItem(CLAVE, valor); } catch (e) {}
  }

  // Guarda el texto original (español) y su traducción (inglés)
  function recolectar() {
    var caminante = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: function (n) {
        var p = n.parentNode.nodeName;
        if (p === 'SCRIPT' || p === 'STYLE') return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      }
    });

    var n;
    while ((n = caminante.nextNode())) {
      var clave = norm(n.nodeValue);
      if (clave && T[clave]) {
        var ini = n.nodeValue.match(/^\s*/)[0];
        var fin = n.nodeValue.match(/\s*$/)[0];
        textos.push({ nodo: n, es: n.nodeValue, en: ini + T[clave] + fin });
      }
    }

    var nombres = ['alt', 'aria-label', 'title', 'placeholder'];
    var elementos = document.querySelectorAll('[alt], [aria-label], [title], [placeholder]');
    Array.prototype.forEach.call(elementos, function (el) {
      if (el.id === 'btn-tema' || el.id === 'btn-idioma') return;
      nombres.forEach(function (attr) {
        var valor = el.getAttribute(attr);
        if (valor && T[norm(valor)]) {
          atributos.push({ el: el, attr: attr, es: valor, en: T[norm(valor)] });
        }
      });
    });

    var tituloEs = document.title;
    titulo = { es: tituloEs, en: T[norm(tituloEs)] || tituloEs };

    var m = document.querySelector('meta[name="description"]');
    if (m) {
      var descEs = m.getAttribute('content') || '';
      meta = { el: m, es: descEs, en: T[norm(descEs)] || descEs };
    }
  }

  function aplicar(lang) {
    var ingles = lang === 'en';
    raiz.setAttribute('lang', lang);

    textos.forEach(function (t) {
      t.nodo.nodeValue = ingles ? t.en : t.es;
    });

    atributos.forEach(function (a) {
      a.el.setAttribute(a.attr, ingles ? a.en : a.es);
    });

    if (titulo) document.title = ingles ? titulo.en : titulo.es;
    if (meta) meta.el.setAttribute('content', ingles ? meta.en : meta.es);

    if (boton) {
      boton.textContent = ingles ? 'ES' : 'EN';
      var texto = ingles ? 'Cambiar a español' : 'Switch to English';
      boton.setAttribute('aria-label', texto);
      boton.title = texto;
    }
  }

  document.addEventListener('DOMContentLoaded', function () {
    var barra = document.querySelector('.topbar');
    if (!barra) return;

    var controles = barra.querySelector('.controles');
    if (!controles) {
      controles = document.createElement('div');
      controles.className = 'controles';
      barra.appendChild(controles);
    }

    boton = document.createElement('button');
    boton.type = 'button';
    boton.className = 'btn-control';
    boton.id = 'btn-idioma';
    boton.style.fontSize = '0.85rem';
    controles.appendChild(boton);

    recolectar();

    var actual = leer() === 'en' ? 'en' : 'es';
    aplicar(actual);

    boton.addEventListener('click', function () {
      actual = actual === 'en' ? 'es' : 'en';
      guardar(actual);
      aplicar(actual);
    });
  });
})();