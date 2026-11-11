document.addEventListener('DOMContentLoaded', function () {
  var form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    var datos = new FormData(form);
    var correo = String(datos.get('email') || '').trim();
    var mensaje = String(datos.get('message') || '').trim();
    var ingles = document.documentElement.lang === 'en';
    var asunto = ingles ? 'Portfolio contact message' : 'Mensaje de contacto desde el portafolio';
    var remitente = ingles ? 'From' : 'De';
    var cuerpo = remitente + ': ' + correo + '\n\n' + mensaje;
    var destinatario = form.getAttribute('data-recipient');
    var enlace = 'mailto:' + destinatario +
      '?subject=' + encodeURIComponent(asunto) +
      '&body=' + encodeURIComponent(cuerpo);

    window.location.href = enlace;
  });
});
