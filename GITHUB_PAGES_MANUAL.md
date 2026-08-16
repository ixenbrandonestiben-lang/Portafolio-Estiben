# 📖 Mini Manual: Configurar GitHub Pages

## ¿Qué es GitHub Pages?

GitHub Pages es un servicio de GitHub que permite hospedar sitios web estáticos directamente desde tu repositorio. Es **gratuito** y perfecta para portafolios, blogs y documentación.

---

## 🚀 Pasos para Activar GitHub Pages

### Paso 1: Ve a la Configuración del Repositorio

1. En GitHub, abre tu repositorio `Portafolio-Estiben`
2. Haz clic en la pestaña **Settings** (Configuración) en la parte superior derecha

![Configuración](https://imgur.com/placeholder)

---

### Paso 2: Encuentra la Sección de Pages

En el menú lateral izquierdo, desplázate hacia abajo y haz clic en **Pages**

```
Menú izquierdo:
├── General
├── Access
├── Collaborators
├── Code and automation
│   ├── Actions
│   ├── Webhooks
│   └── ...
└── Code, planning, and automation
    ├── Pages ← AQUÍ
```

---

### Paso 3: Configura la Rama y Carpeta de Publicación

1. En la sección **Build and deployment**:
   - **Source**: Selecciona `Deploy from a branch` (si no está seleccionado)

2. En **Branch**:
   - Selecciona tu rama principal: `main` o `master`
   - En la segunda lista desplegable, elige: `docs`

3. Haz clic en **Save** para guardar

```
┌─────────────────────────────────┐
│ Build and deployment            │
├─────────────────────────────────┤
│ Source: Deploy from a branch    │
│ Branch: main / docs             │
│         ↑       ↑               │
│      Rama    Carpeta           │
│                                 │
│        [ Save ]                 │
└─────────────────────────────────┘
```

---

### Paso 4: Espera a que GitHub Construya tu Sitio

Después de guardar, GitHub procesará tu sitio. Verás un mensaje como:

> "Your site is live at `https://tu-usuario.github.io/Portafolio-Estiben`"

Este proceso toma **1-2 minutos**.

---

## ✅ Verificar que Todo Funciona

1. Abre tu navegador
2. Ve a: `https://tu-usuario.github.io/Portafolio-Estiben`
   - Reemplaza `tu-usuario` con tu nombre de usuario de GitHub
3. Deberías ver tu portafolio completo con:
   - La página de inicio (index.html)
   - Todos los links funcionando
   - Las imágenes cargadas
   - El diseño con colores premium

---

## 📁 Estructura que GitHub Pages Está Leyendo

```
Portafolio-Estiben/
├── README.md
├── docs/                    ← GitHub Pages lee desde aquí
│   ├── index.html          ← Página de inicio
│   ├── sobre_mi.html
│   ├── proyectos.html
│   ├── habilidades.html
│   ├── educacion.html
│   ├── css/
│   │   ├── style.css
│   │   ├── sobre_mi.css
│   │   ├── habilidades.css
│   │   ├── proyectos.css
│   │   └── education.css
│   ├── img/                 ← Todas las imágenes aquí
│   │   ├── yo.jpg
│   │   ├── progra.jpg
│   │   └── ... (más imágenes)
│   └── ...
├── estructura/              ← (antiguo, no se usa)
├── css/                     ← (antiguo, no se usa)
└── img/                     ← (antiguo, no se usa)
```

---

## 🔗 URL Final de tu Portafolio

**URL:**
```
https://tu-usuario.github.io/Portafolio-Estiben
```

**Ejemplo con usuario "BrandonEstiben":**
```
https://brandonestiben.github.io/Portafolio-Estiben
```

Puedes compartir este enlace con empleadores, clientes o cualquier persona que quiera ver tu portafolio.

---

## 🛠️ Si Algo No Funciona

### El sitio no aparece después de 5 minutos:
1. Refresca la página (Ctrl + F5 o Cmd + Shift + R)
2. Borra el caché del navegador
3. Revisa que la rama y carpeta están correctas en Settings > Pages

### Los links están rotos:
- Verifica que los archivos HTML estén en `docs/` ✅
- Verifica que los CSS estén en `docs/css/` ✅
- Verifica que las imágenes estén en `docs/img/` ✅
- Todo ya está configurado correctamente

### Las imágenes no se cargan:
- Haz clic derecho en una imagen > Inspeccionar
- Verifica que la ruta sea: `../img/nombre-imagen.jpg`
- Si dice `img/nombre-imagen.jpg` sin `../`, el navegador está buscando en el lugar correcto

---

## 📱 Compartir tu Portafolio

Una vez que GitHub Pages esté activo, puedes compartir tu portafolio:

- **Por WhatsApp:** "Mi portafolio: `https://tu-usuario.github.io/Portafolio-Estiben`"
- **Por Email:** Incluye el enlace en tu CV
- **En Redes Sociales:** Comparte el link en LinkedIn, Instagram, etc.
- **En Aplicaciones:** Muchas plataformas permiten incluir URLs en perfiles

---

## 🎉 ¡Listo!

Ahora tu portafolio está en línea y accesible desde cualquier lugar del mundo. Es profesional, rápido y completamente gratis.

¿Preguntas? Revisa la [Documentación Oficial de GitHub Pages](https://docs.github.com/es/pages)
