<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "anime_website";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch anime list
$result = $conn->query("SELECT * FROM anime");

// Convert result to array
$animeList = [];
while ($row = $result->fetch_assoc()) {
    $animeList[] = $row;
}

// Output JSON
header('Content-Type: application/json');
echo json_encode($animeList);

// Close connection
$conn->close();
?>
