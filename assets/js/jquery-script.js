// Codigo encontrado en https://www.w3schools.com/howto/howto_css_smooth_scroll.asp
$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on("click", function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});

// Agregando Tooltip de Bootstrap con jQuery
$(document).ready(function () {
  $('[data-bs-toggle="tooltip"]').each(function () {
    new bootstrap.Tooltip($(this));
  });
});

// Codigo Extraido de la clase para aparecer y desaparecer elemento
$(document).ready(function () {
  $(".card-img-top").click(function () {
    $(".card-body").toggle();
  });
});

// Este codigo cambia el icono de barras por el de la cruz cuando hacemos click al menu de celular
$(document).ready(function () {
  $(".toggle-icon").on("click", function () {
    var icon = $(this).find("i");
    if (icon.hasClass("fa-solid fa-bars")) {
      icon.removeClass("fa-solid fa-bars").addClass("fa-solid fa-x");
    } else {
      icon.removeClass("fa-solid fa-x").addClass("fa-solid fa-bars");
    }
  });
});

// Activa el Modal del formulario
$(document).ready(function () {
  $("#contact").on("submit", function (event) {
    event.preventDefault();
    $("#exampleModal").modal("show");
  });

  $("#exampleModal").on("shown.bs.modal", function () {
    $("#name").focus();
  });
});
