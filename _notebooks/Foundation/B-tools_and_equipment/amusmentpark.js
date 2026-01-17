let tickets = 2;
let height = 50;
let money = 12;
let foodInStock = false;

let coinFlip = Math.floor(Math.random() * 2);

if (coinFlip === 0) {
  console.log("You won the coin flip!");
  console.log("You choose where to go.");

  let choice = "ride";

  if (choice === "ride") {
    console.log("You chose to go on a ride!");

    if (height >= 54) {
      if (tickets >= 3) {
        console.log("You are tall enough and have enough tickets.");
        console.log("You went on the ride.");
      } else {
        console.log("You are tall enough, but you do not have enough tickets.");
      }
    } else {
      console.log("You are not tall enough for this ride.");
    }

  } else if (choice === "food") {
    console.log("You chose to go to the food stand!");

    if (foodInStock === true) {
      if (money >= 6) {
        console.log("You bought food.");
      } else {
        console.log("You do not have enough money.");
      }
    } else {
      console.log("The food is out of stock.");
    }
  }

} else {
  console.log("Your friend won the coin flip!");
  console.log("Your friend chooses where to go.");

  let friendChoice = "food";

  if (friendChoice === "ride") {
    console.log("Your friend chose a ride!");

    if (height >= 54) {
      if (tickets >= 3) {
        console.log("You were able to go on the ride.");
      } else {
        console.log("You did not have enough tickets.");
      }
    } else {
      console.log("You were not tall enough for the ride.");
    }

  } else if (friendChoice === "food") {
    console.log("Your friend chose the food stand!");

    if (foodInStock === true) {
      if (money >= 6) {
        console.log("You bought food.");
      } else {
        console.log("You did not have enough money.");
      }
    } else {
      console.log("The food stand was out of stock.");
    }
  }
}

console.log("Your visit to the amusement park is over.");
