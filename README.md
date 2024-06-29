# 🚀 Documentación Prueba M2

- Autor: Oscar Latorre
- Proyecto: Viajes Chile
- Fecha: 01 julio 2024
- Repositorio Github: https://github.com/odlatorre/viajes-chile

# Descripción

La agencia Viajes Chile solicita la creación de su landing page, que tenga un diseño atractivo
e innovador, utilizando los conocimientos que has adquirido a través de las distintas
unidades. Para esto, puedes guiarte por la siguiente estructura:

La página debe contener las siguientes secciones:
-  Una barra de navegación fija en la parte superior de la pantalla, con el logo y links a diferentes secciones de la página, haciendo un smooth scroll. ✅
-  Un carousel que muestre las imágenes destacadas del sitio.✅
- Una sección de presentación, utilizando favicons y 3 párrafos (debe desaparecer en
tamaños pequeños de pantalla).✅
- Una sección de destacados, que muestre 4 cards (tarjetas) con la imagen e
información asociada.✅
- Una sección de formulario de contacto.✅
- Una sección footer con links a las redes sociales.✅

## Requerimientos y Check List

1. Construir la estructura de la página usando HTML. ✅
- Construir la estructura de un archivo HTML, utilizando correctamente las
etiquetas semánticas para definir las distintas secciones de la página.-Realizar correctamente la carga de archivos y organización del directorio. ✅
2. Componer visualmente el documento HTML con propiedades CSS.✅
(2 Puntos)
- Aplicar la sintaxis de CSS utilizando selectores y clases de manera correcta,
definiendo notoriamente el aspecto visual del documento.✅
- Utilizar recursos externos como Google Fonts y Font Awesome, para definir
estilos de fuente. ✅
- El código debe estar ordenado, documentado e indentado.✅
3. Emplear elementos de Bootstrap en el documento HTML.
(2 Puntos)✅
- Realizar una correcta integración del CDN de Bootstrap.✅
- Emplear al menos 3 componentes de Bootstrap (excluyendo aquellos con
JavaScript), haciendo uso de la grilla y de clases utilitarias.
- Documentar la versión de los recursos utilizados.✅
4. Agregar componentes que utilicen JavaScript.✅
(2 Puntos)
- Utilizar adecuadamente la sintaxis de JavaScript.✅
- Aplicar correctamente dos o más componentes de Bootstrap JS (carousel,
tooltips, entre otros).✅
- El código debe estar ordenado y documentado.✅

## Directorio de Carpetas
- assets
    - css/style.css
    - js/jquery-script.js
    - img
- index.html
- README.md


## CDN Agregados

### Bootstrap version 5.3.3
- Tipo: CSS Framework

```HTML 
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>

```

### Font Awesome version: 6.5.2
- Tipo: Libreria Iconos

```HTML

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
```

### Google Fonts
Tipo: Fuente de texto
Fuente Titulo: playwrite-mx
Fuente Body: Open Sans
```HTML
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
 <link href="https://fonts.googleapis.com/css2?family=Playwrite+MX:wght@100..400&display=swap" rel="stylesheet">

```

### JQuery version: 3.7.1
tipo: Libreria Javascript
```HTML
<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
```

