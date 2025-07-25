// Fill the code as per the requirements. Do not change the function name.

function PlaceOrder(): boolean {
    try {
        // Fill the code here.
        // Retrieve the DOM input elements like deliverydate, Momomenu, Momoshape, quantity, deliveryyes, and cutlery using its id.
        // Check for a valid deliverydate. If invalid, then display "Invalid delivery Date" in the div with id as "result".
        // If the deliverydate is valid, calculate the totalCost.
        // Check for the choices opted for door delivery and cutlery.

        // Display the appropriate result along with the totalCost as per the requirements given in the description.
        const deliverydate = (document.getElementById("deliverydate") as HTMLInputElement).value;
        const Momomenu = (document.getElementById("Momomenu") as HTMLSelectElement).value;
        const quantity = parseInt((document.getElementById("quantity") as HTMLInputElement).value, 10);
        const needDoordelivery = (document.getElementById("deliveryyes") as HTMLInputElement).checked;

        let result = "";
        let result1 = "";
        let result2 = "";
        let deliveryCost = 0;

        if (needDoordelivery) deliveryCost = 5;
        if (needDoordelivery) result1 = "with door delivery";
        else result1 = "without door delivery";

        if (isValidDeliveryDate(deliverydate)) {
            const totalCost = getCostOfMomoMenu(Momomenu) + deliveryCost + (quantity * 5);

            result = `Your ${quantity} ${Momomenu} Momo ${result1} cost is $${totalCost}`;
        } else {
            result = "Invalid delivery date";
        }
        document.getElementById("result").innerHTML = result;

      return false;
    } catch (e) {
        document.getElementById("result").innerHTML = `Function PlaceOrder: ${e}`;

    }	 	  	      	 		 	   	       	 	
     
}

function isValidDeliveryDate(deliverydate: string): boolean {
    try {
        const currentDate = new Date();
        const parsedDeliveryDate = new Date(deliverydate);

        // Fill the code to compare the deliverydate with currentDate
        // and return true if the deliverydate is valid. Otherwise, return false.
        // Condition: The deliverydate should be at least one day greater than the currentDate.
        if (parsedDeliveryDate > currentDate) {
            return true;
        } else {
            return false;
        }
    } catch (e) {
        document.getElementById("result").innerHTML = `Function isValidDeliveryDate: ${e}`;
        return false;
    }
}

function getCostOfMomoMenu(Momomenu: string): number {
    try {
        // Fill the code to return the cost based on Momo type.
        // Momo Mia Veg=60, Momo Mia Non Veg=50, Tandoori Panner=70,Veg Kebab Surprise=80 and Italian Pepperini & Onion=90 in Dollars.
        let cost = 0;
        if (Momomenu === "Momo Mia Veg") {
            cost = 60;
        } else if (Momomenu === "Momo Mia Non Veg") {
            cost = 50;
        } else if (Momomenu === "Tandoori Paneer") {
            cost = 70;
        } else if (Momomenu === "Veg Kebab Surprise") {
            cost = 80;
        } else if (Momomenu === "Italian Pepperini & Onion") {	 	  	      	 		 	   	       	 	
            cost = 90;
        }
        return cost;
    } catch (e) {
        document.getElementById("result").innerHTML = `Function getCostOfMomoMenu: ${e}`;
        return 0;
    }
}
