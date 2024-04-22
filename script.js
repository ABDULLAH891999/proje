document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".currency button");
    const exchangeResult = document.getElementById("exchange-result");
  
    button.addEventListener("click", function() {
      const fromCurrency = document.getElementById("from-currency").value;
      const toCurrency = document.getElementById("to-currency").value;
      const amount = document.getElementById("amount").value;
  
      // Perform the currency conversion (this is just a placeholder)
      let result;
      if (fromCurrency === "USD" && toCurrency === "EUR") {
        result = amount * 0.89;
      } else if (fromCurrency === "USD" && toCurrency === "TL") {
        result = amount * 31.60 ;
      } else if (fromCurrency === "EUR" && toCurrency === "USD") {
        result = amount * 1.12;
      } else if (fromCurrency === "EUR" && toCurrency === "TL") {
        result = amount * 34.10;
      } else if (fromCurrency === "TL" && toCurrency === "USD") {
        result = amount * 0.075;
      } else if (fromCurrency === "TL" && toCurrency === "EUR") {
        result = amount * 0.067;
      }
  
      if (result) {
        exchangeResult.textContent = `${amount} ${fromCurrency} equals ${result.toFixed(2)} ${toCurrency}`;
      } else {
        exchangeResult.textContent = "Invalid conversion";
      }
    });
  });
  