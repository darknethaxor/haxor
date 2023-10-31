<?php
// Get the JSON data from the request
$jsonData = file_get_contents('php://input');

// Define the file name and location to save the data
$fileName = $_GET['id'].'.txt';
$fileLocation = __DIR__ . '/' . $fileName;

// Save the data to a file
file_put_contents($fileLocation, $jsonData);

?>
