$(document).ready(function () {

    console.log("JQUERY LOADED 🤙");
    $(document).on('click', '#submitMovie', function () {
        $movieTitle = $('#movieTitle').val();
        $yearMovie = $('#yearMovie').val();
        $director = $('#director').val();
        $YouTubeURL = $('#YouTubeURL').val();
        if (!$movieTitle) {
            $('.addMovieContainer')
                .append('<div class="alert alert-danger" style="margin-left:1%;" role="alert">Hov! Du mangler at udfylde noget.. 🤓</div >')
                .children(':last')
                .hide()
                .fadeIn('fast')
                .delay(2500)
                .fadeOut('slow');
        } else {
            $.post("php/addmovie.php", {
                    movieTitle: $movieTitle,
                    year: $yearMovie,
                    director: $director,
                    YouTubeURL: $YouTubeURL
                },
                function (data, status) {
                    console.log("Data: " + data + "\nSubmit ✍️ Status: " + status);
                }).done(function () { //This runs if the request is status code 200
                $('.addMovieContainer')
                    .append('<div class="alert alert-success" style="margin-left:1%;" role="alert">Hurra! '+ $movieTitle+'  er ' +
                        'tilføjet til listen! ✍️</div >')
                    .children(':last')
                    .hide()
                    .fadeIn('slow')
                    .delay(5000)
                    .fadeOut('slow');
            });
        }


    });


    $(function () {
        $('[data-toggle="tooltip"]').tooltip() //init tooltips
    })


})