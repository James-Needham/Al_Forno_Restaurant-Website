window.onload = function() {
    // When the order button has been pressed by the user...
    orderNow.addEventListener("click", function() {

        // Set the cost of the order to 0.
        var order_cost = 0;

        // Multiply the cost of each item by the amount of them that the user specified in the text boxes and add it to the cost of the order.
        order_cost += (document.getElementById("caprese").value * 7.90);
        order_cost += (document.getElementById("salad").value * 6);
        order_cost += (document.getElementById("margherita-p").value * 10.50);
        order_cost += (document.getElementById("pepperoni-p").value * 12.70);
        order_cost += (document.getElementById("ragu").value * 9.50);
        order_cost += (document.getElementById("carbonara").value * 9.50);
        order_cost += (document.getElementById("coke").value * 2);
        order_cost += (document.getElementById("san-orange").value * 2.50);
        order_cost += (document.getElementById("water").value * 1);
        order_cost += (document.getElementById("sparkling-water").value * 1.50);
        order_cost += (document.getElementById("nutella_p").value * 8.50);
        order_cost += (document.getElementById("affogato").value * 3.70);
        order_cost += (document.getElementById("tiramisu").value * 4.50);

        // If the value of cost is NaN (not a number) then alert the user that they didn't enter a number in one or more of the text boxes.
        if(isNaN(order_cost)) {
            alert("You didn't enter a number in the text box. Try again!");
            // Output "You didn't enter a number in the text box. Try again!" into the div which usually displays the cost of the order. 
            document.querySelector("#order_info").innerHTML = "<strong style=\"color:red;\">You didn't enter a number in the text box. Try again!</strong>";
            // Reset the order menu.
            document.querySelector("#menu").reset();

            // Don't show the div which contains the form for user details as the cost of the order is NaN (not a number).
            collection_info.style.display = "none";
            delivery_info.style.display = "none";
        }
        else if(order_cost == 0) {
            // If the cost of the order is equal to 0 then notify the user that they didn't order anything and tell them to try again.
            alert("You haven't order anything. Try again!");
            // Output "You haven't order anything. Try again!" into the div which usually displays the cost of the order. 
            document.querySelector("#order_info").innerHTML = "<strong style=\"color:red;\">You haven't order anything. Try again!</strong>";
            // Don't show the form for user details as the user hasn't ordered anything.
            collection_info.style.display = "none";
            delivery_info.style.display = "none";
        }

        // The div which contains the user details needed for collection.
        var collection_info = document.querySelector("#collection_info");
        // The div which contains an address input for delivery. This div is contained within the collection div.
        var delivery_info = document.querySelector("#delivery_info");

        // If the user selects collection for their order then show the collection div without the delivery div.
        if(document.querySelector("#collection").checked === true) {
            if(order_cost > 25) {
                // If the cost of the order is greater than €25, then as part of the promotion, 'the couple deal' take €5 off the order as the user has spent more than €25.
                order_cost = order_cost - 5;
                // Tell the user that they have benefitted from the couple deal and output the cost of their order to 2 decimal places.
                document.querySelector("#order_info").innerHTML = "<p style=\"color:green;\"><strong>Promotion - 'The Couple Deal': You spent over €25 so we have taken €5 off your order!</strong></p><p style=\"font-size:20px;\">The total cost of your order is <strong><u>€" + order_cost.toFixed(2) + "</u></strong></p>";
            }
            else {
                // Otherwise, if the user hasn't spent more than €25 then just output the cost of their order to 2 decimal places.
                document.querySelector("#order_info").innerHTML = "<p style=\"font-size:20px;\">The total cost of your order is <strong><u>€" + order_cost.toFixed(2) + "</u></strong></p>";
            }

            // If the user selects collection for their order then show the collection div without the delivery div.
            collection_info.style.display = "block";
            delivery_info.style.display = "none";
        }
        else if(document.querySelector("#delivery").checked === true) {
            // Add €3 for the cost of delivery.
            order_cost += 3;
            if(order_cost > 25) {
                // If the cost of the order is greater than €25, then as part of the promotion, 'the couple deal' take €5 off the order as the user has spent more than €25.
                order_cost = order_cost - 5;
                // Tell the user that they have benefitted from the couple deal and have been charged €3 for delivery. Also output the cost of their order to 2 decimal places.
                document.querySelector("#order_info").innerHTML = "<p style=\"color:green;\"><strong>Promotion - 'The Couple Deal': You spent over €25 so we have taken €5 off your order!</strong></p><p style=\"font-size:20px;\">The total cost of your order is <strong><u>€" + order_cost.toFixed(2) + "</u></strong> (inc. €3 delivery charge)</p>";
            }
            else {
                // Otherwise, if the user hasn't spent more than €25 then tell the user they have been charged €3 for delivery and output the cost of their order to 2 decimal places.
                document.querySelector("#order_info").innerHTML = "<p style=\"font-size:20px;\">The total cost of your order is <strong><u>€" + order_cost.toFixed(2) + "</u></strong> (inc. €3 delivery charge)</p>";
            }
            // If the user selects collection then show the collection div along with the delivery div.
            collection_info.style.display = "block";
            delivery_info.style.display = "block";
        }
        else {
            // Otherwise, if the user didn't select either collection or delivery then alert the user and as the to select collection or delivery.
            alert("Select Collection or Delivery!");
            document.querySelector("#order_info").innerHTML = "<strong style=\"color:red;\">Select Collection or Delivery!</strong>";
        }

    });

    // When the confirm order is pressed by the user, check to see if the selected a payment type. 
    confirm_order.addEventListener("click", function() {
        // If the user didn't select a payment method then alert them that they need to select a payment method.
        if((document.querySelector("#visa_payment").checked === false) && (document.querySelector("#mastercard_payment").checked === false) && (document.querySelector("#cash_payment").checked === false)) {

            alert("You need to select a payment method! Try again!");
        }

    });

}