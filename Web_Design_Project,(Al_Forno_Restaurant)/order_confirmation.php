<?php

/* Order Confirmation Page */

// Run this code when the user presses the confirm order button in order.html to show the user that their order has been confirmed.

// Get the value of the user's name from the order form in order.html using method="get".
$name = $_GET["name"];

// Get the order time that the user selected from the drop down menu.
$time = $_GET["time"];

// Notify the user that their order has been confirmed.
echo "<h1> Your order has been <u>CONFIRMED</u> ".$name." and will be ready in ".$time."!";

// Add a hyperlink to the websites home page.
echo "<br><br><a href=\"index.html\">Return Home</a>";

// Include footer.php which is a php file containing the footer for this page.
include 'footer.php';

?>