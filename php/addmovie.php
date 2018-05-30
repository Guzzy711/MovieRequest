<?php 
require 'dbconnect.php';


$movieTitle = $_POST['movieTitle'];
$year = $_POST['year'];
$director = $_POST['director'];
$YouTubeURL = $_POST['YouTubeURL'];

$insertMovieQuery = "INSERT into Movies (MovieTitle,Year,Director,YoutubeURL) VALUES ('$movieTitle','$year','$director','$YouTubeURL')";

echo $insertMovieQuery;

mysqli_query($mysqlConnect,$insertMovieQuery);

?>