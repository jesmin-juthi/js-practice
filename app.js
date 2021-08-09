// seerToMon
function seerToMon(seer) {
    if (seer < 0) {
      return "Please enter valid unit!";
    } else {
      mon = seer / 40;
      return mon;
    }
  }
  
  let unit = seerToMon(120);
  console.log(unit);

// totalSales 

  
function totalSales(numberOfShirt, numberOfPant, numberOfShoe) {

  let shirtPerPice = 100;
  let pantPerPice = 200;
  let shoePerPice = 500;
  
  // total price

  let totalShirtPrice = numberOfShirt * shirtPerPice;
  let totalPantPrice = numberOfPant * pantPerPice;
  let totalShoesPrice = numberOfShoe * shoePerPice;

  //validation checking

  if (totalShirtPrice < 0 || totalPantPrice < 0 || totalShoesPrice < 0) {
    return "Please enter valid product item";
  } else {
    let totalProductPrice = totalShirtPrice + totalPantPrice + totalShoesPrice;

    return totalProductPrice;
  }
}

let myTotalSales = totalSales(5, 4, 2);

console.log(myTotalSales);


// delivery cost

function deliveryCost(totalTshirt) {

  let perCostLessThen100 = 100;
  let perCostBetween101To200 = 80;
  let perCostMoreThan200 = 50;

  // validation

  if (totalTshirt < 0) {
    return "Please give a valid number of Tshirt";
  }
  if (totalTshirt <= 100) {

    let totalCostLessThen100 = totalTshirt * perCostLessThen100;
    return totalCostLessThen100;

  } else if (totalTshirt > 100 && totalTshirt <= 200) {

    totalCostLessThen100 = perCostLessThen100 * 100;

    let restTshirt = totalTshirt - 100;
    let totalCostBetween101To200 = perCostBetween101To200 * restTshirt;

    return totalCostLessThen100 + totalCostBetween101To200;

  } else if (totalTshirt > 200) {

    totalCostLessThen100 = perCostLessThen100 * 100;
    totalCostBetween101To200 = perCostBetween101To200 * 100;

    let restTshirts = totalTshirt - 200;
    totalCostMoreThan200 = restTshirts * perCostMoreThan200;

    return ( totalCostLessThen100 + totalCostBetween101To200 + totalCostMoreThan200 );
  }
}

let myTotalCost = deliveryCost(520);

console.log(myTotalCost);

// perfect friend


let friends = ["korobi", "israt", "sathil", "jesmin", "juthi"];

function perfectFriend(allFriends) {
  for (let i = 0; i <= allFriends.length; i++) {
    if (allFriends[i].length == 5) {
      return allFriends[i];
    }
  }
}

let myPerfectFriend = perfectFriend(friends);
console.log(myPerfectFriend);