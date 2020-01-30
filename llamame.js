var container = document.getElementById("container");
container.innerHTML =
 '<div class="container">' +
 ' <div class="menu-toggle">' +
 ' <span class="phone fa fa-phone"></span>' +
 ' <span class="times fa fa-times"></span>' +
 "  </div>" +
 ' <div class="menu-round">' +
 ' <div class="btn-app">' +
 '<div class="container2">' +
 ' <form action="" method="get">' +
 " <h2>¿Te llamamos?</h2>" +
 ' <input type="text" placeholder="Nombre..." />' +
 ' <input type="number" placeholder="Numero..." />' +
 ' <button type="button">¡Llamame!</button>' +
 " </form>" +
 "</div>" +
 "</div>" +
 "</div>" +
 "</div>";

$(".menu-toggle").click(function() {
 $(".menu-toggle").toggleClass("open");
 $(".menu-round").toggleClass("open");
});
