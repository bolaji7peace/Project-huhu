
var budgetArray = [];

function addUp(){
  var pName = productName.value;
  var quant = quantityOwn.value;
  var prices = priceName.value;
  var budgetObj = {pName, quant, prices};

  
  // if (budgetObj.quant !== "" && budgetObj.prices !== "" ){
  //   result = quant * prices;
  //   display.innerHTML = `${result}`;
  // }

  budgetArray.push(budgetObj)
localStorage.setItem("budget", JSON.stringify(budgetArray))
  

  window.location.href = "result.html"
}

