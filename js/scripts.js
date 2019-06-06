// Backend logic



// UI logic

$(document).ready(function() {
  $("form").submit(function(event) {
    var favoriteCelebrity = $("#celebrity").val();
    var favoriteColor = $("input:radio[name=color]:checked").val();
    var favoriteFood = $("input:radio[name=food]:checked").val();
    var favoriteMovieTv = $("input:radio[name=movie-tv]:checked").val();
    var favoriteVacation = $("input:radio[name=vacation]:checked").val();

    if (favoriteColor === "green" && favoriteFood === "sushi" && favoriteMovieTv === "notebook" && favoriteVacation === "bali")
    $('#ryan').show();

    if (favoriteColor === "red" && favoriteFood === "pizza" && favoriteMovieTv === "cheers" && favoriteVacation === "mexico")
    $('#woody').show();

    if (favoriteColor === "blue" && favoriteFood === "cheeseburger" && favoriteMovieTv === "misery" && favoriteVacation === "switzerland")
    $('#kathy').show();

    if (favoriteColor === "purple" && favoriteFood === "fried-chicken" && favoriteMovieTv === "sense8" && favoriteVacation === "tahiti") {
    $('#jamie').show();
    } else {
      $('#no-match').show();
    }

  event.preventDefault();
  });
});
