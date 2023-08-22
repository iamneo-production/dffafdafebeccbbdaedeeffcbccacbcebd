$(document).ready(function() {
    // Step 2: Implement Ajax call to fetch data from "data.txt"
    $("#btnLoadDat").click(function() {
      $("#dataContainer").load("data.txt", function(response, status, xhr) {
        if (status == "success") {
          alert("Data loaded successfully!");
        } else {
          alert("Failed to load data.");
        }
      });
    });
  
    // Step 3: Fade out the odd-indexed fruits on button click
    $("#btnFadeOddFruits").click(function() {
      $("#fruitList li:odd").fadeOut();
    });
  });
  